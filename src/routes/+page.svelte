<script>
	import img_path from '$lib/images/sample.jpg'
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

	<div id="news_card">
		<div class="news_card_wrapper news_card_radius">
			<article class="card">
				<div class="card_header">
					<p class="card_title">お知らせのタイトル1</p>
					<img src={ img_path } alt="" class="card_image">
				</div>
				<div class="card_body">
					<p class="card_text">
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
					</p>
				</div>
			</article>
		</div>
		<div class="news_card_wrapper news_card_radius">
			<article class="card">
				<div class="card_header">
					<p class="card_title">お知らせのタイトル2</p>
					<img src={ img_path } alt="" class="card_image">
				</div>
				<div class="card_body">
					<p class="card_text">
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
					</p>
				</div>
			</article>
		</div>
		<div class="news_card_wrapper news_card_radius">
			<article class="card">
				<div class="card_header">
					<p class="card_title">お知らせのタイトル3</p>
					<img src={ img_path } alt="" class="card_image">
				</div>
				<div class="card_body">
					<p class="card_text">
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
						お知らせの内容が入力されます。
					</p>
				</div>
			</article>
		</div>
	</div>

	<div id="intro">
		<div class="text">
			<h2 class="title">
				<span>Introduction</span>
					<p class="intro_copy">
						訪れてほしい、大茅地区に<br>感じてほしい、源流の大自然
					</p>
			</h2>
			<p class="ogaya">
				大茅地区は、春になると15000株の芝桜があたり一面に広がる<br>
				岡山県北部の限界集落です。
			</p>
			<!-- 文章は仮 -->
			<p class="ogaya_detail">
				世界的なスノーリゾート・白馬のお隣にあって、<br>
				地味なイメージがあるかもしれない信濃大町ですが、<br>
				実は、黒部ダムの長野県側の玄関口があるだけでなく、<br>
				周囲の山並みを水鏡に映す仁科三湖、<br>
				長い歳月を経て人々が築き上げてきた美しい田園風景や町並み、<br>
				パウダースノーのスキー場、心安らぐ温泉などなど、<br>
				旅心を満たすコンテンツが満載です。
			</p>
			<p class="yotte_ogaya">
				「よってたかって大茅地区」では、<br>
				春夏秋冬、とりどりに変わる大茅地区の自然の魅力と、<br>
				その魅力を五感で感じられるあんなこと、こんなことを、映像でご紹介。<br>
				めちゃくちゃ　限界集落。<br>
				あした行ってみたくなる、大茅地区です。
			</p>
		</div>
		<div class="ogaya_img">
			<img src={ img_path } alt="">
		</div>
	</div>

	<div id="about">
		<h2>About</h2>
		<div class="content">
			<p>ここには区有文書に関する説明が入ります。</p><br>
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
		padding-top: 4%;
	}

	#first_view h1 {
		color: white;
		font-size: 100px;
		line-height: 1;
		margin-top: 10%;
		margin-left: 60px;
		margin-bottom: 50px;
		font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
	}

	#first_view p {
		color: white;
		margin-left: 70px;
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
		margin-left: 70px;
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
	#news_card {
		margin: 80px 80px 0;
		display: flex;
	}

	#news_card .news_card_wrapper {
		margin: 1rem auto;
		width: 380px;
	}

	#news_card .news_card_radius {
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
	}

	#news_card .card {
		background-color: #fff;
		box-shadow: 0 0 0px rgba(0, 0, 0, .16);
		color: #212121;
		text-decoration: none;
	}

	#news_card .card_header {
		display: flex;
		flex-wrap: wrap;
	}

	#news_card .card_title {
		padding: 1rem 1.5rem 0;
		font-size: 1.6rem;
		order: 1;
		font-weight: bold;
		text-decoration: none;
		border-bottom: solid 3px black;
	}

	#news_card .card_image {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	#news_card .card_body {
		padding: 0.5rem 1.5rem;
	}

	#news_card .card_text {
		font-size: .8rem;
		margin-top: 0;
		text-decoration: none;
	}

	/* 大茅地区の紹介CSS */
	#intro {
		margin-top: 80px;
		margin-right: 160px;
		margin-left: 160px;
		display: flex;
		justify-content: space-between;
	}

	#intro .text h2.title span {
		display: block;
		margin-bottom: 10px;
		font-size: 16px;
		font-family: 'Roboto Condensed', sans-serif;
		letter-spacing: 5px;
	}

	#intro .text h2.title p.intro_copy {
		font-size: 35px;
		font-family: serif;
		line-height: 1.8;
		letter-spacing: 3px;
	}

	#intro .text p.ogaya, #intro .text p.ogaya_detail, #intro .text p.yotte_ogaya {
		margin: 40px 0;
		font-family: serif;
		line-height: 2;
		letter-spacing: 3px;
		font-weight: bold;
	}

	#intro .ogaya_img img {
		height: 750px;
		width: auto;
	}

	/* 区有文書の説明CSS */
	#about h2 {
		font-size: 45px;
		margin: 10px 0;
		text-align: center;
	}
</style>
