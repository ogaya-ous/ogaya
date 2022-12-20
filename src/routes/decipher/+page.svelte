<script>    
    import img_path from '$lib/images/img_doc1.jpg';
    import testimg_path from '$lib/images/first_view.jpg';
    import test2img_path from '$lib/images/sample.jpg';
</script>

<main>
    <h2>　文書翻訳</h2>
    <ul class="Pagination">
        <li class="Pagination-Item">
            <a class="Pagination-Item-Link" href="/pages/1/">
                <svg xmlns="http://www.w3.org/2000/svg" class="Pagination-Item-Link-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </a>
        </li>
        <li class="Pagination-Item">
            <a class="Pagination-Item-Link current" id="current" href="/pages/1/"><span>1/20</span></a>
        </li>
        <li class="Pagination-Item">
            <a class="Pagination-Item-Link" href="/pages/5/">
                <svg xmlns="http://www.w3.org/2000/svg" class="Pagination-Item-Link-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </a>
        </li>
        <a href="#" class="btn btn--orange">送信</a>
    </ul>
    <div class="decipher">
        <div class="decipher-item">
            <div class="decipher-item-text">
                <p class="paper vertical-text" contenteditable="true">
                    <span>草枕</span>
                    <span>牧野宗太は、こう考えた。</span>
                    <span>「明日は叔父の家に行こう。」</span>
                    <span>叔父ならこの事件について何か知っていると考えたためである。</span>
                    <span>しかし、叔父の家まではタクシーで３分もかかってしまう。</span>
                    <span>一刻を争うこのタイミングでは、時間が掛かりすぎる。</span>
                    <span>覚悟を決め宗太は異世界の門へ入っていくのであった。</span>
                    <span>第三章完</span>
                    <br>
                    <span>門を潜るとそこは一面の雪景色であった。</span>
                    <span>第四章完</span>
                </p>
            </div>
        </div>
        <div class="decipher-item" id="docImage">
            <div class="dicipher-item-image">
                <img src={ testimg_path } alt="work1">
            </div>
        </div>
    </div>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .decipher {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .decipher-item {
        width: 49%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5px;
        margin-bottom: 10px;
        background-color: rgb(228, 227, 178);
    }

    .decipher-item-text {
        padding: 5px;
    }

    .dicipher-item-image {
        padding: 5px;
    }

    #docImage img {
        height: 100%;
        width: 100%;
    }

    .paper {
        display: block;
        width: 100%;
        height: 78%;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 20px;
        line-height: 2em;
        overflow-x: scroll;
        border: solid;
        float: left;
        background-color: #fff;
    }

    h2{
        margin: 5px;
        color: aliceblue;
        background-color: #7b7b7b;
    }

    .paper span {
        display: block;
    }
    .vertical-text {
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 20px;
        font-family: "Noto Serif JP", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-feature-settings: "palt";
        font-feature-settings: "palt";
        color: #2c3e50;
        line-height: 2em;
        text-indent: 1em;
    }
    .Pagination {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Pagination a {
        text-decoration: none;
    }

    .Pagination li {
        list-style: none;
        margin: 5px;
    }

    .Pagination-Item-Link {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 45px;
        height: 30px;
        background: #fff;
        font-size: 20px;
        color: #3d3d3e;
        font-weight: bold;
        transition: all 0.15s linear;
    }
    .Pagination-Item-Link-Icon {
        width: 20px;
    }
    .Pagination-Item-Link.isActive {
        pointer-events: none;
        color: #111;
    }
    .Pagination-Item-Link:not(.isActive):hover {
        opacity: 0.5;
    }

    .btn--orange, a.btn--orange {
        color: #fff;
        background-color: #252526;
        padding: 10px 20px;
    }
    .btn--orange:hover, a.btn--orange:hover {
        color: #fff;
        background: #252526;
    }
</style>