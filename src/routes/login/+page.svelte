<script>
	import Login from './login.svelte';
</script>

<svelte:head>
	<title>よってたかって大茅地区</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div id="login">
	<section>
		<Login />
	</section>
</div>

<style>
	* {
    	margin: 0;
    	padding: 0;
	}

	#login {
		height: calc(100vh - 70px);
		background-color: #e7e7e7;
	}

	#login section {
		display: flex;
		padding-top: 12%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
