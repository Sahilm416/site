<script>
	import Intro from '../components/intro.svelte';
</script>

<main>
	<div id="content">
		<Intro />
		<slot />
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: start;
		padding: 0px 20px;
	}
	#content {
		width: 100%;
		max-width: 800px;
	}
</style>
