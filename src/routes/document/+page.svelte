<script>
	import img_path from '$lib/images/img_doc1.jpg';
</script>

<main>
    <div id="contents" class="cf">
        <section id="work" class="cf">
            <h2>文書一覧</h2>
            <div class="document">
                <article>
                    <img src={ img_path } width="313" height="269" alt="work1">
                    <h3>文書一巻</h3>
                    <p>この文書は、大正時代に起こったたたら爆発の事件について記載されている。</p>
                </article>
            </div>
            <div class="document">
                <article>
                    <img src={ img_path } width="313" height="269" alt="work2">
                    <h3>文書二巻</h3>
                    <p>この文書は、大正時代に起こったたたら爆発の事件について記載されている。</p>
                </article>
            </div>
            <div class="document">
                <article>
                    <img src={ img_path } width="313" height="269" alt="work3">
                    <h3>文書二巻</h3>
                    <p>この文書は、大正時代に起こったたたら爆発の事件について記載されている。</p>
                </article>
            </div>
        </section>
    </div>
    <div id="paging">
        <ul class="example">
            <li class="pre">前へ</li>
            <li class="this">1</li>
            <li><a href="/page2">2</a></li>
            <li><a href="/page-3">3</a></li>
            <li><a href="/page-2">次へ</a></li>
        </ul>
    </div>
</main>

<style>
@media only screen and (min-width: 769px) {
    div#contents section#work article {
        width: 33%;
    }
    div#contents section#work article img {
        max-width: 250px;
    }
    div#contents section#work article h3 {
        line-height: 2.0em;
    }
    div#contents section#work article p {
        font-size: 0.8em;
        line-height: 2.0em;
        display: block;
    }
}

@media only screen and (min-width: 961px) {
    section#work h2 {
        background-color: rgba(8, 8, 8, 0.521);
    }
    div.document {
        display:flex;
        margin: 30px 0 30px;
        padding: 10px;
        background-color: rgba(8, 8, 8, 0.048);
    }
    div#contents {
        max-width: 960px;
        margin: 0 auto;
        color: rgb(3, 3, 3);
    }
    div#contents section#work article {
        width: 100%;
    }
    div#contents section#work article img {
        float: left;
        max-width: 305px;
        margin-right: 20px;
    }
    div#contents section#work article h3 {
        border-left: 5px solid #000;
        margin-bottom: 10px;
        padding-left: 10px;
        text-align: left;
        float: left;
        font-size: 1.2em;
    }
    div#contents section#work article p{
        line-height: 3.0em;
        border: 1px solid #CCC;
        float: left;
        width: 60%;
    }
    .example {
        list-style: none;
        display: flex;
        align-items:center;
        justify-content:center;
    }

    .example li {
        display: inline-block;
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
        border: 1px #ccc solid;
        color:#000053;
        border-radius: 5px / 5px;
    }

    .example li a{
        display: block;
        text-decoration: none;
    }

    .example li a:hover {
        color: #fff;
        text-decoration: none;
        background-color: #003396;
    }

    .example .pre {
        background-color: #ccc;
        color:#333;
    }

    .example .this {
        background-color: #777;
        color: #fff;
    }    
}

</style>