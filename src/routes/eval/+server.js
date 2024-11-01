import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function POST({ request, fetch }) {
    const { script, import_md5 = false } = await request.json()
    if (import_md5) {
        const file = await fetch('/md5.js')
        const md5 = await file.text()

        const body = `${md5}\n${script}`;
        const result = eval(body)
        return json({
            result,
        })
    } else {
        const body = `${script}`;
        const result = eval(body)
        return json({
            result,
        })
    }

}