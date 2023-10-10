<script>
	import '../app.css';
	import { page } from '$app/stores';

	const navOptions = [
		{ url: '/about-me', label: 'About Me' },
		{ url: '/experience', label: 'Experience' },
		{ url: '/', label: 'Home' }
	];
</script>

<div class="font-sans bg-tertiary h-screen">
    <nav
        class="flex flex-row-reverse gap-[6%] text-lg pr-[4%] h-16 items-center text-primary align-middle"
    >
        {#each navOptions as option}
            <a href={option.url} class={$page.url.pathname === option.url ? 'font-semibold' : ''}
                >{option.label}</a
            >
        {/each}
    </nav>

    <slot />
</div>