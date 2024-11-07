import { error } from '@sveltejs/kit';

export async function load({ fetch, url }) {
    const link = url.searchParams.get('url');
    console.log('req', link)
    if (!link) {
        error(400, "not found the url param")
    }

    if (link.includes('cnbeta')) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }

    const response = await fetch(`/?url=${link}`)
    const feed = await response.json();
    if (response.status === 500) {
        error(400, 'Please check the feed link')
    }

    return feed
}