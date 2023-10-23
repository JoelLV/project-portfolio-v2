<script>
	import LinkIconButton from './LinkIconButton.svelte';
	import TechBadge from './TechBadge.svelte';

	/** @type {{"title": String, "url": String | null, "githubUrl": String, "description": String, "technologies": String[]}} */
	export let project;
	/** @type {boolean} */
	export let inversed = false;

	const styleVariants = {
		flexRowReversed: 'md:flex-row-reverse'
	};
</script>

<div
	class={'flex items-center gap-10 flex-col md:flex-row ' +
		(inversed ? styleVariants.flexRowReversed : '')}
>
	<div
		class="flex flex-col min-w-[14rem] min-h-[14rem] w-56 h-56 bg-secondary rounded-lg shadow-md items-center p-5"
	>
		<img src="profile-picture.jpg" alt="Project preview." />
		<p class="text-primary text-sm mt-4 font-medium">{project.title}</p>
		<div class="flex justify-end w-full">
			{#if project.url !== null}
				<LinkIconButton
					link={project.url}
					logoPath="link-logo.svg"
					tooltipText="See project live"
					alt="Link to visit project in action."
					imgClass="w-8 h-8"
				/>
			{/if}
			<LinkIconButton
				link={project.githubUrl}
				logoPath="github-logo.svg"
				tooltipText="Visit github page"
				alt="Link to visit page."
				imgClass="w-8 h-8"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-4">
		<p class="text-primary text-sm md:text-base">{project.description}</p>
		<div class="flex gap-3 flex-wrap justify-center md:justify-start">
			{#each project.technologies as tech}
				<TechBadge techName={tech} />
			{/each}
		</div>
	</div>
</div>
