export const stripJsonBlocksForDisplay = (text: string) => {
  if (!text) { return '' }
  let cleaned = text
  // Remove complete ```json ... ``` blocks
  cleaned = cleaned.replace(/```\s*json[\s\S]*?```/gi, '')
  // Remove any in-progress json fence until end (streaming)
  cleaned = cleaned.replace(/```\s*json[\s\S]*$/gi, '')
  // Remove any trailing fence markers that may appear before "json" token arrives
  cleaned = cleaned.replace(/```[\s\S]*$/g, '')
  // Remove raw advisor JSON objects if present
  cleaned = cleaned.replace(/\{[\s\S]*?"advisor"\s*:\s*\{[\s\S]*?\}\s*\}/g, '')
  return cleaned.trim()
}
