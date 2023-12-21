<script>
	import LinkIconButton from '$lib/components/LinkIconButton.svelte';
</script>

<main class="flex flex-col gap-[8%] w-screen h-screen justify-center items-center absolute top-0">
	<section
		class="flex items-center gap-12 justify-center md:flex-row flex-col md:text-start text-center"
	>
		<img
			src="profile-picture.jpg"
			alt="My profile"
			class="md:w-[250px] md:h-[250px] w-[200px] h-[200px] rounded-full"
		/>
		<div class="flex flex-col gap-5">
			<h1 class="text-4xl md:text-5xl text-primary font-medium [text-shadow:0px_3px_4px_gray]">
				Hi, I'm Joel
			</h1>
			<h3
				class="text-2xl mdtext-3xl text-primary opacity-60 font-medium [text-shadow:0px_3px_5px_gray]"
			>
				Welcome to my Portfolio
			</h3>
		</div>
	</section>
	<section class="flex justify-center gap-[8%] w-full">
		<LinkIconButton
			link="https://github.com/JoelLV"
			logoPath="github-logo.svg"
			alt="Github link"
			tooltipText="Visit my Github Page."
			imgClass="md:h-[120px] md:w-[120px] h-[70px] w-[70px]"
		/>
		<LinkIconButton
			link="resume.pdf"
			logoPath="resume-logo.svg"
			alt="Resume download button"
			tooltipText="Download my Resume"
			imgClass="md:h-[120px] md:w-[120px] h-[70px] w-[70px]"
			download=""
		/>
		<LinkIconButton
			link="https://www.linkedin.com/in/joel-lopez-villarreal-455a80225/"
			logoPath="linkedin-logo.svg"
			alt="LinkedIn link"
			tooltipText="Visit my LinkedIn page"
			imgClass="md:h-[120px] md:w-[120px] h-[70px] w-[70px]"
		/>
	</section>
</main>
