<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="logo">
		<a href="/"><img src={logo}></a>
	</div>
	<nav>
		<ul>
			<li><a href="/">ホーム</a></li>
			<li><a href="#">区有文書を読み解く</a></li>
			<li><a href="#">大茅地区の歴史</a></li>
			<li><a href="#">お問い合わせ</a></li>
			<li class="join_btn"><a href="/login">参加する</a></li>
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
		display: flex;
		align-items: center;
		box-sizing: border-box;
		justify-content: right;
	}

	ul {
		display: flex;
	}

	li {
		list-style: none;
	}

	a {
		font-family: "メイリオ";
		padding: 10px 0px;
		display: block;
		text-decoration: none;
		color: #113285;
		margin-right: 35px;
	}

	a:hover {
		text-decoration: underline #113285;
	}

	li.join_btn a {
		color: white;
		padding: 10px 30px;
		border-radius: 10px;
		background-color: #0F4C3A;
	}

	li.join_btn a:hover {
		text-decoration: none;
		background-color: #197157;
	}

	.logo {
		margin-left: 35px;
		float: left;
		position: fixed;
	}

	.logo img {
		width: auto;
		height: 50px;
	}
</style>
