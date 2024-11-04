<script>
    import doc_manage from '$lib/images/manage_doc.png';
    import news_manage from '$lib/images/manage_news.png';
    import doc_upload from '$lib/images/manage_upload.png';
    import decode_manage from '$lib/images/manage_decode.png';
</script>

<main>
    <div class="manage">
        <h1>管理者画面</h1>
        <div class="square_contents">
            <div class="content"> <img src={doc_manage}> <a href="./manage/manage_doc"><p>古文書管理</p></a></div>
            <div class="content"> <img src={news_manage}><a href="./manage/manage_news"><p>おしらせ管理</p></a></div>
            <div class="content"> <img src={decode_manage}><a href="./manage/manage_decoded"><p>翻訳済み文書管理</p></a></div>
            <div class="content"> <img src={doc_upload}><a href="./manage/upload"><p>古文書<br>アップロード</p></a></div>
            <div class="content"> <img src={doc_upload}><a href="./manage/upload_news"><p>お知らせ<br>アップロード</p></a></div>
            <div class="content"> <img src={doc_upload}><a href="./manage/upload_decoded"><p>翻訳済み文書<br>アップロード</p></a></div>
        </div>
    </div>
</main>

<style>
@media only screen and (min-width: 950px) {
    .manage {
        background-color: rgb(230, 230, 230);
        color: rgb(255, 255, 255);
    }
    h1 {
        color:rgb(255, 255, 255);
        background-color: rgba(8, 8, 8, 0.521);
        margin: 10px;
        font-size: 150%;
    }
    .square_contents {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
    }
 
    .square_contents div {
        position: relative;
        width: 20%;
        background: #ffffff;
        margin: 1%;
    }
 
    /* .square_contents div::before {
        content: "";
        display: block;
        padding-top: 100%;
    } */

    .square_contents img {
        width: 50%;
        margin-left: 25%;
        height: auto;
        position: 50%;
        margin-bottom: 10px;
        margin-top: 10px;
    }
 
    .square_contents p {
        text-align: center;
        color: #000000;
        font-size: 100%;
        display: block;
        text-align: center;
        /* vertical-align: middle; */
        text-decoration: none;
        width: 90%;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        background: #c0c0c0;
        color: #fff;
        border-radius: 100vh;
        transition: 0.5s;
    }
    .square_contents a {
       text-decoration: none; 
    }
}

@media only screen and (max-width: 949px) {
    .manage {
        background-color: rgb(230, 230, 230);
        color: rgb(0, 0, 0);
    }

    h1 {
        color: rgb(255, 255, 255);
        background-color: rgba(8, 8, 8, 0.521);
        margin: 10px;
        font-size: 1.2em;
        text-align: center;
    }

    .square_contents {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
    }

    .square_contents .content {
        width: 90%;
        background: #ffffff;
        margin: 10px 0;
        padding: 1em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: center;
    }

    .square_contents img {
        width: 40%;
        height: auto;
        margin: auto;
    }

    .square_contents p {
        color: #fff;
        font-size: 1em;
        padding: 0.8em 1em;
        font-weight: bold;
        background: #c0c0c0;
        border-radius: 20px;
        margin-top: 0.5em;
        transition: 0.3s;
    }

    .square_contents a {
       text-decoration: none; 
    }
}
</style>