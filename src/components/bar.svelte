<script lang="ts">
	import { onMount } from 'svelte';
	const links: { name: string; url: string }[] = [
		{ name: 'Projects', url: '/' },
		{ name: 'Skills', url: '/skills' },
		{ name: 'Music', url: '/music' },
		{ name: 'Movies', url: '/movies' }
	];

	let path = '';

	onMount(() => {
		path = window.location.pathname;
	});
</script>

<nav>
	<div class="container">
		<div id="panel">
			{#each links as link}
				<a
					on:click={() => (path = link.url)}
					style={`${path === link.url && 'background-color: #262626;'}`}
					href={link.url}>{link.name}</a
				>
			{/each}
		</div>
	</div>
</nav>

<style>
	nav {
		padding: 10px 0px;
		width: 100%;
		overflow: hidden;
	}
	#panel {
		padding: 10px;
		display: flex;
		justify-content: space-between;
		gap: 20px;
		list-style-type: none;
		border: 1px solid #262626;
		border-radius: 5px;
		overflow-x: auto;
		scrollbar-width: 0px;
	}
	#panel > a {
		padding: 10px 20px;
		text-align: center;
		cursor: pointer;
		background-color: noen;
		transition: all 0.2s ease-in;
		border-radius: 5px;
	}

	a:hover {
		background-color: #262626;
	}
	a {
		text-decoration: none;
		color: aliceblue;
	}
</style>
