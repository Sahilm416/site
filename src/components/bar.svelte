<script lang="ts">
	const links: { name: string; url: string }[] = [
		{ name: 'Projects', url: '/' },
		{ name: 'Skills', url: '/skills' },
		{ name: 'Blogs', url: '/blogs' },
		{ name: 'Music', url: '/music' },
		{ name: 'Movies', url: '/movies' }
	];
</script>

<nav>
	<div id="panel">
		{#each links as link}
			<a href={link.url}>{link.name}</a>
		{/each}
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
		border: 1px solid rgb(218, 215, 215);
		overflow-x: auto;
		scrollbar-width: 0px;
	}
	#panel > a {
		padding: 10px 20px;
		text-align: center;
		cursor: pointer;
		background-color: noen;
		transition: all 0.3s ease-in;
	}

	a:focus {
		background-color: #eee;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>
