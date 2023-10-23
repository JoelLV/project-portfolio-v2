<script>
	/** @type {String} */
	export let link;
	/** @type {String} */
	export let logoPath;
	/** @type {String} */
	export let tooltipText;
	/** @type {String} */
	export let alt;
	/** @type {String} */
	export let imgClass;
	/** @type {String | null} */
	export let download = null;

	let buttonOnFocus = false;
	let timeoutId = 0;
	let showTooltip = false;

	const displayTooltip = () => {
		buttonOnFocus = true;
		timeoutId = setTimeout(() => {
			if (buttonOnFocus) {
				showTooltip = true;
			}
		}, 400);
	};

	const removeTooltip = () => {
		buttonOnFocus = false;
		clearTimeout(timeoutId);
		showTooltip = false;
	};
</script>

<div class="flex flex-col items-center p-3 hover:bg-slate-200 rounded-full relative">
	<a href={link} on:mouseenter={displayTooltip} on:mouseleave={removeTooltip} {download}>
		<img src={logoPath} {alt} class={imgClass} />
	</a>
	<div
		class={`bg-gray-700 text-white absolute p-2 rounded-md w-max mt-[100%]`}
		class:hidden={!showTooltip}
	>
		{tooltipText}
	</div>
</div>
