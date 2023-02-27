<script>
	import document_img from '$lib/images/document_img.jpg';
	import img_path from '$lib/images/sample.jpg';
	import arrow from '$lib/images/arrow.png';
	import intro_img from '$lib/images/intro_img.jpg';
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
				よってたかって大茅地区は、<br class="br_tab_hidden">岡山県北部にある西粟倉村大茅地区の<br class="br_pc_hidden">区有文書解読を目的とした古文書翻訳サイトです。<br>
				大茅地区すべての区有文書の解読を目指します。
			</p>
			<div class="join_btn">
				<a href="/register">参加する</a>
			</div>
		</div>
	</div>

	<div class="sp_news">
		<h2 class="news_header">
			<span>お知らせ</span>
		</h2>
		<div class="news_list">
			<ul>
				<li class="news_area">
					<span class="news_title">お知らせタイトル1</span>
					<a href="#">
						<p class="news_text">お知らせの内容が入力されます。</p>
					</a>
					<div class="news_image">
						<img src={ arrow } alt="">
					</div>
				</li>
				<li class="news_area">
					<span class="news_title">お知らせタイトル2</span>
					<a href="#">
						<p class="news_text">お知らせの内容が入力されます。</p>
					</a>
					<div class="news_image">
						<img src={ arrow } alt="">
					</div>
				</li>
				<li class="news_area">
					<span class="news_title">お知らせタイトル3</span>
					<a href="#">
						<p class="news_text">お知らせの内容が入力されます。</p>
					</a>
					<div class="news_image">
						<img src={ arrow } alt="">
					</div>
				</li>
			</ul>
		</div>
	</div>

	<div class="pc_news">
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
	</div>

	<div id="intro">
		<div class="sp_ogaya_img">
			<img src={ intro_img } alt="">
		</div>
		<div class="text">
			<h2 class="title">
				<span>Introduction</span>
					<p class="intro_copy">
						訪れてほしい、大茅地区に<br>感じてほしい、源流の大自然
					</p>
			</h2>
			<p class="ogaya">
				大茅地区は、春になると15000株の<br>
				芝桜があたり一面に広がる岡山県北部の<br>
				限界集落です。
			</p>
			<!-- <p class="ogaya_detail">
				説明テキスト説明テキスト説明テキスト<br>
				説明テキスト説明テキスト説明テキスト<br>
				説明テキスト説明テキスト説明テキスト<br>
				説明テキスト説明テキスト説明テキスト<br>
				説明テキスト説明テキスト説明テキスト<br>
				説明テキスト説明テキスト説明テキスト<br>
				説明テキスト説明テキスト説明テキスト
			</p> -->
			<p class="yotte_ogaya">
				「よってたかって大茅地区」では、<br>
				春夏秋冬、とりどりに変わる大茅地区の<br>
				自然の魅力と、その魅力を五感で感じる<br>
				あんなこと、こんなことを、ご紹介。<br>
				めちゃくちゃ　限界集落。<br>
				あした行ってみたくなる、大茅地区です。
			</p>
		</div>
		<div class="ogaya_img">
			<div class="inner">
				<img src={ intro_img } alt="">
			</div>
		</div>
	</div>

	<div id="about">
		<div class="document_img">
			<div class="inner">
				<img src={ document_img } alt="">
			</div>
		</div>
		<div class="text">
			<h2 class="title">
				<span>About</span>
				<p class="about_copy">区有文書から<br>大茅地区の歴史をひも解く</p>
			</h2>
			<p class="document">
				大茅区有文書は、1695年より戦後1960年までの<br>
				各時代の方々の継続した努力で大茅地区に<br>
				残された2000タイトルにも及ぶ文章の総称です。
			</p>
			<p class="document_detail">
				20年以上前に解読できる方2人で数年かけて<br>
				目録を作成しました。<br>
				現在、この目録がある事で<br>
				どの様な古文書が存在するのか<br>
				判断が可能な状態になっております。<br>
				しかし、目録を作成された恩師たちも<br>
				９０歳を過ぎ、大茅区有文書の理解のある方も<br>
				少なくなっています。
			</p>
			<p class="document_outlook">
				大茅地区の祖先の人達知り、<br>
				後世に残して行くためにも<br>
				区有文書の内容を伝える必要が有ると<br>
				感じています。<br>
				よってたかって大茅地区を通して<br>
				皆様の力をお借りし、<br>
				永年温めて来ました、<br>
				解読が出来ればと期待しています。<br>
			</p>
		</div>
	</div>
