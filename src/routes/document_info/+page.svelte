<script lang="ts">
    import type { PageData } from "./$types";
    import complete_path from '$lib/images/complete_icon.png';

    export let data: PageData;
    export const document_name: string = data.document.document_name;
    export const document_path: string = data.document.document_path;
    export const document_explain: string = data.document.document_explain;
    export const document_added_year: number = data.document.added_year;
    export const document_added_month: number = data.document.added_month;
    export const document_added_day: number = data.document.added_day;
    export const complete_flag: boolean = data.document.complete_flag;

    export async function download_txt(history_id: string) {
        const response = await fetch('?/document_info?history_id='+history_id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Content-Disposition": "attachment"
            },
        })
        const txt = await response.text()
        const download_txt = document.createElement('a')
        download_txt.href = window.URL.createObjectURL(new Blob([txt], { type: 'text/plain' }))
        download_txt.download = document_name+'.txt'
        download_txt.click()
    }
</script>

<main>
    <a href="document?page=1" class="back-button">文書一覧へ戻る</a>
    <section class="wrapper">
        <div class="container">
            <div class="content">
                <div class="content-item">
                    <img src={ document_path } class="image">
                </div>
                <div class="content-item">
                    <div class="text">
                        <h2 class="heading">{document_name}</h2>
                        <p>アップロード日：{ document_added_year }年{ document_added_month }月{ document_added_day }日</p>
                        <div class="box">
                            <p>{ document_explain }</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="decipher_bn">
                {#if !complete_flag}
                    <a href="decipher?document_id={data.document_id}" class="btn_04">翻訳する</a>
                {:else}
                    <div class="btn_complete">翻訳完了</div>
                {/if}

            </div>
            <h2>翻訳履歴</h2>
            <div class="card-container">
                {#each data.history as historyData, index}
                <div class="card">
                    <h2>ユーザー名: {data.users[index].name}</h2>
                    <p>翻訳文のアップロード日：{historyData.added_year}年{historyData.added_month}月{historyData.added_day}日</p>
                    <p>冒頭の翻訳文</p>
                    <p>{historyData.decoding_content.slice(0, 50)}</p>
                    <a href="decipher_view?document_id={data.document_id}&history_id={historyData.history_id}"><button class="decipher_view">翻訳文を見る</button></a>
                    <div class="download_btn">
                        <input type="button" on:click={download_txt(historyData.history_id)} value="テキストファイルをダウンロード">
                    </div>
                </div>
                <!-- Add more cards as needed -->
                {/each}
        </div>

    </section>
</main>

<style>
    /* 戻るボタンのスタイル */
    .back-button {
        position: absolute;
        margin: 30px;
        color: #383636;
        padding: 10px 15px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
    }

    .back-button:hover {
        background-color: #555;
        color: #fff;
        display: inline-block;
    }
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
        width:auto;
        max-height: 300px;
        margin:0px auto;
    }
    .wrapper .text{
        padding:50px;
    }
    .wrapper img#complete{
        position: relative;
        left: 50%;
        transform:translateX(-50%);
    }


    .wrapper .text .heading{
        margin:0px 0px 40px 0px;
        font-size: 24px;
        font-weight: normal;
        text-align: center;
    }

    .decipher_bn {
        margin: 50px;
    }

    a.btn_04 {
        font-size: 130%;
        display: block;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        width: 300px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        border: 2px solid #d4c51e;
        background: #d5c320;
        color: #fff;
        border-radius: 100vh;
        transition: 0.5s;
    }
    a.btn_04:hover {
        color: #5c5c5c;
        background: #f9f6c8;
    }

    .btn_complete {
        font-size: 130%;
        display: block;
        text-align: center;
        text-decoration: none;
        width: 120px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        border: 2px solid #555;
        background: #555;
        color: #fff;
        border-radius: 100vh;
        transition: 0.5s;
    }

    .doc-image {
        height: 200px;
        width: auto;
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

    .card a {
        color: #333;
        text-decoration: none;
    }

    .decipher_view  {
        display: inline-block;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 220px;
        height: 30px;
        /* padding: 12px 24px; */
        font-family: sans-serif;
        font-size: 16px;
        border: 0px;
        color: #fff;
        text-align: center;
        overflow-wrap: anywhere;
        background-color: #008cff;
        margin: 10px;
    }

    .download_btn {
        display: inline-block;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 300px;
        height: 31px;
        /* padding: 12px 24px; */
        padding: 5px;
        font-family: sans-serif;
        font-size: 16px;
        border: 0px;
        color: #fff;
        text-align: center;
        overflow-wrap: anywhere;
        background-color: #6e6e6e;
        margin: 12px;
    }
</style>