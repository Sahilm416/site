<script>
	const projects = [
		{
			title: 'RedShield Authentication',
			description:
				'RedShield is a authentication as a service platform where developers can setup auth in minutes',

			tags: ['Auth', 'SaaS', 'DevTools'],
			bullet_points: [
				'Servereless redis as database',
				'NPM package for UI and methods',
				'User management dashboard',
				'Built for NEXT JS apps (server actions)'
			],
			link: 'https://redshield.vercel.app/',
			github: 'https://github.com/sahilm416/redshield',
			image: '/redshield.png',
			tech_stack: ['NEXT JS', 'Upstash redis', 'NPM', 'TSUP', 'ShadCn', 'NodeMailer']
		},

		{
			title: 'Find-X Local Search',
			description:
				'Find-X is a local AI based search engine for web applications with so much information.',
			tags: ['RAG', 'AI', 'DevTools'],
			bullet_points: [
				'Headless scraper for data collection',
				'Desktop application for central control',
				'Cloudflare worker to serve requests',
				'Efficient retrival with vector database',
				'Support for REACT and NEXT JS apps'
			],
			link: 'https://www.find-x.tech/',
			github: 'https://github.com/find-x-ai',
			image: '/findx.png',
			tech_stack: [
				'PostgreSQL',
				'Upstash redis',
				'Modal Cloud',
				'Tauri',
				'Upstash vector',
				'NEXT JS',
				'LLAMA-3.1',
				'Tailwind'
			]
		},
		{
			title: 'Project Anjum',
			description:
				'Project Anjum is a successor of the RedShield project that provides a more simple and developer friendly experience.',
			tags: ['Auth', 'Docs', 'DevTools'],
			bullet_points: [
				'Support for neonDB postgres',
				'Automated setup with NPX executable',
				'Built for NEXT JS',
				'Clean documentation'
			],
			link: 'https://anjum.vercel.app/',
			github: 'https://github.com/sahilm416/anjum',
			image: '/anjum.png',
			tech_stack: ['Fuma docs', 'NPM', 'TSUP', 'JWT', 'NodeMailer']
		}
	];
</script>

<main>
	{#each projects as project, i}
		<div class="project">
			<div>
				<div class="heading">
					<h2><span>{i + 1}.</span> &nbsp;{project.title}</h2>
				</div>

				<div>
					<p>{project.description}</p>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<div><img src={project.image} /></div>
				<ul>
					{#each project.bullet_points as point}
						<li>{point}.</li>
					{/each}
				</ul>
			</div>
			<div>
				<h4>Links</h4>
				<div class="links">
					<a href={project.link}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-radio"
							><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path
								d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
							/><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path
								d="M19.1 4.9C23 8.8 23 15.1 19.1 19"
							/></svg
						> <span>Deployment</span></a
					>
					<a href={project.github}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-github"
							><path
								d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
							/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
						><span>GitHub</span></a
					>
				</div>
			</div>
			<div>
				<h4>Tech Stack</h4>
				<div class="tech_stack">
					{#each project.tech_stack as tech}
						<span>{tech}</span>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</main>

<style>
	img {
		width: 100%;
		border: 3px solid #262626;
		border-radius: 5px;
	}
	ul {
		list-style-position: outside;
	}
	.project {
		line-height: 1.5;
		padding: 20px 0px;
		border-bottom: 1px solid #262626;
	}

	.heading span {
		color: #a3a3a3;
	}

	.links {
		display: flex;
		gap: 20px;
	}
	.links > a > svg {
		stroke: #737373;
	}

	.links > a {
		background-color: #171717;
		color: #d4d4d4;
		padding: 10px 20px;
		border-radius: 5px;
		border: 1px solid #262626;
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.links > a:visited {
		color: white;
	}

	.tech_stack {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
	}
	.tech_stack > span {
		padding: 5px 10px;
		background-color: #171717;
		border: 1px solid #262626;
		border-radius: 4px;
		color: #d4d4d8;
	}
</style>
