<script>
	import img_path from '$lib/images/img_doc1.jpg';
</script>

<main>
    <div id="contents" class="cf">
        <section id="work" class="cf">
            <h2>文書一覧</h2>
            <div id="document">
                <article>
                    <img src={ img_path } width="313" height="269" alt="work1">
                    <h3>文書一巻</h3>
                    <p>この文書は、大正時代に起こったたたら爆発の事件について記載されている。</p>
                </article>
            </div>
            <div id="document">
                <article>
                    <img src={ img_path } width="313" height="269" alt="work2">
                    <h3>文書二巻</h3>
                    <p>この文書は、大正時代に起こったたたら爆発の事件について記載されている。</p>
                </article>
            </div>
            <div id="document">
                <article>
                    <img src={ img_path } width="313" height="269" alt="work3">
                    <h3>文書二巻</h3>
                    <p>この文書は、大正時代に起こったたたら爆発の事件について記載されている。</p>
                </article>
            </div>
        </section>
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
    div#document {
        display:flex;
        margin: 20px 0 20px
    }
    div#contents {
        max-width: 960px;
        margin: 0 auto;
        color: rgb(212, 211, 211);
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
}

</style>