<script>
    import { page } from '$app/stores';
    // import img_path from '$lib/images/img_doc1.jpg';
    import axios from 'axios';

    async function getDocument(page_num){
		const url = 'http://localhost:8000';
		return await axios.get(url + '/api/document/' + page_num);
    }

    // 文書一覧のページ番号
    $: page_num = $page.url.searchParams.get('page');
    $: next_page = Number(page_num) + 1;
    $: prev_page = Number(page_num) - 1;
    let img_url = 'http://localhost:8000/'

</script>

<main>
    <h2>　文書解読リスト</h2>
    <div id="cardlayout-wrap"><!-- カードレイアウトをラッピング -->
        <section class="card-list">
            <a class="card-link" href="#">
                <figure class="card-figure"><img src="/images/demo.png"></figure>
                <h2 class="card-title">カードレイアウト1</h2>
                <p class="card-text-tax">Flexboxとcale()を使ってかんたんにレスポンシブ対応カードレイアウトをつくる手順のご紹介</p>
            </a>
        </section>
        <section class="card-list">
            <a class="card-link" href="#">
                <figure class="card-figure"><img src="/images/demo.png"></figure>
                <h2 class="card-title">カードレイアウト2</h2>
                <p class="card-text-tax">Flexboxとcale()を使ってかんたんにレスポンシブ対応カードレイアウトをつくる手順のご紹介</p>
            </a>
        </section>
        <section class="card-list">
            <a class="card-link" href="#">
                <figure class="card-figure"><img src="/images/demo.png"></figure>
                <h2 class="card-title">カードレイアウト3</h2>
                <p class="card-text-tax">Flexboxとcale()を使ってかんたんにレスポンシブ対応カードレイアウトをつくる手順のご紹介</p>
            </a>
        </section>
    </div><!-- カードレイアウトをラッピング -->

</main>

<style>
    h2{
        margin: 5px;
        color: aliceblue;
        background-color: #7b7b7b;
    }

    /* カードレイアウト部分をラッピングし、
    Flexboxを指定"space-between"で各アイテムを均等に配置し、
    最初と最後のアイテムを端に寄せます。*/
    #cardlayout-wrap {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        margin: 2em auto;
        max-width: 960px;
        width: 100%;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    /* リンクテキストの下線を非表示 */
    a.card-link {
        text-decoration: none;
    }

    /* カードレイアウト内の画像を幅いっぱいに表示 */
    #cardlayout-wrap img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    .card-figure {
        margin: 0;
        padding: 0;
    }

    /* カードレイアウトのタイトル部分 */
    .card-title {
        margin: 0.6em 0 0;
        color: #333;
        text-align: center;
        font-size: 1.8em;
    }

    /* カードレイアウトの説明文部分 */
    .card-text-tax {
        margin: 0;
        padding: 1em;
        color: #818181;
    }

    /* カードレイアウトを1カラムで配置 */
    .card-list {
        margin: 0.5em auto;
        padding: 0;
        width: 96%;
        background: #f0f0f0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    }

    /* 画面幅768px以上の場合カードレイアウトを2カラムで配置 */
    @media all and (min-width: 768px) {
        .card-list {
            margin: 0.5em 0;
            width: calc(96% / 2); /* 96%幅を2で割るという指定 */
        }
    }

    /* 画面幅992px以上の場合カードレイアウトを3カラムで配置 */
    @media all and (min-width: 992px) {
        .card-list {
            width: calc(96% / 3); /* 96%幅を3で割るという指定 */
    }
        
    /* 最後の行が3列より少ない場合左寄せにレイアウトさせる */
        #cardlayout-wrap::after{
            content: "";
            display: block;
            width: calc(96% / 3);
        }
    }
</style>