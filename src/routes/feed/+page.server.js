import { error } from '@sveltejs/kit';

export async function load({ fetch, url }) {
    const link = url.searchParams.get('url');
    if (!link) {
        error(400, "not found the url param")
    }

    const response = await fetch(`/?url=${link}`)
    const feed = await response.json();
    if (response.status === 500) {
        error(400, 'Please check the feed link')
    }

    return feed
}