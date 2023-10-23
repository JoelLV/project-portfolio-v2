<script>
	// @ts-nocheck
	import colorMapper from '$lib/data/tech-color.json';

	/** @type {String} */
	export let techName;
</script>

<div
	class={`text-white rounded-full px-5 py-1 text-sm md:text-base`}
	style:background-color={colorMapper[techName]}
>
	{techName}
</div>