</main>

<style>
	/* リセットCSS */
	* {
		margin: 0;
		padding: 0;
	}

	/* レスポンシブ化 (記述: モバイルファースト) */
	/* ファーストビュー */
	#first_view {
		position: relative;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../lib/images/first_view.jpg);
		background-position: right center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		height: calc(100vh - 55px);
		width: auto;
	}

	#first_view .content {
		position: absolute;
		padding-top: 4%;
		top: 20vh;
	}

	#first_view h1 {
		color: white;
		font-size: 45px;
		line-height: 1.5;
		margin-top: 10px;
		margin-left: 20px;
		margin-bottom: 10px;
		font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
	}

	#first_view p {
		color: white;
		margin-top: 10px;
		margin-left: 16px;
		margin-bottom: 10px;
		font-family: serif;
	}
	
	.join_btn a {
		background: white;
		border-radius: 3px;
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
		margin-left: 15px;
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

	/* お知らせ */
	.pc_news {
		display: none;
	}

	.sp_news {
		margin-top: 30px;
		margin-bottom: 30px;
		padding: 0 5.13%;
	}

	.sp_news .news_header {
		padding-bottom: 20px;
		 font-family: 'Noto Serif JP', serif;
	}

	.sp_news a {
		color: black;
		text-decoration: none;
	}

	.sp_news .news_area {
		display: grid;
		list-style: none;
		align-items: center;
		padding: 4.29% 0 4.29% 4.29%;
		grid-template-rows: 30px 20px;
		grid-template-columns: 285px 50px;
		border-bottom: 1px solid #e4e4e4;
	}

	.sp_news .news_area:nth-child(1) {
		border-top: 1px solid #e4e4e4;
	}

	.sp_news .news_title {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		font-size: 18px;
		font-weight: bold;
		font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
	}

	.sp_news .news_text {
		grid-row: 2 / 3;
		grid-column: 1 / 3;
		font-family: serif;
	}

	.sp_news .news_image {
		width: 100%;
		height: 100%;
		grid-row: 1 / 3;
		grid-column: 2 / 3;
	}

	.sp_news img {
		width: 40%;
		height: 40%;
		transform: translateY(80%);
	}

	/* 大茅地区の紹介 */
	.ogaya_img {
		display: none;		
	}
	
	#intro .sp_ogaya_img {
		width: 100%;
		height: 254.344px;
		overflow: hidden;
	}

	#intro .sp_ogaya_img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	#intro .text {
		text-align: center;
	}

	#intro .text h2.title span {
		display: block;
		margin: 10px 0 10px;
		font-size: 12px;
		font-family: 'Roboto Condensed', sans-serif;
		letter-spacing: 5px;
	}

	#intro .text h2.title p.intro_copy {
		font-size: 20px;
		font-family: serif;
		line-height: 1.8;
		letter-spacing: 3px;
	}

	#intro .text p.ogaya,
	#intro .text p.ogaya_detail,
	#intro .text p.yotte_ogaya {
		margin: 40px 0;
		font-family: serif;
		font-size: 14px;
		line-height: 2;
		letter-spacing: 3px;
		font-weight: bold;
	}

	/* 区有文書 */
	#about .document_img {
		width: 100%;
		height: 254.344px;
		overflow: hidden;
	}

	#about .document_img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	#about .text {
		text-align: center;
	}

	#about .text h2.title span {
		display: block;
		margin: 10px 0 10px;
		font-size: 12px;
		font-family: 'Roboto Condensed', sans-serif;
		letter-spacing: 5px;
	}

	#about .text h2.title p.about_copy {
		font-size: 20px;
		font-family: serif;
		line-height: 1.8;
		letter-spacing: 3px;
	}

	#about .text p.document,
	#about .text p.document_detail,
	#about .text p.document_outlook {
		margin: 40px 0;
		font-family: serif;
		font-size: 14px;
		line-height: 2;
		letter-spacing: 3px;
		font-weight: bold;
	}
 
	@media screen and (min-width:480px) { 
		/* ファーストビュー */
		#first_view .content {
			position: absolute;
			padding-top: 0;
			top: 25vh;
		}

		/* お知らせ */
		.sp_news {
			padding: 0 30px;
		}

		.sp_news .news_area {
			padding: 8.27% 0 8.27% 8.27%;
		}
	}
	
	@media screen and (min-width:768px) and ( max-width:1024px) {
		/* ファーストビュー */
		.br_tab_hidden {
			display: none;
		}

		/* お知らせ */
		.sp_news {
			padding: 0 13.02%;
		}

		.sp_news .news_area {
			grid-template-rows: 30px 20px;
			grid-template-columns: 400px 50px;
		}

		.sp_news img {
			width: 40%;
			height: 40%;
			transform: translateY(80%);
		}
	}

	@media screen and (min-width:1024px) {
		/* ファーストビュー */
		.br_tab_hidden{
			display: none;
		}
		
		.br_pc_hidden {
			display: none;
		}

		#first_view {
			height: calc(100vh - 70px);
		}

		#first_view .content {
			top: 0;
			padding-top: 4%;
		}

		#first_view h1 {
			font-size: 100px;
			line-height: 1;
			margin-top: 10%;
			margin-left: 60px;
			margin-bottom: 50px;
			font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
		}

		#first_view p {
			margin-left: 70px;
		}

		.join_btn a {
			margin-top: 2%;
			margin-right: 0;
			margin-left: 70px;
			margin-bottom: 0;
		}

		.join_btn a:hover {
			background: #6bb6ff;
			color: #FFF;
		}

		.join_btn a:hover:after {
			right: 1.4rem;
		}

		/* お知らせ */
		.sp_news {
			display: none;
		}

		.pc_news {
			display: block;
		}

		.pc_news .news_card_wrapper:hover {
			transform: scale(1.1,1.1);
			cursor: pointer;
		}

		.pc_news #news_card {
			margin: 20px 80px;
			display: flex;
		}

		.pc_news #news_card .news_card_wrapper {
			margin: 1rem auto;
			width: 380px;
		}

		.pc_news #news_card .news_card_radius {
			overflow: hidden;
			border-radius: 8px;
			box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
		}

		.pc_news #news_card .card {
			background-color: #fff;
			box-shadow: 0 0 0px rgba(0, 0, 0, .16);
			color: #212121;
			text-decoration: none;
		}

		.pc_news #news_card .card_header {
			display: flex;
			flex-wrap: wrap;
		}

		.pc_news #news_card .card_title {
			padding: 1rem 1.5rem 0;
			font-size: 1.6rem;
			order: 1;
			font-weight: bold;
			text-decoration: none;
			border-bottom: solid 3px black;
		}

		.pc_news #news_card .card_image {
			width: 100%;
			height: 200px;
			object-fit: cover;
		}

		.pc_news #news_card .card_body {
			padding: 0.5rem 1.5rem;
		}

		.pc_news #news_card .card_text {
			font-size: .8rem;
			margin-top: 0;
			text-decoration: none;
		}

		/* 大茅地区 */
		.sp_ogaya_img {
			display: none;
		}

		.ogaya_img {
			display: block;
		}

		#intro {
			display: flex;
			align-items: stretch;
			width: 100%;
			height: 100%;
		}

		#intro .text {
			text-align: left;
			margin-left: 4.65%;
			width: 558.437px;
			padding: 20px 0 0;
		}

		#intro .text h2.title span {
			margin: 0 0 10px;
			font-size: 16px;
		}

		#intro .text h2.title p.intro_copy {
			width: 510px;
			font-size: 36px;
		}

		#intro .text p.ogaya,
		#intro .text p.ogaya_detail,
		#intro .text p.yotte_ogaya {
			font-size: 16px;
		}

		#intro .ogaya_img {
			margin-left: 4.65%;
			position: relative;
			width: calc(100% - 558.437px);
			height: auto;
			object-fit: cover;
			overflow: hidden;
		}

		#intro .ogaya_img .inner {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		#intro .ogaya_img .inner img {
			width: 100%;
			height: 100%;
		}

		/* 区有文書 */
		#about {
			display: flex;
			align-items: stretch;
			width: 100%;
			height: 100%;
		}

		#about .text {
			text-align: left;
			margin-left: 4.65%;
			margin-right: 4.65%;
			width: 558.437px;
			padding: 20px 0 0;
		}

		#about .text h2.title span {
			margin: 0 0 10px;
			font-size: 16px;
		}

		#about .text h2.title p.about_copy {
			font-size: 36px;
		}

		#about .text p.document,
		#about .text p.document_detail,
		#about .text p.document_outlook {
			font-size: 16px;
		}

		#about .document_img {
			margin-left: 0;
			position: relative;
			width: calc(100% - 558.437px);
			height: auto;
			object-fit: cover;
			overflow: hidden;
		}

		#about .document_img .inner {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		#about .document_img .inner img {
			width: 100%;
			height: 100%;
		}
	}
</style>