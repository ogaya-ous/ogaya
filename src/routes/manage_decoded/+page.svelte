<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from "./$types";

    export let data: PageData;
    export let decodeDatas = data.decodeds;

    // 削除済みの文書を除外するフィルタリング関数
    const filteredDecodeDatas = decodeDatas.filter(decode => !decode.delete_flag);

    async function deleteDecoded(decodedId: number) {
        // 削除確認ダイアログを表示
        const confirmed = window.confirm("本当に削除しますか？");
        if (!confirmed) {
            return;
        }
        const response = await fetch(`?decoded_id=${decodedId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Decoded deleted');
            // 削除後の処理: 再取得または再描画
            // ここでページを再読み込みすることも可能
            location.reload();
        } else {
            console.error('Failed to delete decoded');
        }
    }
</script>

<main>
    <div class="manage">
        <h1>翻訳済み文書の管理</h1>

        <table>
            <tr>
              <th>文書のタイトル</th>
              <th>アップロード日</th>
              <th>編集ボタン</th>
              <th>削除ボタン</th>
            </tr>
            {#each filteredDecodeDatas as decodeData}
            <tr>
              <td>{ decodeData.decoded_name }</td>
              <td>{ decodeData.added_year }年{ decodeData.added_month }月{ decodeData.added_day }</td>
              <td><button id="edit"><a href="edit_decoded?decoded_id={ decodeData.decoded_id }">編集</a></button></td>
              <td><button id="delete" on:click={() => deleteDecoded(decodeData.decoded_id)}>削除</button></td>
            </tr>
            {/each}
        </table>
    </div>
</main>

<style>

    .manage {
        
        
    }
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

    a {
        text-decoration: none;
    }


</style>