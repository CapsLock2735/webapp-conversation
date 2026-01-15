
import { type NextRequest, NextResponse } from 'next/server'
import { API_KEY, API_URL } from '@/config'
import { getInfo } from '@/app/api/utils/common'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const messageId = searchParams.get('messageId')
    const { user } = getInfo(request)

    if (!messageId) {
        return NextResponse.json({ error: 'Message ID required' }, { status: 400 })
    }

    const url = `${API_URL}/messages/${messageId}/suggested?user=${user}`

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        return NextResponse.json(data)
    }
    catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}
