<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    export const decoded_name: string = data.decoded.decoded_name;
    export const decoded_path: string = data.decoded.decoded_path;
    export const decoded_explain: string = data.decoded.decoded_explain;
    export const decoded_content: string = data.decoded.decoded_content.replace(/\n/g, '<br>');;
    export const decoded_added_year: number = data.decoded.added_year;
    export const decoded_added_month: number = data.decoded.added_month;
    export const decoded_added_day: number = data.decoded.added_day;
</script>
<main>
    <h1 class="title">翻訳した大茅区有文書の内容紹介</h1>
    <h3>タイトル</h3>
    <h2 class="title">{decoded_name}</h2>
    <h3>説明</h3>
    <p class="explain">{decoded_explain}</p>
    <div class="contents">
        <div class ="content1">
        <p>{@html decoded_content}</p>
        </div>
        <div class="content2">
            <img src={ decoded_path } alt="" class="ogaya_image">
        </div>
    </div>
</main>

<style>
    h3 {
        text-align: center;
    }

    .explain {
        text-align: center;
        margin: 0% 10% 0%;
    }
    .contents{
        display: flex;
        min-height:100vh;
    }
    .content1{
        width: 40%;
        text-align: left;
        /* background-color: #1e90ff; */
        /* color: #fff; */
        margin: 0% 10% 0%;
    }
    .content2{
        flex: 1;
        /* background-color: #90ee90; */
        text-align: center;
        margin-left: 15px;
        margin-right: 10%;
    }
    .title{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }
    .ogaya_image{
        width: 100%;
        /* margin-left: 10%; */
    }

    p#decoded_title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
</style>
