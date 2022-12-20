<script>
    import axios from "axios";

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
        }).catch(error => {
            console.log(error);
        })
    }
</script>

<main>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="name">タイトル:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="document_explain">説明:</label><br>
        <textarea id="document_explain" name="document_explain"></textarea><br>
        <label for="image">画像:</label><br>
        <input accept="image/*" multiple type="file" id="image" name="image"><br>
        <input type="submit" value="送信">
    </form>
</main>