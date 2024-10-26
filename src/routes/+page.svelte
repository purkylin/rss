<script>
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	const feeds = [
		{
			title: 'Hacker News',
			url: 'https://news.ycombinator.com/rss'
		},
		{
			title: 'Rust China',
			url: 'https://rustcc.cn/rss'
		},
		{
			title: 'cnBeta',
			url: 'https://rss.cnbeta.com.tw/'
		},
		{
			title: 'Rust Reddit',
			url: 'https://www.reddit.com/r/rust.rss'
		},
		{
			title: 'Mac Rumors',
			url: 'https://feeds.macrumors.com/MacRumors-All'
		}
	];

	let input = $state('');
</script>

<div class="mx-auto py-4 h-fit w-full md:w-1/3">
	<h1 class="text-center font-bold text-2xl pb-8">My Feeds</h1>
	<div class="flex flex-col text-center gap-4 mx-auto">
		{#each feeds as item}
			<Button href="/feed?url={item.url}" class="butt">
				{#if item.image}
					<img src={item.image} alt={item.title} />
				{/if}
				<span>{item.title}</span>
			</Button>
		{/each}
	</div>
	<div class="pt-16 flex flex-row w-full">
		<Input placeholder="Enter your rss link" bind:value={input} />
		<Button href="/feed?url={input}" disabled={input.length === 0}>Go</Button>
	</div>
</div>
