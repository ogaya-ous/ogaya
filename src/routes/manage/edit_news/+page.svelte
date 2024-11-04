<script lang="ts">
    import { enhance } from '$app/forms';
    import { notifications } from "../../notifications";
    import Toast from "../../Toast.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    export const news_id: number = data.news_id;
    export const news_name: string = data.news_name;
    export const news_path: string = data.news_path;
    export const news_explain: string = data.news_explain;
    export const added_year: string = data.added_year.toString().padStart(4, '0');
    export const added_month: string = data.added_month.toString().padStart(2, '0');
    export const added_day: string = data.added_day.toString().padStart(2, '0');

    export let form;

    let added_date: string = added_year+'-'+added_month+'-'+added_day
    console.log(added_date);
    let file: File | null = null
    let title: string = news_name;
    let explain: string = news_explain
    // let added_year: string | null = null
    // let added_month: string | null = null
    // let added_day: string | null = null

    $: selectedImage = news_path;

    function onChange(
        event: Event & { currentTarget: EventTarget & HTMLInputElement },
    ) {
        file = (event.target as HTMLInputElement)?.files?.[0] ?? null
        if (file) {
            selectedImage = URL.createObjectURL(file);
        }
    }
</script>

<main>
    <div class="input">
        <h2 class="input-title"> 大茅区有文書のお知らせ編集</h2>
        <form
            action="?/update_news"
            method="POST"
            enctype="multipart/form-data"
            use:enhance={() => {
                return async ({ update }) => {
                    file = null
                    selectedImage = null;
                    update({ reset: true })
                }
            }}
        >
        <input type="hidden" name="news_id" value="{news_id}" />
        <input type="hidden" name="news_path" value="{news_path}" />
            <table class="input-table">
                <tr>
                    <th class="input-item"><label for="name">タイトル</label></th>
                    <td class="input-body"><input type="text" id="name" name="name" class="form-text" bind:value={title}></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="date">日付</label></th>
                    <td class="input-body"><p><input type="date" name="example" value={added_date}></p></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="news_explain">説明</label></th>
                    <td class="input-body"><textarea id="news_explain" name="news_explain" class="form-textarea" bind:value={explain}></textarea></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="image">画像</label></th>
                    <!--<td class="input-body"><input accept="image/*" multiple type="file" id="image" name="image" onchage="previewFile(event);"></td>-->
                    <td class="input-body">
                        <!--<input accept="image/*" multiple type="file" id="image" name="image" bind:this={file} on:change={previewFile}>-->
                        <input id="image-upload" name="image-upload" type="file" accept="image/*" on:change={onChange}/>
                        {#if selectedImage}
                            <img id="preview" src={selectedImage} alt="preview">
                        {/if}
                    </td>
                </tr>
            </table>
            {#if !title}
                <button type="button" value="送信" class="input-submit" on:click={() => notifications.warning("タイトルを入力してください", 5000)}>送信</button>
            {:else if !explain}
                <button type="button" value="送信" class="input-submit" on:click={() => notifications.warning("説明を入力してください", 5000)}>送信</button>
            <!-- {:else if !file}
                <button type="button" value="送信" class="input-submit" on:click={() => notifications.warning("ファイルを入力してください", 5000)}>送信</button> -->
            {:else}
                <button type="submit" value="送信" class="input-submit" on:click={() => notifications.success("送信しました", 5000)}>送信</button>
            {/if}
        </form>
    </div>
</main>
<Toast />

<style>
    * {
        box-sizing: border-box;
        color: #333;
        font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    }


    .input {
        width: 960px;/*横幅*/
        margin: 0 auto;/*中央寄せ*/
        padding: 60px 0;
    }
    .input-title{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }
    .input-table{
        width: 100%;
        margin-bottom: 20px;
        border-collapse: collapse;
    }

    .input-item,
    .input-body{
        padding: 20px;
        border: 1px solid #ccc;
    }

    .input-item {
        text-align: left; /* テキスト左寄せ */
        width: 30%; /* 横幅30%指定（グレーの背景色部分） */
        background-color: #eee; /* グレーの背景色 */
    }

    .input-body {
        width: 70%; /* 横幅70%指定（白背景色部分） */
    }

    .form-text {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        max-width: 400px;
    }

    .form-textarea {
        width: 100%;
        padding: 10px;
        height: 200px;
        border-radius: 5px;
        border: 1px solid #ccc;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .input-submit {
        width: 250px; /* 横幅指定 */
        background-color: #333; /* 背景色 */
        color: #fff; /* 文字色 */
        font-weight: bold; /* 文字の太さ */
        display: block; /* インライン要素をブロック要素に変更 */
        margin: 0 auto; /* 中央寄せ */
        font-size: 16px; /* 文字の大きさ */
        padding: 15px; /* 内側の余白 */
        border-radius: 100vh; /* 角丸指定 */
        border: none;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
    }
    .input-submit-not-fill {
        width: 250px; /* 横幅指定 */
        background-color: rgb(243 244 246); /* 背景色 */
        color: rgb(156 163 175); /* 文字色 */
        font-weight: bold; /* 文字の太さ */
        display: block; /* インライン要素をブロック要素に変更 */
        margin: 0 auto; /* 中央寄せ */
        font-size: 16px; /* 文字の大きさ */
        padding: 15px; /* 内側の余白 */
        border-radius: 100vh; /* 角丸指定 */
        border: rgb(229 231 235);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        pointer-events: none;
    }

    #image-upload {
        margin: 10px;
    }


</style>