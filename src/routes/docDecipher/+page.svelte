<script>    
    import img_path from '$lib/images/img_doc1.jpg';
</script>

<main>
    <div id="decipher">
        <h2>　文書翻訳</h2>
        <p class="paper vertical-text" contenteditable="true">
            <span>草枕</span>
            <span>山路を登りながら、こう考えた。</span>
            <span>智に働けば角が立つ。情に掉させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。</span>
            <span>住みにくさが高じると、安いところへ引き越したくなる。どこへ越しても住みにくいと悟ったとき、詩が生れて、絵ができる。</span>
        </p>
    </div>
    <div id="docImage">
        <img src={ img_path } width="313" height="269" alt="work1">
    </div>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #docImage img{
        width: 50%;
        height: auto;
        margin-top: 10%;
    }

    #decipher h2{
        margin: 10px;
        color: aliceblue;
        background-color: #7b7b7b;
    }

    .paper {
        display: block;
        width: 50%;
        height: 80%;
        padding: 40px;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 20px;
        line-height: 2em;
        overflow-x: scroll;
        border: solid;
        float: left;
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