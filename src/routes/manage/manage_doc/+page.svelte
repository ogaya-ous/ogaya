<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from "./$types";

    export let data: PageData;
    export let documentDatas = data.documents;

    // 削除済みの文書を除外するフィルタリング関数
    const filteredDocDatas = documentDatas.filter(doc => !doc.delete_flag);

    async function deleteDocument(documentId: number) {
        // 削除確認ダイアログを表示
        const confirmed = window.confirm("本当に削除しますか？");
        if (!confirmed) {
            return;
        }
        // console.log("test");
        const response = await fetch(`?document_id=${documentId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Document deleted');
            // 削除後の処理: 再取得または再描画
            // ここでページを再読み込みすることも可能
            location.reload();
        } else {
            console.error('Failed to delete document');
        }
    }

    async function completeDocument(documentId: number) {
        const response = await fetch(`?document_id=${documentId}`, {
            method: 'PATCH'
        });

        if (response.ok) {
            console.log('Document completed successfully');
            // 削除後の処理: 再取得または再描画
            // ここでページを再読み込みすることも可能
            location.reload();
        } else {
            console.error('Failed to complete document');
        }
    }
</script>

<main>
    <div class="manage">
        <h1>文書管理</h1>

        <table>
            <tr>
              <th>文書のタイトル</th>
              <th>アップロード日</th>
              <th>編集ボタン</th>
              <th>翻訳完了ボタン</th>
              <th>削除ボタン</th>
            </tr>
            {#each filteredDocDatas as docData}
            <tr>
              <td>{ docData.document_name }</td>
              <td>{ docData.added_year }年{ docData.added_month }月{ docData.added_day }</td>
              <td><button id="edit"><a href="edit_doc?document_id={ docData.document_id }">編集</a></button></td>
              <td>
                {#if !docData.complete_flag}
                    <button id="view" class="decoding" on:click={() => completeDocument(docData.document_id)}>翻訳中</button>
                {:else}
                    <button id="view" class="complete" on:click={() => completeDocument(docData.document_id)}>翻訳済</button>
                {/if}
              </td>


              <td><button id="delete" on:click={() => deleteDocument(docData.document_id)}>削除</button></td>
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
        width: 20%;
        padding: 15px 0;
    }

    table td button#edit{
        text-align: center;
        color: #000000;
        font-size: 130%;
        display: block;
        text-align: center;
        text-decoration: none;
        width: 200px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        background: #fab05b;
        color: #fff;
        border-radius: 100vh;
        border: none;
        transition: 0.5s;
    }

    table td button#edit a {
        color: #ffffff;
        text-decoration: none;
    }

    table td button#delete{
        text-align: center;
        color: #000000;
        font-size: 130%;
        display: block;
        text-align: center;
        text-decoration: none;
        width: 200px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        background: #888888;
        color: #fff;
        border-radius: 100vh;
        border: none;
        transition: 0.5s;
    }

    table td button#view a {
        color: #ffffff;
        text-decoration: none;
    }

    table td .decoding{
        text-align: center;
        color: #000000;
        font-size: 130%;
        display: block;
        text-align: center;
        text-decoration: none;
        width: 200px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        background: #00b42d;
        color: #fff;
        border-radius: 100vh;
        border: none;
        transition: 0.5s;
    }
    
    table td .complete{
        text-align: center;
        color: #000000;
        font-size: 130%;
        display: block;
        text-align: center;
        text-decoration: none;
        width: 200px;
        margin: auto;
        padding: 1rem 4rem;
        font-weight: bold;
        background: #eaed22;
        color: #fff;
        border-radius: 100vh;
        border: none;
        transition: 0.5s;
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