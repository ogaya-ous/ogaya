<script>
	import Header from './Header.svelte';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	* {
    	margin: 0;
    	padding: 0;
	}
</style>

<!--
<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
-->