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
			title: 'Project Anjum (RedShield 2.0)',
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
	{#each projects as project}
		<div class="project">
			<div>
				<div class="heading">
					<h2>{project.title}</h2>
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
					<a href={project.link}>Deployement</a>
					<a href={project.github}>GitHub</a>
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
		border: 1px solid black;
	}
	ul {
		list-style-position: outside;
	}
	.project {
		line-height: 1.5;
		padding: 20px 0px;
		border-bottom: 1px solid black;
	}

	.links {
		display: flex;
		gap: 20px;
	}

	.tech_stack {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
	}
	.tech_stack > span {
		padding: 5px 10px;
		background-color: #eee;
		border: 1px solid black;
	}
</style>
