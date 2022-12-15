<script>
	
</script>

<svelte:head>
	<title>よってたかって大茅地区</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div id="first_view">
		<div class="content">
			<h1>源流集落の<br>歴史をひも解く。</h1>
			<p>
				よってたかって大茅地区は、岡山県北部にある西粟倉村大茅地区の区有文書解読を目的とした古文書翻訳サイトです。<br>
				大茅地区にあるすべての区有文書の解読を目指します。
			</p>
			<div class="join_btn">
				<a href="/register">参加する</a>
			</div>
		</div>
	</div>

	<div id="news_list">
		<h2>News</h2>
		<ul>
			<li class="item">
				<a href="#">
					<p class="date">2022/12/14</p>
					<p class="category"><span>お知らせ</span></p>
					<p class="title">位置をleftにしました。位置をleftにしました。</p>
				</a>
			</li>
			<li class="item">
				<a href="#">
					<p class="date">2022/12/14</p>
					<p class="category"><span>お知らせ</span></p>
					<p class="title">みんな元気に研究をしました2。</p>
				</a>
			</li>
			<li class="item">
				<a href="#">
					<p class="date">2022/12/14</p>
					<p class="category"><span>お知らせ</span></p>
					<p class="title">みんな元気に研究をしました3。</p>
				</a>
			</li>
		</ul>
	</div>

	<div id="intro">
		<div class="title">
			<h2>
				<span>Introduction</span>
				<div class="intro_copy">
					<p>
						訪れてほしい、大茅地区に<br>感じてほしい、源流の大自然
					</p>
				</div>
			</h2>
		</div>
		<div class="ogaya">
			<p>ここに大茅地区に関する紹介が入ります。</p>
		</div>
	</div>

	<div id="about">
		<h2>About</h2>
		<div class="content">
			<p>ここには区有文書に関する説明が入ります。</p>
		</div>
	</div>
</main>

<style>
	/* リセットCSS */
	* {
    	margin: 0;
    	padding: 0;
	}


	/* ファーストビューのCSS */
	#first_view {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../lib/images/first_view.jpg);
		background-position: center center;
		background-repeat: no-repeat;
		background-attachment: fixed;
  		background-size: cover;
  		height: calc(100vh - 70px);
		width: auto;
	}

	#first_view .content {
		padding-top: 50px;
	}

	#first_view h1 {
		color: white;
		font-size: 100px;
		line-height: 1;
		margin-top: 50px;
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

	/* お知らせ欄のCSS */
	#news_list {
		width: 600px;
		margin: 0 auto;
		text-align: center;
		font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
	}

	#news_list h2 {
		font-size: 45px;
		margin: 10px 0;
	}

	#news_list .item {
		margin: 0;
	}	

	#news_list .item a {
		display: flex;
		justify-content: left;
		padding: 20px 20px;
		text-decoration: none;
		border-bottom: 1px solid #CCC;
	}

	#news_list .item:first-child a {
  		border-top: 1px solid #CCC;
	}

	#news_list li {
		list-style: none;
	}

	#news_list .item .date {
		margin: 0;
		padding: 0 20px 0 0;
	}

	#news_list .item .category {
		margin: 0;
		padding: 0 20px 0 0;
	}

	#news_list .item p {
		display: inline;
	}

	/* 大茅地区の紹介CSS */
	#intro {
		margin-top: 80px;
		margin-left: 10px;
	}

	#intro .title h2 span {
		display: block;
		margin-bottom: 10px;
		font-size: 16px;
		font-family: 'Roboto Condensed', sans-serif;
		letter-spacing: 5px;
	}

	#intro .title h2 .intro_copy {
		font-size: 35px;
		/*font-family: 'Noto Sans JP', serif;*/
		font-family: serif;
		line-height: 1.8;
		letter-spacing: 3px;
	}

	#intro .ogaya {
		margin: 10px 0;
	}

	/* 区有文書の説明CSS */
	#about h2 {
		font-size: 45px;
		margin: 10px 0;
		text-align: center;
	}
</style>
