<script>
	
</script>

<svelte:head>
	<title>よってたかって大茅地区</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<dev id="first_view">
		<dev id="wrap">
			<dev class="content">
				<h1>源流集落の<br>歴史をひも解く</h1>
				<p>
					よってたかって大茅地区は、岡山県北部にある西粟倉村大茅地区の区有文書解読を目的とした古文書翻訳サイトです。<br>
					大茅地区にあるすべての区有文書の解読を目指します。井上より。
				</p>
				<div class="join_btn">
					<a href="/register">参加する</a>
				</div>
			</dev>
		</dev>
	</dev>
</main>

<style>
	* {
    	margin: 0;
    	padding: 0;
	}

	#first_view {
		height: 500px;
		background-color: rgba(0, 0, 0, 0.5);
	}

	#first_view h1 {
		color: white;
		font-size: 100px;
		line-height: 1;
		margin-top: 10%;
		margin-left: 10px;
		margin-bottom: 50px;
		font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
	}

	#first_view p {
		color: white;
		margin-left: 20px;
		font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
	}

	.join_btn a {
		background: white;
		border-radius: 3px;
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 2%;
		margin-right: 0;
		margin-left: 20px;
		margin-bottom: 0;
		max-width: 280px;
		padding: 10px 25px;
		color: #313131;
		transition: 0.3s ease-in-out;
		font-weight: 500;
		text-decoration: none;
	}

	.join_btn a:after {
		content: "";
		position: absolute;
		top: 50%;
		bottom: 0;
		right: 2rem;
		font-size: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: right 0.3s;
		width: 6px;
		height: 6px;
		border-top: solid 2px currentColor;
		border-right: solid 2px currentColor;
		transform: translateY(-50%) rotate(45deg);
	}
		
	.join_btn a:hover {
		background: #6bb6ff;
		color: #FFF;
	}
	
	.join_btn a:hover:after {
		right: 1.4rem;
	}
</style>
