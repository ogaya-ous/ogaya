<script lang="ts">
    import { enhance } from '$app/forms';
    import { notifications } from "../notifications";
    import Toast from "../Toast.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    export const decoded_id: number = data.decoded_id;
    export const decoded_name: string = data.decoded_name;
    export const decoded_path: string = data.decoded_path;
    export const decoded_explain: string = data.decoded_explain;
    export const decoded_content: string = data.decoded_content;

    let show_image = false;
    export let form;

    let file: File | null = null
    let title: string = decoded_name
    let explain: string = decoded_explain
    let content: string = decoded_content

    $: selectedImage = decoded_path;
    let previewFile: boolean = false;

    function onChange(
        event: Event & { currentTarget: EventTarget & HTMLInputElement },
    ) {
        file = (event.target as HTMLInputElement)?.files?.[0] ?? null
        if (file) {
            previewFile = true;
            selectedImage = URL.createObjectURL(file);
        }
    }
</script>

<main>
    <div class="input">
        <h2 class="input-title"> 大茅区有文書の編集</h2>
        <form
            action="?/update"
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

            <input type="hidden" name="decoded_id" value="{decoded_id}" />
            <input type="hidden" name="decoded_path" value="{decoded_path}" />
            <table class="input-table">
                <tr>
                    <th class="input-item"><label for="name">タイトル</label></th>
                    <td class="input-body"><input type="text" id="name" name="name" class="form-text" bind:value={title}></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="decoded_explain">説明</label></th>
                    <td class="input-body"><textarea id="decoded_explain" name="decoded_explain" class="form-textarea" bind:value={explain}></textarea></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="decoded_content">翻訳内容</label></th>
                    <td class="input-body"><textarea id="decoded_content" name="decoded_content" class="form-textarea" bind:value={content}></textarea></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="image">画像</label></th>
                    <!--<td class="input-body"><input accept="image/*" multiple type="file" id="image" name="image" onchage="previewFile(event);"></td>-->
                    <td class="input-body">
                        <!--<input accept="image/*" multiple type="file" id="image" name="image" bind:this={file} on:change={previewFile}>-->
                        <input id="image-upload" name="image-upload" type="file" accept="image/*" class="sr-only" on:change={onChange}/>
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
            <!-- {:else if !file} -->
                <!-- <button type="button" value="送信" class="input-submit" on:click={() => notifications.warning("ファイルを選択してください", 5000)}>送信</button> -->
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

    #preview {
        width: 100%;
        height: 100%;
    }


</style>