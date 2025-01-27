<script lang='ts'>
    import { page } from '$app/stores';
    import test from '$lib/images/logo.png';
    import type { PageData } from "./$types";

    export let data: PageData;
    export let newsDatas = data.news;

    // 削除済みの文書を除外するフィルタリング関数
    const filteredDocDatas = newsDatas.filter(news => !news.delete_flag);

    async function deleteNews(newsId: number) {
        // 削除確認ダイアログを表示
        const confirmed = window.confirm("本当に削除しますか？");
        if (!confirmed) {
            return;
        }
        console.log(newsId);
        const response = await fetch(`?news_id=${newsId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('News deleted');
            // 削除後の処理: 再取得または再描画
            // ここでページを再読み込みすることも可能
            location.reload();
        } else {
            console.error('Failed to delete news');
        }
    }
</script>

<main>
    <div class="manage">
        <h1>お知らせ管理</h1>

        <table>
            <tr>
              <th>お知らせのタイトル</th>
              <th>アップロード日</th>
              <th>編集ボタン</th>
              <th>削除ボタン</th>
            </tr>
            {#each filteredDocDatas as newsData}
            <tr>
              <td>{ newsData.news_name }</td>
              <td>{ newsData.added_year }年{ newsData.added_month }月{ newsData.added_day }</td>
              <td><a href="edit_news?news_id={newsData.news_id}"><button id="edit">編集</button></a></td>
              <td><button id="delete" on:click={() => deleteNews(newsData.news_id)}>削除</button></td>
            </tr>
            {/each}
          </table>
    </div>
</main>

<style>
@media only screen and (min-width: 950px) {
    h1 {
        color:rgb(255, 255, 255);
        background-color: rgba(8, 8, 8, 0.521);
        margin: 10px;
    }
    table{
        border-collapse: collapse;
        border-spacing: 0;
        width: 80%;
        margin-left: 10%;

    }

    table tr{
        border-bottom: solid 1px #eee;
        margin:100%;
    }


    table th,table td{
        text-align: center;
        width: 25%;
        padding: 15px 0;
    }

    table td.icon{
        background-size: 35px;
        background-position: left 5px center;
        background-repeat: no-repeat;
        padding-left: 30px;
    }

    table td.icon.bird{
        background-image: url(icon-bird.png)
    }

    table td.icon.whale{
        background-image: url(icon-whale.png)
    }

    table td.icon.crab{
        background-image: url(icon-crab.png)
    }

    table td button#edit{
        text-align: center;
        color: #000000;
        font-size: 130%;
        display: block;
        text-align: center;
        /* vertical-align: middle; */
        text-decoration: none;
        width: 250px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        background: #fab05b;
        color: #fff;
        border-radius: 100vh;
        transition: 0.5s;
    }

    table td button#delete{
        text-align: center;
        color: #000000;
        font-size: 130%;
        display: block;
        text-align: center;
        /* vertical-align: middle; */
        text-decoration: none;
        width: 250px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        background: #888888;
        color: #fff;
        border-radius: 100vh;
        border: none;
        transition: 0.5s;
    }

    a{
        text-decoration: none;
    }
}

/* スマートフォン用のスタイル */
@media only screen and (max-width: 950px) {
    h1 {
        font-size: 1.1rem;
        padding: 10px;
        color: rgb(255, 255, 255);
        background-color: rgba(8, 8, 8, 0.7);
        text-align: center;
    }

    table {
        width: 100%;
        margin: 0;
    }

    table td {
        padding: 10px;
        font-size: 0.7rem;
    }

    table th {
        background-color: #9a9a9a;
        color: #ffffff;
        padding: auto;
        font-size: 0.6rem;
    }

    table td {
        padding: 12px 5px;
    }

    table td button#edit,
    table td button#delete,
    table td .decoding,
    table td .complete {
        font-size: 0.7rem;
        width: 100%;
        padding: 0.6rem 1rem;
        margin: 5px 0;
    }

    /* ボタンごとのスタイル */
    table td button#edit {
        background: #fab05b;
    }

    table td button#delete {
        background: #888888;
    }

    table td .decoding {
        background: #00b42d;
    }

    table td .complete {
        background: #eaed22;
    }
}

</style>