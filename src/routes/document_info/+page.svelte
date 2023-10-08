<script>
    import doc from '$lib/images/document_img.jpg';
</script>

<main>
    <section class="wrapper">
        <div class="container">
            <div class="content">
                <div class="content-item">
                    <img src={doc} class="image">
                </div>    
                <div class="content-item">
                    <div class="text">
                        <h2 class="heading">文書のタイトル</h2>
                        <p>アップロード日：〇月〇日</p>
                        <div class="box">
                            <p>文書の情報または管理者のコメント～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2>翻訳履歴</h2>
            <div class="card-container">
                <div class="card">
                    <h2>ユーザー名</h2>
                    <p>翻訳文のアップロード日：〇月〇日</p>
                    <p>冒頭の翻訳文</p>
                </div>
                <div class="card">
                    <h2>ユーザー名</h2>
                    <p>翻訳文のアップロード日：〇月〇日</p>
                    <p>冒頭の翻訳文</p>
                </div>
                <!-- Add more cards as needed -->
            </div>
        </div>

    </section>
</main>

<style>
    /* container */
    .wrapper{
        width:100%;
        background-color:#fafafa;
    }
    .wrapper .container{
        max-width:1000px;
        margin:0px auto;
        padding:80px 0px;
    }
    /* content */
    @media (min-width: 992px) {
        .wrapper .container .content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .wrapper .content-item {
        width:100%;
    }

    @media (min-width: 992px) {
        .wrapper .content-item {
            width:50%;
        }
    }
    .wrapper .image{
        display:block;
        max-width:100%;
        margin:0px auto;
    }
    .wrapper .text{
        padding:50px;
    }
    .wrapper .text .heading{
        margin:0px 0px 40px 0px;
        font-size: 24px;
        font-weight: normal;
        text-align: center;
    }

    .text h2 {
    border-bottom: solid 3px rgb(117, 117, 117);
    position: relative;
    }

    .text h2:after {
    position: absolute;
    content: " ";
    display: block;
    border-bottom: solid 3px #ffc778;
    bottom: -3px;
    width: 30%;
    }

    .box {
        position: relative;
        padding:0.25em 1em;
    }
    .box:before,.box:after{ 
        content:'';
        width: 20px;
        height: 30px;
        position: absolute;
        display: inline-block;
    }
    .box:before{
        border-left: solid 1px rgb(117, 117, 117);
        border-top: solid 1px rgb(117, 117, 117);
        top:0;
        left: 0;
    }
    .box:after{
        border-right: solid 1px rgb(117, 117, 117);
        border-bottom: solid 1px rgb(117, 117, 117);
        bottom:0;
        right: 0;
    }
    .box p {
        margin: 0; 
        padding: 0;
        font-size: large;
    }
    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .card {
        width: 100%;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }

    .card img {
        max-width: 100%;
        height: auto;
    }

    .card h2 {
        font-size: 18px;
        margin: 10px 0;
    }

    .card p {
        font-size: 14px;
        color: #555;
    }
</style>