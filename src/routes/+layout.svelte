<script>
	import Header from './Header.svelte';
</script>

<div id="index">
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

	#index {
		background-image: url(../lib/images/first_view.jpg);
		background-position: center center;
		background-repeat: no-repeat;
  		background-size: cover;
  		height: 100vh;
	}
</style>

<!--
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

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