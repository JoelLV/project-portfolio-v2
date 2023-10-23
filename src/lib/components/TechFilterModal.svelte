<script>
	// @ts-nocheck

	import { getTechnologyNames } from '$lib/helpers/data-helper';

	let showLangModal = false;

	const technologyNames = getTechnologyNames();
	export let toggledTechnologies = {};

	function toggleModal() {
		showLangModal = !showLangModal;
	}
	function toggleModalOnEsc({ key }) {
		if (showLangModal && key === 'Escape') {
			toggleModal();
		}
	}
	function techSelectionChanged({ target }) {
		toggledTechnologies[target.name] = target.checked;
		toggledTechnologies = toggledTechnologies;
	}
	function clearToggledTechnologies() {
		toggledTechnologies = {};
	}
	function closeModalIfUnfocused({ target }) {
		if (showLangModal && target.classList.contains('outer-tech-modal')) {
			showLangModal = false;
		}
	}
</script>

<svelte:body on:keydown={toggleModalOnEsc} on:click={closeModalIfUnfocused} />

<button class="hover:bg-secondary hover:bg-opacity-40 p-3 rounded-full" on:click={toggleModal}>
	<img src="code-logo.svg" alt="Filter color button." class="w-5 h-5" />
</button>

<div
	class="items-center justify-center w-screen h-screen fixed mx-auto z-20 top-0 left-0 bg-black bg-opacity-60 outer-tech-modal"
	style:display={showLangModal ? 'flex' : 'none'}
>
	<div class="flex flex-col w-2/3 min-w-[18rem] max-w-lg rounded-xl h-3/6 bg-tertiary p-8 gap-8">
		<p class="text-primary text-2xl font-medium">Filter by technology used.</p>
		<div class="flex gap-9 flex-wrap overflow-auto">
			{#each technologyNames as tech, index}
				<div class="flex gap-5 w-24">
					<input
						type="checkbox"
						name={tech}
						id={`tech-checkbox-${index}`}
						on:change={techSelectionChanged}
						checked={toggledTechnologies[tech]}
					/>
					<label for={`tech-checkbox-${index}`} class="font-medium">{tech}</label>
				</div>
			{/each}
		</div>
		<footer class="flex flex-row-reverse mt-auto gap-8">
			<button on:click={toggleModal}>Close</button>
			<button on:click={clearToggledTechnologies}>Clear selection</button>
		</footer>
	</div>
</div>
