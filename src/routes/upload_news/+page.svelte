<script>
    import axios from "axios";

    let image;
    let input;
    let show_image = false;

    async function handleSubmit(event) {
        const url = "http://localhost:8000/api/upload"

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

    function previewFile(){
        console.log('clear');
        const fileData = new FileReader();
        fileData.addEventListener("load", function() {
            //id属性が付与されているimgタグのsrc属性に、fileReaderで取得した値の結果を入力することで
            //プレビュー表示している
            document.getElementById('preview').src = fileData.result;
            console.log("aaaa")
        });
        fileData.readAsDataURL(input.files[0]);
        show_image = true;
        return;
    }
</script>

<main>
    <div class="input">
    <h2 class="input-title"> 大茅区有文書のお知らせアップロード</h2>
        <form on:submit|preventDefault={handleSubmit}>
            <table class="input-table">
                <tr>
                    <th class="input-item"><label for="name">タイトル</label></th>
                    <td class="input-body"><input type="text" id="name" name="name" class="form-text"></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="name">日付</label></th>
                    <td class="input-body"><p><input type="date" name="example"></p></td>
                </tr>
                <tr>
                    <th class="input-item"><label for="document_explain">説明</label></th>
                    <td class="input-body"><textarea id="document_explain" name="document_explain" class="form-textarea"></textarea></td>
                </tr>
            </table>

            <input type="submit" value="送信" class="input-submit">
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


</style>