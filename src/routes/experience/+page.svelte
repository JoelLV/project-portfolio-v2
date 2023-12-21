<script>
	// @ts-nocheck
	import experienceData from '$lib/data/experience-data.json';
	import WorkExperience from '$lib/components/WorkExperienceCard.svelte';
	import ProjectSummary from '$lib/components/ProjectSummary.svelte';
	import TechFilterModal from '$lib/components/TechFilterModal.svelte';
	import { objectContentIsFalsey } from '$lib/helpers/data-helper';

	const works = experienceData.work;
	const projects = experienceData.project;

	let toggledTechnologies = {};
	let filterInput = '';

	function filterData(titleFilter, technologyObj, list) {
		return list.filter((value) => {
			const lowerFilterInput = titleFilter.toLowerCase();
			if (!value.title.toLowerCase().startsWith(lowerFilterInput)) {
				return false;
			}
			if (!objectContentIsFalsey(technologyObj)) {
				const { technologies } = value;
				for (const elem of technologies) {
					if (technologyObj[elem]) {
						return true;
					}
				}
				return false;
			}
			return true;
		});
	}

	$: filteredWorkObjs = filterData(filterInput, toggledTechnologies, works);
	$: filteredProjectObjs = filterData(filterInput, toggledTechnologies, projects);
</script>

<main class="px-[5%] relative pb-20 top-16 overflow-auto h-[calc(100vh-4rem)]">
	<div class="flex gap-6 items-center text-primary">
		<div class="flex flex-col mb-5 w-4/5 max-w-md">
			<label for="filter-input-id" class="text-lg">Filter content</label>
			<input
				type="text"
				name="filter-input"
				id="filter-input-id"
				bind:value={filterInput}
				class="text-primary h-10 border-primary border-2 px-3 rounded-lg focus:border-primary focus:outline-none"
			/>
		</div>
		<TechFilterModal bind:toggledTechnologies />
	</div>
	<h1 class="text-primary text-2xl md:text-3xl text-center mt-5 mb-10">Most relevant work experience</h1>

	{#if filteredWorkObjs.length === 0}
		<div class="flex text-primary w-full justify-center items-center h-16">
			Nothing to see here...
		</div>
	{:else}
		<section class="flex mx-10 my-6">
			{#each filteredWorkObjs as workObj}
				<WorkExperience work={workObj} />
			{/each}
		</section>
	{/if}
	<h1 class="text-primary text-2xl md:text-3xl my-10 text-center">Project Portfolio</h1>
	{#if filteredProjectObjs.length === 0}
		<div class="flex text-primary w-full justify-center items-center h-16">
			Nothing to see here...
		</div>
	{:else}
		<div class="flex flex-col gap-14 my-6 mx-10">
			{#each filteredProjectObjs as project, index}
				<ProjectSummary {project} inversed={(index + 1) % 2 === 0} />
			{/each}
		</div>
	{/if}
</main>
