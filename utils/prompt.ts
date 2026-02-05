import type { PromptVariable, UserInputFormItem } from '@/types/app'

export function replaceVarWithValues(str: string, promptVariables: PromptVariable[], inputs: Record<string, any>) {
  return str.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
    const name = inputs[key]
    if (name) { return name }

    const valueObj: PromptVariable | undefined = promptVariables.find(v => v.key === key)
    return valueObj ? `{{${valueObj.key}}}` : match
  })
}

export const userInputsFormToPromptVariables = (useInputs: UserInputFormItem[] | null) => {
  if (!useInputs) { return [] }
  const promptVariables: PromptVariable[] = []
  useInputs.forEach((item: any) => {
    const [type, content] = (() => {
      const type = Object.keys(item)[0]
      return [type === 'text-input' ? 'string' : type, item[type]]
    })()

    if (type === 'string' || type === 'paragraph') {
      promptVariables.push({
        key: content.variable,
        name: content.label,
        required: content.required,
        type,
        max_length: content.max_length,
        options: [],
      })
    }
    else if (type === 'number') {
      promptVariables.push({
        key: content.variable,
        name: content.label,
        required: content.required,
        type,
        options: [],
      })
    }
    else if (type === 'file' || type === 'file-list') {
      promptVariables.push({
        ...content,
        key: content.variable,
        name: content.label,
        required: content.required,
        type,
        max_length: content.max_length,
        options: [],
      })
    }
    else {
      promptVariables.push({
        key: content.variable,
        name: content.label,
        required: content.required,
        type: 'select',
        options: content.options,
      })
    }
  })
  return promptVariables
}

const getValueByPath = (obj: any, path: string) => {
  if (!obj || typeof obj !== 'object') { return undefined }
  const keys = path.split('.')
  let curr = obj
  for (const key of keys) {
    if (!curr || typeof curr !== 'object' || !(key in curr)) { return undefined }
    curr = curr[key]
  }
  return curr
}

export const resolvePromptTemplate = (appParams: any): string | undefined => {
  if (!appParams || typeof appParams !== 'object') { return undefined }
  const candidates = [
    'prompt_template',
    'promptTemplate',
    'pre_prompt',
    'prePrompt',
    'prompt',
    'model_config.prompt_template',
    'model_config.promptTemplate',
    'model_config.pre_prompt',
    'model_config.prePrompt',
    'model_config.prompt',
    'app_config.prompt_template',
    'app_config.promptTemplate',
    'app_config.pre_prompt',
    'app_config.prePrompt',
    'app_config.prompt',
  ]
  for (const path of candidates) {
    const value = getValueByPath(appParams, path)
    if (typeof value === 'string') { return value }
  }
  return undefined
}
