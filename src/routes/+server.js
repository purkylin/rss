import { json } from '@sveltejs/kit';
import Parser from 'rss-parser';
import { error } from '@sveltejs/kit';

export async function GET({ url }) {
    let link = url.searchParams.get('url');
    if (!link) {
        error(400, "not found url param")
    }

    let parser = new Parser()
    let feed = await parser.parseURL(link)

    return json(feed)
}