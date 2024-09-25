<script>
	const languages = [
		{ title: 'Javascript', logo: '/logos/js.png' },
		{ title: 'Typescript', logo: '/logos/typescript.png' },
		{ title: 'CPP', logo: '/logos/cpp.jpg' },
		{ title: 'Rust', logo: '/logos/rust_lang.png' },
		{ title: 'Python', logo: '/logos/python.png' }
	];

	const frameworks = [
		{ title: 'NEXT JS', logo: '/logos/next_js.png' },
		{ title: 'React', logo: '/logos/react.png' },
		{ title: 'Svelte', logo: '/logos/svelte.png' }
	];
</script>

<main>
	<h2 class="title">Languages</h2>
	<div class="languages">
		{#each languages as lang}
			<div class="lang">
				<div class={`image-container ${lang.title.toLowerCase()}`}>
					<img width="80" height="80" src={lang.logo} alt="logo" />
				</div>
				<h3>{lang.title}</h3>
			</div>
		{/each}
	</div>
	<h2 class="title">Frameworks</h2>
	<div class="frameworks">
		{#each frameworks as framework, i}
			<div class={`framework framework-${i + 1}`}>
				<img src={framework.logo} alt="logo" />
				<h2>{framework.title}</h2>
			</div>
		{/each}
	</div>
</main>

<style>
	.title {
		text-decoration: underline;
	}
	.languages {
		display: flex;
		gap: 20px;
		padding: 20px 0px;
		flex-wrap: wrap;
	}
	.lang {
		height: 80px;
		display: flex;
		align-items: center;
		background-color: #171717;
		border: 1px solid #262626;
		border-radius: 5px;
		cursor: default;
		overflow: hidden;
	}
	.lang > h3 {
		padding: 10px;
	}

	.image-container {
		width: 80px;
		height: 80px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.image-container > img {
		object-fit: cover;
	}
	.javascript {
		background-color: #f1dc4f;
	}
	.typescript {
		background-color: #3178c6;
	}
	.cpp,
	.python {
		background-color: white;
	}
	.rust {
		background-color: rgb(246, 63, 63);
	}
	.lang:has(.javascript) {
		border-color: #f1dc4f;
	}
	.lang:has(.typescript) {
		border-color: #3178c6;
	}
	.lang:has(.cpp, .python) {
		border-color: white;
	}
	.lang:has(.rust) {
		border-color: rgb(246, 63, 63);
	}

	/* 
        Here starts the framework CSS
    */
	.frameworks {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 10px;
	}
	.framework-1 {
		grid-row: span 2; /* Takes up both rows (full height) */
	}
	.framework-2 {
		grid-column: 2 / span 3; /* Takes up the second column */
		grid-row: 1; /* First row */
	}
	.framework-3 {
		grid-column: 2 / span 3; /* Second column */
		grid-row: 2; /* Second row */
	}

	.framework {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #262626;
		overflow: hidden;
		border-radius: 5px;
	}
	.framework > img {
		position: absolute;
		width: 100%;
		object-fit: cover;
		z-index: -1;
		opacity: 0.2;
		filter: blur(2px);
		scale: 1;
		transition: all 0.2s ease-in;
	}
	.framework:hover > img {
		scale: 0.7;
		filter: blur(0px);
	}

	@media (width <= 600) {
		.frameworks {
			display: flex;
			flex-direction: column;
		}
	}
</style>
