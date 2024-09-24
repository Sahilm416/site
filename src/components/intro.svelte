<script>
	import Bar from './bar.svelte';
</script>

<svelte:head>
	<title>Sahil - Home</title>
</svelte:head>
<main>
	<div>
		<h1>Sahil Mulani ✨</h1>
		<p id="intro">
			I'm a Software Developer curious about computer science
			and related fields. I enjoy creating clean, minimal apps that solve real problems.
		</p>
	</div>

	<strong>Making the world a better place!</strong>

	<Bar />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
	#intro {
		line-height: 1.7;
	}
</style>
