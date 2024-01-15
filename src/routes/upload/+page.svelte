<script lang="ts">
    import { enhance } from '$app/forms';

    let show_image = false;
    export let form;

    let file: File | null = null
    let title: string | null = null
    let explain: string | null = null

    let selectedImage;

    function onChange(
        event: Event & { currentTarget: EventTarget & HTMLInputElement },
    ) {
        file = (event.target as HTMLInputElement)?.files?.[0] ?? null
    }

    /*
    async function handleSubmit(event) {
        const url = "https://oogaya.vercel.app/api/upload";

        const formData = new FormData(event.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        console.log(data)

        await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res.data);
            alert("アップロードが完了しました。");
        }).catch(error => {
            console.log(error);
            alert("アップロードに失敗しました。");
        })
    }
    */

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                selectedImage = reader.result;
            };

            reader.readAsDataURL(file);
        }
    };

    // function previewFile(){
    //     console.log('clear');
    //     const fileData = new FileReader();
    //     console.log('clear1');
    //     fileData.addEventListener("load", function() {
    //         //id属性が付与されているimgタグのsrc属性に、fileReaderで取得した値の結果を入力することで
    //         //プレビュー表示している
    //         console.log(fileData.result);
    //         document.getElementById('preview').src = fileData.result;
    //     });
    //     console.log('clear2');
    //     fileData.readAsDataURL(file.files[0]);
    //     show_image = true;
    //     return;
    // }
</script>

<main>
    <div class="input">
        <h2 class="input-title"> 大茅区有文書のアップロード</h2>
        <form
            action="?/upload"
            method="POST"
            enctype="multipart/form-data"
            use:enhance={() => {
                return async ({ update }) => {
                    file = null
                    update({ reset: true })
                }
            }}
        >
            <table class="input-table">
                <tr>
                    <th class="input-item"><label for="name">タイトル</label></th>
                    <td class="input-body"><input type="text" id="name" name="name" class="form-text" bind:value={title}></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="document_explain">説明</label></th>
                    <td class="input-body"><textarea id="document_explain" name="document_explain" class="form-textarea" bind:value={explain}></textarea></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="image">画像</label></th>
                    <!--<td class="input-body"><input accept="image/*" multiple type="file" id="image" name="image" onchage="previewFile(event);"></td>-->
                    <td class="input-body">
                        <!--<input accept="image/*" multiple type="file" id="image" name="image" bind:this={file} on:change={previewFile}>-->
                        <input id="image-upload" name="image-upload" type="file" accept="image/*" class="sr-only" on:change={handleFileChange}/>
                        {#if selectedImage}
                            <img id="preview" src={selectedImage} alt="preview">
                        {/if}
                    </td>
                </tr>
            </table>
            {#if !file || !title || !explain}
                <button value="送信" class="input-submit-not-fill" disabled={true}>送信</button>
            {:else}
                <button type="submit" value="送信" class="input-submit" disabled={!file}>送信</button>
            {/if}

            {#if form && !file}
                <div class="response">
                    {title}をアップロードしました
                    <a
                        href={form.uploaded}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    {form.uploaded}
                    </a>
                </div>
            {/if}
        </form>
    </div>
</main>

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