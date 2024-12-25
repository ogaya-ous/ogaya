<script lang="ts">
  import arrow from "$lib/images/arrow.png";
  import document_img from "$lib/images/document_img.jpg";
  import intro_img from "$lib/images/intro_img.jpg";
  import right_arrow from "$lib/images/right_arrow.png";
  import img_path from "$lib/images/sample.jpg";
  import deer from "$lib/images/deer_device2.png";
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  export let data: PageData;
  export let newsDatas = data.news;

  let firstItem = data.latestItem;

  // 文字列をトリミングする関数
  function truncate(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  function extractValue(obj: any) {
    if (obj?.S) return obj.S;
    if (obj?.N) return obj.N;
    return obj;
  }

  // console.log(data);
</script>

<svelte:head>
  <title>よってたかって大茅地区</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
  <div id="first_view">
    <div class="content">
      <h1>源流集落の<br />歴史をひも解く。</h1>
      <p>
        よってたかって大茅地区は、<br
          class="br_tab_hidden"
        />岡山県北部にある西粟倉村大茅地区の<br
          class="br_pc_hidden"
        />区有文書解読を目的とした古文書翻訳サイトです。<br />
        大茅地区に残されている大茅区有文書の解読を目指しています。
      </p>
      <div class="join_btn">
        <a href="/document?page=1">参加する</a>
      </div>
    </div>
  </div>

  <dev class="device">
    <h2 id="cont">現在の装置の画像</h2>

    <div class="content">
      <div class="content-item">
        <table>
          <tr>
            <th>温度(℃)</th>
            <th>湿度(％)</th>
            <th>気圧(hPa)</th>
            <th>積雪高(cm)</th>
          </tr>
          <tr>
            <td>{extractValue(firstItem.temp_in)}</td>
            <td>{extractValue(firstItem.humidity_in)}</td>
            <td>{extractValue(firstItem.pressure_in)}</td>
            <td>{Math.round(Number(68 - extractValue(firstItem.snow_dis)))}</td>
          </tr>
          <!-- <tr>
            <th>人感</th>
            <th>積雪高</th>
            <th>加速度Y</th>
            <th>加速度Z</th>
          </tr>
          <tr>
            <td>{extractValue(firstItem.motion)}</td>
            <td>{extractValue(firstItem.snow_dis)}</td>
            <td>{extractValue(firstItem.accelation_y)}</td>
            <td>{extractValue(firstItem.accelation_z)}</td>
          </tr> -->
          <!-- <tr>
              <th>コンピュータの消費電力</th>
              <th>ツイータの消費電力</th>
              <th>ウーハの消費電力</th>
              <th>積雪高</th>
            </tr>
            <tr>
              <td>{extractValue(firstItem.raspi_power)}</td>
              <td>{extractValue(firstItem.twee_power)}</td>
              <td>{extractValue(firstItem.woo_power)}</td>
              <td>{extractValue(firstItem.snow_dis)}</td>
            </tr> -->
        </table>
      </div>

      <div class="content-item">
        {#if data.imageUrl}
          <img
            src={data.imageUrl}
            alt="最新の装置の画像"
            class="device-image"
          />
        {:else}
          <p>画像が見つかりませんでした。</p>
        {/if}
        <h2>現在の装置の画像</h2>
      </div>
    </div>
  </dev>

  <div id="intro">
    <div class="text">
      <h2 class="title">
        <span>News</span>
      </h2>
    </div>
  </div>

  <div class="sp_news">
    <h2 class="news_header">
      <span>お知らせ</span>
    </h2>
    <div class="news_list">
      <ul>
        {#each newsDatas as newsData}
          <li class="news_area">
            <span class="news_title">{newsData.news_name}</span><br />
            <a href="news">
              <p class="news_text">
                {newsData.added_year}年{newsData.added_month}月{newsData.added_day}日
              </p>
            </a>
            <div class="news_image">
              <img src={arrow} alt="" />
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="pc_news">
    <div id="news_card">
      {#each newsDatas as newsData}
        <div class="news_card_wrapper news_card_radius">
          <article class="card">
            <div class="card_header">
              <p class="card_title">{truncate(newsData.news_name, 20)}</p>
              <img src={newsData.news_path} alt="" class="card_image" />
            </div>
            <div class="card_body">
              <p class="card_text">
                {truncate(newsData.news_explain, 100)}
              </p>
            </div>
          </article>
        </div>
      {/each}
      <button type="button"
        ><a href="/news" class="img_button"
          ><img class="right_arrow_img" src={right_arrow} alt="Read more." /></a
        ></button
      >
    </div>
  </div>

  <div id="intro">
    <div class="sp_ogaya_img">
      <img src={intro_img} alt="" />
    </div>
    <div class="text">
      <h2 class="title">
        <span>Introduction</span>
        <p class="intro_copy">
          春の花畑から冬の銀世界まで、<br />心が躍る季節の風景がここに。
        </p>
      </h2>
      <p class="ogaya">
        大茅地区は、 雄大な自然と交流できる岡山県県北の集落です。
      </p>
      <p class="yotte_ogaya">
        春は、花桃と1万5000株の芝桜が棚田のあぜ道一面に咲き誇り<br />
        <br />
        夏は、ホタルが川に集まり光り輝く<br />
        <br />
        秋は、百年の森林が赤や黄色に色づき紅葉する<br />
        <br />
        冬は、あらゆるものが雪で覆い尽くされ一面の銀世界が広がる<br />
        <br />
        など大茅地区は、四季折々、<br />
        うつろいゆく美しい自然が楽しめます。<br />
        <br />
        ぜひ足を運んでみてください。
      </p>
    </div>
    <div class="ogaya_img">
      <div class="inner">
        <img src={intro_img} alt="" />
      </div>
    </div>
  </div>

  <div id="about">
    <div class="document_img">
      <div class="inner">
        <img src={document_img} alt="" />
      </div>
    </div>
    <div class="text">
      <h2 class="title">
        <span>About</span>
        <p class="about_copy">区有文書から<br />大茅地区の歴史をひも解く。</p>
      </h2>
      <p class="document">
        大茅区有文書は、1695年より戦後1960年までの<br />
        各時代の方々の継続した努力で大茅地区に<br />
        残された2000タイトルにも及ぶ文章の総称です。
      </p>
      <p class="document_detail">
        20年以上前に解読できる方2人で数年かけて<br />
        目録を作成しました。<br />
        現在、この目録がある事で どの様な古文書が存在するのか<br />
        判断が可能な状態になっております。<br />
        しかし、目録を作成された恩師たちも<br />
        ９０歳を過ぎ、大茅区有文書の理解のある方も<br />
        少なくなっています。
      </p>
      <p class="document_outlook">
        大茅地区の祖先の人達知り、 後世に残して行くためにも<br />
        区有文書の内容を伝える必要が有ると感じています。<br />
        よってたかって大茅地区を通して<br />
        皆様の力をお借りし、永年温めて来ました、<br />
        解読が出来ればと期待しています。<br />
      </p>
    </div>
  </div>

  <div id="intro">
    <div class="sp_ogaya_img">
      <img src={deer} alt="" />
    </div>
    <div class="text">
      <h2 class="title">
        <span>repellent device</span>
        <p class="intro_copy">AIと音を用いた害獣対策</p>
      </h2>
      <p class="ogaya">
        近年，岡山県英田郡西粟倉村大茅では，<br />
        鹿による農作物被害が課題となっています．<br /><br />
        従来の被害対策として，侵入防止柵の設置や捕獲などの<br />
        対策が講じられてきましたが，十分な効果は得られておらず，<br />
        持続的な被害軽減策が求められています．<br /><br />

        そこで大茅の課題解決を目的とした音を利用した鹿忌避システムを開発中です．<br
        /><br />
        鹿忌避システムでは、鹿の音に対する慣れの低減を目的とした食事の検知を行っています。<br
        /><br />

        食事の検知を行うことで、長期間の忌避効果を得られることが考えられます。
        本サイトでは、開発中の鹿忌避装置のデータ、装置の画像を閲覧できます。<br
        />
        <button type="button" class="more"
          ><a href="https://repellent-device.vercel.app/" class="img_button"
            >もっと見る</a
          ></button
        >
      </p>
    </div>
    <div class="ogaya_img">
      <div class="inner">
        <img class="deer_img" src={deer} alt="" />
      </div>
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
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(../lib/images/first_view_v3.jpg);
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
    font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
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

  .device h2.title span {
    display: block;
    margin: 10px 0 10px;
    font-size: 12px;
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 5px;
  }

  .device h2#cont {
    padding: 0.8rem 0;
    margin-bottom: 0.2rem;
    background-image: linear-gradient(90deg, #b2d5de 0 20%, #dedede 20%);
    background-repeat: no-repeat;
    background-size: 100% 10%;
    background-position: bottom;
    color: #323232;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    width: 50%;
    margin: auto;
  }

  .device .content {
    width: 50%;
    margin: 0px auto;
    /* padding: 40px 0px; */
    display: flex;
  }

  .device .content-item {
    width: 40%;
    margin: auto;
  }

  .device .content-item h2 {
    text-align: center;
  }

  .device .content-item table {
    margin-top: 10%;
  }

  .device img {
    height: 200px;
    width: auto;
    margin: auto;
    background-color: #212121;
  }

  .device table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  .device table tr {
    border-bottom: solid 1px #eee;
    cursor: pointer;
  }

  .device table tr:hover {
    background-color: #d4f0fd;
  }

  table th,
  table td {
    text-align: center;
    width: 25%;
    /* padding: 15px 0; */
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
    font-family: "Noto Serif JP", serif;
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
    font-size: 15px;
    font-weight: bold;
    font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
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

  /* .right_arrow_img {
		margin-top: 10%;
		width: 5%;
		height: 5%;
	} */

  button {
    padding: 0;
    border: none;
    background: transparent;
  }
  button img {
    display: block;
    width: 50%;
  }
  button :hover {
    filter: brightness(10%);
  }

  .img_button {
    display: inline-block;
  }

  button.more {
    width: 150px;
    margin: 20px auto;
    display: block;
    background-color: #919191;
    color: #fff;
    padding: 10px 15px;
    border: none;
    outline: 0;
    transition: 0.5s;
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
    font-family: "Roboto Condensed", sans-serif;
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
    font-family: "Roboto Condensed", sans-serif;
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

  /* 鹿忌避装置*/
  .deer_img {
    height: 500px;
    width: auto;
  }

  @media screen and (max-width: 767px) {
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

  @media screen and (min-width: 768px) and (max-width: 1024px) {
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

  @media screen and (min-width: 1024px) {
    /* ファーストビュー */
    .br_tab_hidden {
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
      font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
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
      color: #fff;
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
      transform: scale(1.1, 1.1);
      cursor: pointer;
    }

    .pc_news #news_card {
      margin: 5px 50px;
      display: flex;
    }

    .pc_news #news_card .news_card_wrapper {
      margin: 1rem auto;
      width: 380px;
    }

    .pc_news #news_card .news_card_radius {
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .pc_news #news_card .card {
      background-color: #fff;
      box-shadow: 0 0 0px rgba(0, 0, 0, 0.16);
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
      font-size: 0.8rem;
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
      width: 600px;
      font-size: 36px;
    }

    #intro .text p.ogaya,
    #intro .text p.yotte_ogaya {
      width: 540px;
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
      width: 600px;
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

    .deer_img {
      width: auto;
      height: 400px;
    }
  }
</style>
