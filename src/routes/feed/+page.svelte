<script>
	import dayjs from 'dayjs';

	let { data } = $props();
	const feed = data;

	function formatDate(date) {
		const now = dayjs();
		const inputDate = dayjs(date);

		if (inputDate.isSame(now, 'day')) {
			return inputDate.format('HH:mm'); // Show time only if today
		} else {
			return inputDate.format('YYYY-MM-DD HH:mm'); // Show date and time otherwise
		}
	}

	function favicon(url) {
		const obj = new URL(url);
		return `https://icons.duckduckgo.com/ip3/${obj.hostname}.ico`;
	}
</script>

<div class="mx-auto py-4">
	<div class="mx-auto min-h-screen w-full md:w-1/2">
		<div class="pb-8">
			<div class="flex items-center justify-center gap-2">
				<img src={favicon(feed.link)} alt={feed.title} width="16" height="16" />
				<span class="text-2xl font-bold">
					{feed.title}
				</span>
			</div>

			<p class="subtitle text-center">Last update time: {formatDate(feed['lastBuildDate'])}</p>
		</div>
		<ul class="space-y-2 list-disc px-6">
			{#each feed['items'] as item}
				<li>
					<a href={item['link']} class="link line-clamp-2 text-lg">{item['title']} </a>
					<!-- <p class="subtitle">{@html item.content}</p> -->
					<p class="subtitle">{formatDate(item['pubDate'])}</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
