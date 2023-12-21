<script>
	import LinkIconButton from '$lib/components/LinkIconButton.svelte';
</script>

<main
	class="flex flex-col gap-10 items-center w-full top-16 relative h-[calc(100vh-4rem)] overflow-auto py-14"
>
	<div>
		<img src="profile-picture.jpg" alt="My profile" class="w-48 h-48 rounded-full static" />
	</div>
	<div class="flex justify-center gap-[10%] w-full">
		<LinkIconButton
			logoPath="github-logo.svg"
			alt="Visit github page button"
			link="https://github.com/JoelLV"
			imgClass="w-16 h-16"
			tooltipText="Visit my github page"
		/>
		<LinkIconButton
			logoPath="resume-logo.svg"
			alt="Resume download button"
			link="resume.pdf"
			imgClass="w-16 h-16"
			tooltipText="Download my resume"
			download=""
		/>
		<LinkIconButton
			logoPath="linkedin-logo.svg"
			alt="Visit linkedin page button"
			link="https://www.linkedin.com/in/joel-lopez-villarreal-455a80225/"
			imgClass="w-16 h-16"
			tooltipText="Visit my LinkedIn page"
		/>
	</div>
	<p class="w-full px-10 max-w-3xl text-primary">
		Hello, my name is Joel, and I'm currently a Computer Science student at Southern Adventist
		University. As you can see in my experience page where I post my most relevant projects and work
		experiences, I'm very passionate in this field. My interests and expertise lie in backend
		development such as building web services, messing around with databases and microservices, and
		building command line tools for automation. I'm also very interested in the area of Artificial
		Intelligence, so you might expect a few AI projects popping up in the near future. One thing
		that I do not enjoy a lot is frontend development, this may be because I do not have a lot of
		artistic creativity, but at the end of the day, this is just a preference. <br /><br />
		My interests do not only lie in Computer Science, however, as I see programming more of a job than
		a hobby. My hobbies include watching TV series, playing Volleyball with friends, playing Cello and
		Clarinet, hiking, swimming, playing casual videogames, and listening to classical music.
		<br /><br />
		As for work experience, I was an intern for one year and a half at a company named CIRC, where I
		worked as a full stack php developer. For more information about the company and the tech stack that
		we used, please go to the "Experience" page. I also worked as a TA for two Computer Science courses
		at my University: Essence of Computing and Fundamentals of Software Design, and also volunteered
		to be part of the AV staff at my local church. <br /><br />
		For academic accomplishments, I currently maintain a 4.0 GPA, was awarded the top achiever scholarship
		twice, and was also one of the few receivers of the Dr. Rahn and Natalia Shaw scholarship.
	</p>
</main>
