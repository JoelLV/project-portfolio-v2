<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const styleClasses = {
		selectedFontWeight: 'font-semibold'
	};

	const navOptions = [
		{ url: '/about-me', label: 'About Me' },
		{ url: '/experience', label: 'Experience' },
		{ url: '/', label: 'Home' }
	];
</script>

<div class="font-sans relative">
	<nav class="fixed z-10 bg-tertiary w-full max-h-16">
		<div
			class="sm:w-[500px] w-11/12 ml-auto flex flex-row-reverse justify-between text-lg pr-[2%] h-16 items-center text-primary"
		>
			{#each navOptions as option}
				<button
					class={`hover:bg-secondary rounded-full text-base md:text-lg px-5 py-1 ${
						$page.url.pathname === option.url ? styleClasses['selectedFontWeight'] : ''
					}`}
					on:click={() => goto(option.url)}>{option.label}</button
				>
			{/each}
		</div>
	</nav>
	<slot />
</div>
