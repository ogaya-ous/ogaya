<script lang="ts">
    import { enhance } from '$app/forms';
    import { notifications } from "../../notifications";
    import Toast from "../../Toast.svelte";

    export let form;

    let file: File | null = null
    let title: string | null = null
    let explain: string | null = null
    let added_year: string | null = null
    let added_month: string | null = null
    let added_day: string | null = null

    let selectedImage;

    async function onChange(
        event: Event & { currentTarget: EventTarget & HTMLInputElement },
    ) {
        file = (event.target as HTMLInputElement)?.files?.[0] ?? null;

        if (file) {
            // 圧縮処理
            const compressedFile = await compressImage(file, 0.7); // 圧縮率を0.7（70%の品質）に設定
            previewFile = true;
            selectedImage = URL.createObjectURL(compressedFile);
            file = compressedFile; // 圧縮後のファイルをfile変数に保存
        }
    }

    // 画像圧縮関数
    async function compressImage(file: File, quality: number): Promise<File> {
        const img = new Image();
        img.src = URL.createObjectURL(file);

        return new Promise((resolve, reject) => {
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            resolve(new File([blob], file.name, { type: file.type }));
                        } else {
                            reject(new Error("Blob generation failed"));
                        }
                    },
                    file.type,
                    quality
                );
            };

            img.onerror = () => reject(new Error("Image load failed"));
        });
    }
</script>

<main>
    <div class="input">
        <h2 class="input-title"> 大茅区有文書のお知らせアップロード</h2>
        <form
            action="?/upload_news"
            method="POST"
            enctype="multipart/form-data"
            use:enhance={() => {
                return async ({ update_news }) => {
                    file = null
                    selectedImage = null;
                    update_news({ reset: true })
                }
            }}
        >
            <table class="input-table">
                <tr>
                    <th class="input-item"><label for="name">タイトル</label></th>
                    <td class="input-body"><input type="text" id="name" name="name" class="form-text" bind:value={title}></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="date">日付</label></th>
                    <td class="input-body"><p><input type="date" name="example"></p></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="news_explain">説明</label></th>
                    <td class="input-body"><textarea id="news_explain" name="news_explain" class="form-textarea" bind:value={explain}></textarea></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="image">画像</label></th>
                    <!--<td class="input-body"><input accept="image/*" multiple type="file" id="image" name="image" onchage="previewFile(event);"></td>-->
                    <td class="input-body">
                        <div class="input-file">
                            <input id="image-upload" name="image-upload" type="file" accept="image/*" on:change={onChange}/>
                        </div>
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
            {:else if !file}
                <button type="button" value="送信" class="input-submit" on:click={() => notifications.warning("ファイルを入力してください", 5000)}>送信</button>
            {:else}
                <button type="submit" value="送信" class="input-submit" on:click={() => notifications.success("送信しました", 5000)}>送信</button>
            {/if}
        </form>
    </div>
</main>
<Toast />

<style>
@media only screen and (min-width: 950px) {
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

    .input-file {
        margin: 10px;
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
}
@media only screen and (max-width: 949px) {
    * {
        box-sizing: border-box;
        color: #333;
        font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    }

    .input {
        width: 90%; /* 幅を90%に設定して中央寄せ */
        margin: 20px auto; /* 上下の余白を追加 */
        padding: 20px 0; /* 上下の内側の余白 */
    }

    .input-title {
        font-size: 20px; /* タイトルのフォントサイズを小さく */
        font-weight: bold;
        margin-bottom: 15px;
        text-align: center;
    }

    .input-table {
        width: 100%; /* 幅を100%に設定 */
        margin-bottom: 15px;
        border-collapse: collapse;
    }

    .input-item,
    .input-body {
        padding: 15px; /* 内側の余白を少し減らす */
        border: 1px solid #ccc;
        font-size: 14px; /* フォントサイズを小さく */
    }

    .input-item {
        text-align: left; /* テキスト左寄せ */
        width: 40%; /* 横幅40%指定 */
        background-color: #eee; /* グレーの背景色 */
    }

    .input-body {
        width: 60%; /* 横幅60%指定 */
    }

    .form-text,
    .form-textarea {
        width: 100%; /* 幅を100%に設定 */
        padding: 10px; /* 内側の余白 */
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    .form-textarea {
        height: 120px; /* 高さを調整 */
    }

    .input-submit {
        width: 90%; /* 幅を90%に設定 */
        background-color: #333; /* 背景色 */
        color: #fff; /* 文字色 */
        font-weight: bold; /* 文字の太さ */
        display: block; /* インライン要素をブロック要素に変更 */
        margin: 20px auto; /* 中央寄せ */
        font-size: 16px; /* 文字の大きさ */
        padding: 12px; /* 内側の余白 */
        border-radius: 50px; /* 角丸指定 */
        border: none;
        cursor: pointer;
    }

    .input-submit-not-fill {
        width: 90%; /* 幅を90%に設定 */
        background-color: rgb(243 244 246); /* 背景色 */
        color: rgb(156 163 175); /* 文字色 */
        font-weight: bold; /* 文字の太さ */
        display: block; /* インライン要素をブロック要素に変更 */
        margin: 20px auto; /* 中央寄せ */
        font-size: 16px; /* 文字の大きさ */
        padding: 12px; /* 内側の余白 */
        border-radius: 50px; /* 角丸指定 */
        border: rgb(229 231 235);
        pointer-events: none; /* クリックを無効にする */
    }

    .input-file {
        margin: 10px 0; /* 上下の余白を追加 */
    }

    #preview {
        width: 100%; /* 幅を100%に設定 */
        height: auto; /* 高さは自動調整 */
        margin-top: 10px; /* 上の余白を追加 */
    }
}
</style>