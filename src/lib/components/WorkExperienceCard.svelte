<script>
	import LinkIconButton from './LinkIconButton.svelte';
	import TechBadge from './TechBadge.svelte';

	/** @type {{"title": String, "timeperiod": String, "technologies": String[], "description": String, "url": String}} */
	export let work;
</script>

<div
	class="flex flex-col lg:flex-row bg-secondary rounded-lg items-center p-8 text-primary shadow-lg"
>
	<div
		class="flex flex-col items-center lg:items-end w-full lg:w-1/3 text-center lg:text-end mb-5 lg:mb-0"
	>
		<p class="text-xl md:text-2xl">{work.title}</p>
		<p>{work.timeperiod}</p>
		<LinkIconButton
			logoPath="more-info-logo.svg"
			alt="Check job website"
			imgClass="w-6 h-6"
			link={work.url}
			tooltipText="Go to job website"
		/>
	</div>
	<div class="flex w-full">
		<div class="bg-primary mx-6 w-[1px] opacity-50 rounded-full hidden lg:block" />
		<div class="flex flex-col w-full">
			<div
				class="flex flex-wrap justify-center lg:justify-normal gap-3 mb-2 max-h-40 overflow-auto [scrollbar-color:#004A73_transparent] [scrollbar-width:thin]"
			>
				{#each work.technologies as techName}
					<TechBadge {techName} />
				{/each}
			</div>
			<div
				class="text-sm lg:text-base overflow-auto [scrollbar-color:#004A73_transparent] [scrollbar-width:thin] p-2 max-h-[200px]"
			>
				{work.description}
			</div>
		</div>
	</div>
</div>
