<script lang="ts">
    import { enhance } from '$app/forms';
    import testimg_path from '$lib/images/first_view.jpg';
    import { onMount } from 'svelte';
    import Toast from '../Toast.svelte';
    import { notifications } from "../notifications";
    import type { PageData } from "./$types";

    let decipher_text: HTMLElement | null = null;
    let FormData: string | null = null;
    export let data: PageData;

    export const document_path: string = data.document.document_path;
    export const decoding_content: string = data.history.decoding_content.replace(/\n/g, '<br>'); // 改行を<br>タグに変換
    console.log('test!!!!!');
    console.log(decoding_content);

    onMount(() => {
        FormData = document.getElementById('text-form')?.innerText ?? null;
        decipher_text = document.getElementById('text-form');
        decipher_text?.addEventListener('input', () => {
            FormData = decipher_text?.innerText ?? null;
        })
    })

    //let text: string | null = null
</script>

<main>
    <h2>　翻訳の閲覧</h2>
    <div class = "head">
        <a href="document_info?document_id={data.document_id}" class="back-button">文書の詳細ページへ戻る</a>
    </div>
    <div class="decipher">
        <div class="decipher-item">
            <div class="decipher-item-text">
                <form
                    action="?/upload"
                    id="decipher-form"
                    method="POST"
                    enctype="multipart/form-data"
                    use:enhance={() => {
                        return async ({ update }) => {
                            update({ reset: true })
                        }
                    }}
                >
                    <div class="paper vertical-text" contenteditable="false" id="text-form">
                        <label for="text-decipher">
                            <input type="text" name="text-decipher" id="text-decipher" hidden readonly bind:value={FormData}>
                            {@html decoding_content}
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <div class="decipher-item" id="docImage">
            <div class="dicipher-item-image">
                <img src={ document_path } alt="work1">
            </div>
        </div>
    </div>
</main>
<Toast />

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .head {
        display:block;
    }

        /* 戻るボタンのスタイル */
    .back-button {
        margin-left: 10px;
        position: absolute;
        color: #383636;
        padding: 10px 15px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        display: block;
    }

    .back-button:hover {
        background-color: #555;
        color: #fff;
    }

    .decipher {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .decipher-item {
        width: 49%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
        margin-bottom: 10px;
        background-color: rgb(228, 227, 178);
    }

    .decipher-item-text {
        padding: 5px;
    }

    .dicipher-item-image {
        padding: 5px;
    }

    #docImage img {
        height: 100%;
        width: 100%;
    }

    .paper {
        display: block;
        width: 100%;
        height: 78%;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 20px;
        line-height: 2em;
        overflow-x: scroll;
        border: solid;
        float: left;
        background-color: #fff;
    }

    h2{
        margin: 5px;
        color: aliceblue;
        background-color: #7b7b7b;
    }

    .paper span {
        display: block;
    }
    .vertical-text {
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 20px;
        font-family: "Noto Serif JP", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-feature-settings: "palt";
        font-feature-settings: "palt";
        color: #2c3e50;
        line-height: 2em;
        text-indent: 1em;
    }
</style>