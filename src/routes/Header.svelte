<script>
	import logo from '$lib/images/logo.png';
</script>

<header>
	<div class="logo">
		<a href="/"><img src={ logo }></a>
	</div>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/news">News</a></li>
			<li><a href="/document?page=1">Document</a></li>
			<li><a href="#">History</a></li>
			<li><a href="#">Contact</a></li>
			<li class="login_btn"><a href="/login">Login</a></li>
		</ul>
	</nav>
</header>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	nav {
		top: 0;
		left: 0;
		width: 100%;
		height: 70px;
		margin: 0 auto;
		padding-top: 5px;
		display: block;
		align-items: center;
		box-sizing: border-box;
		justify-content: right;
		background-color: rgba(121, 121, 121, 0.082);
	}

	ul {
		display: flex;
		margin: 10px 0 0 auto;
		float: right;
	}

	li {
		list-style: none;
	}

	a {
		font-family: 'Noto Sans JP', sans-serif;
		padding: 10px 0px;
		display: block;
		text-decoration: none;
		color: black;
		margin-right: 35px;
	}

	a:hover {
		text-decoration: underline #113285;
	}

	li.login_btn a {
		color: white;
		padding: 10px 30px;
		border-radius: 10px;
		background-color: #0F4C3A;
	}

	li.login_btn a:hover {
		text-decoration: none;
		background-color: #197157;
	}

	.logo {
		margin-left: 35px;
		position: fixed;
	}

	.logo img {
		width: auto;
		height: 50px;
	}
</style>
