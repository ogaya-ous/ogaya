<script lang="ts">
    import doc from '$lib/images/document_img.jpg';
    import type { PageData } from "./$types";
    export let data: PageData;

    export const history: string = data.history;
    console.log(history);
</script>

<main>
    <h2>　〇〇さんの翻訳履歴</h2>
    <div id="cardlayout-wrap"><!-- カードレイアウトをラッピング -->
        <section class="card-list">
            <a class="card-link" href="#">
                <figure class="card-figure"><img src={doc}></figure>
                <h5 class="card-day">ユーザーネーム</h5>
                <h2 class="card-title">文書の名前</h2>
                <p class="card-text-tax">冒頭の翻訳文</p>
            </a>
        </section>
        <section class="card-list">
            <a class="card-link" href="#">
                <figure class="card-figure"><img src={doc}></figure>
                <h5 class="card-day">ユーザーネーム</h5>
                <h2 class="card-title">文書の名前</h2>
                <p class="card-text-tax">冒頭の翻訳文</p>
            </a>
        </section>
        <section class="card-list">
            <a class="card-link" href="#">
                <figure class="card-figure"><img src={doc}></figure>
                <h5 class="card-day">ユーザーネーム</h5>
                <h2 class="card-title">文書の名前</h2>
                <p class="card-text-tax">冒頭の翻訳文</p>
            </a>
        </section>
        <section class="card-list">
            <a class="card-link" href="#">
                <figure class="card-figure"><img src={doc}></figure>
                <h5 class="card-day">ユーザーネーム</h5>
                <h2 class="card-title">文書の名前</h2>
                <p class="card-text-tax">冒頭の翻訳文</p>
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

    /* カードレイアウトのユーザー名部分 */
    .card-day {
        margin: 0.6em 0 0;
        text-decoration: none;
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
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    /* カードレイアウトの文書の写真部分のアニメーション */
    .card-list:hover .card-figure::before {
        opacity: 1;
    }

    .card-list:hover .card-figure::after {
        content: "解読文を読む";
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        opacity: 1;
    }

    .card-figure::before, .card-figure::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #fafafa;
        background-color: rgba(0, 0, 0, 0.4);
        font-size: 2rem;
        -webkit-transition: opacity .5s;
        transition: opacity .5s;
        opacity: 0;
    }

    .card-figure {
        position: relative;

        overflow: hidden;

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