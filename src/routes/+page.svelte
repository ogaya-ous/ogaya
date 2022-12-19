<script>
	import document_img from '$lib/images/document_img.jpg';
	import img_path from '$lib/images/sample.jpg';
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
			<div class="inner">
				<img src={ img_path } alt="">
			</div>
		</div>
	</div>

	<div id="about">
		<div class="document_img">
			<img src={ document_img } alt="">
		</div>
		<div class="text">
			<h2 class="title">
				<span>About</span>
				<p class="about_copy">区有文書から<br>大茅地区の歴史を辿る</p>
			</h2>
			<p class="document">
				大茅区有文書は、1695年より戦後1960年までの<br>
				各時代の方々の継続した努力で大茅地区に残された<br>
				2000タイトルにも及ぶ文章の総称です。
			</p>
			<p class="document_detail">
				20年以上前に解読できる方2人で数年かけて目録を作成しました。<br>
				現在、この目録がある事でどの様な古文書が存在するのか<br>
				判断が可能な状態になっております。<br>
				しかし、目録を作成された恩師たちも９０歳を過ぎ、<br>
				大茅区有文書の理解のある方も少なくなっています。
			</p>
			<p class="document_outlook">
				大茅地区の祖先の人達知り、後世に残して行くためにも<br>
				区有文書の内容を伝える必要が有ると感じています。<br>
				よってたかって大茅地区を通して皆様の力をお借りし、<br>
				永年温めて来ました、解読が出来ればと期待しています。<br>
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

	/* 大茅地区の紹介 */
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
	#about {
		display: flex;
		/* align-item: stretch; 子要素の高さが伸縮する指定 */
		align-items: stretch;
		justify-content: left;
		width: 100%;
		height: 700px;
		/* flexboxの高さ確認 */
		background-color: #e7e7e7;
	}


	#about .text {
		/* width: 38.50%; */
		width: auto;
		margin-left: 4.65%;
		padding: 20px 0;
	}

	#about .text h2.title span {
		display: block;
		margin-bottom: 10px;
		font-size: 16px;
		font-family: 'Roboto Condensed', sans-serif;
		letter-spacing: 5px;
	}

	#about .text h2.title p.about_copy {
		font-size: 35px;
		font-family: serif;
		line-height: 1.8;
		letter-spacing: 3px;
	}

	#about .text p.document,
	#about .text p.document_detail,
	#about .text p.document_outlook {
		margin: 40px 0;
		font-family: serif;
		line-height: 2;
		letter-spacing: 3px;
		font-weight: bold;
	}

	#about .document_img {	
		width: 55.50%;
		overflow: hidden;
	}

	#about .document_img img {
		width: 100%;
		height: 100%;
	}
</style>