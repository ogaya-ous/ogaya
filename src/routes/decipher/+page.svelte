<script>    
    import img_path from '$lib/images/img_doc1.jpg';
</script>

<main>
    <h2>　文書翻訳</h2>
    <div class="decipher">
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
    
        <div id="docImage">
            <img src={ img_path } width="313" height="269" alt="work1">
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
        justify-content: center;
    }

    #docImage img{
        width: 45%;
        height: auto;
        margin-top: 10%;
    }

    h2{
        margin: 10px;
        color: aliceblue;
        background-color: #7b7b7b;
    }

    .paper {
        display: block;
        width: 45%;
        height: 83%;
        padding: 40px;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 20px;
        line-height: 2em;
        overflow-x: scroll;
        border: solid;
        float: left;
        margin-left: 3%;
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

</style>