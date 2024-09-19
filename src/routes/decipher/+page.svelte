<script lang="ts">
    import { enhance } from "$app/forms";
    import Toast from "../Toast.svelte";
    import { notifications } from "../notifications";
    import type { PageData } from "./$types";

    let decipher_text: HTMLElement | null = null;
    let FormData: string;
    let translatedText: string = "";
    export let data: PageData;

    let ai_flag: boolean = false;

    export const document_path: string = data.document.document_path;
    export const recentHistory = data.recentHistory;

    if (recentHistory) {
        FormData = recentHistory.decoding_content;
    }

    async function aiDecipher() {
        try {
            const response = await fetch("/ai_decipher", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: FormData }),
            });

            if (!response.ok) {
                throw new Error("AI翻訳に失敗しました");
            }

            const data = await response.json();
            translatedText = data.answer.replace(/\n/g, "<br>");
            notifications.success("AI翻訳が完了しました", 5000);
            ai_flag = true;
        } catch (error) {
            console.error(error);
        }
    }
</script>

<main>
    <h2>文書翻訳</h2>
    <a href="document_info?document_id={data.document_id}" class="back-button">文書の詳細ページへ戻る</a>
    <ul class="Pagination">
        {#if !data.session}
            <button
            class="btn btn--orange"
            on:click={() =>
                notifications.warning("ログインしてください", 5000)}
            >完了</button
            >
        {:else if ai_flag==false}
            <button
            class="btn btn--orange"
            on:click={() =>
                notifications.warning("AI翻訳を実行してください", 5000)}
            >完了</button
            >
        {:else}
        <a href="document_info?document_id={data.document_id}">
            <button
            type="submit"
            class="btn btn--orange"
            form="decipher-form"
            on:click={() => notifications.success("保存しました", 5000)}
            >完了</button
        ></a>
        {/if}

        <button class="btn btn--blue ai-btn" on:click={aiDecipher}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-robot" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 1em; height: 1em; margin-right: 0.5em;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a2 2 0 012 2v1h-4V4a2 2 0 012-2zm-6 7h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2zm0 2v7h12v-7H6zm3 1a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zM9 18h6v2H9v-2z" />
            </svg>
            AI翻訳
        </button>
    </ul>
    <div class="decipher">
        <div class="decipher-item">
            <div class="decipher-item-text" id="form-container">
                <form
                    action="?/upload"
                    id="decipher-form"
                    method="POST"
                    enctype="multipart/form-data"
                    use:enhance={() => {
                        return async ({ update }) => {
                            update({ reset: true });
                        };
                    }}
                >
                    <textarea class="paper vertical-text" name="text-decipher" id="text-form" bind:value = {FormData}></textarea>
                    <input type="hidden" name="translated-text" value={translatedText} />
                    <!-- <textarea name="text-decipher" id="text-decipher"  rows="10" cols="50"></textarea> -->
                </form>
            </div>
            <div class="ai-translation">
                <h3>AI翻訳結果</h3>
                <p id="ai-translation-text">
                    {@html translatedText}
                </p>
            </div>
        </div>
        <div class="decipher-item" id="docImage">
            <div class="dicipher-item-image">
                <img src={document_path} alt="work1" />
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

    /* 戻るボタンのスタイル */
    .back-button {
        position: absolute;
        color: #383636;
        padding: 10px 15px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
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
        align-items: flex-start;
    }

    .decipher-item {
        width: 49%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5px;
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

    h2 {
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
    .Pagination {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Pagination a {
        text-decoration: none;
    }

    .Pagination li {
        list-style: none;
        margin: 5px;
    }

    .Pagination-Item-Link {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 45px;
        height: 30px;
        background: #fff;
        font-size: 20px;
        color: #3d3d3e;
        font-weight: bold;
        transition: all 0.15s linear;
    }
    .Pagination-Item-Link-Icon {
        width: 20px;
    }
    .Pagination-Item-Link.isActive {
        pointer-events: none;
        color: #111;
    }
    .Pagination-Item-Link:not(.isActive):hover {
        opacity: 0.5;
    }

    .btn--orange,
    a.btn--orange {
        color: #fff;
        background-color: #252526;
        padding: 10px 20px;
    }
    .btn--orange:hover,
    a.btn--orange:hover {
        color: #fff;
        background: #252526;
    }
    .ai-translation {
        padding: 10px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        margin-top: 10px;
        width: 100%;
    }
    .ai-translation h3 {
        margin-bottom: 10px;
    }

    .ai-translation p {
        margin: 0;
    }
    .ai-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5em 1em;
        font-size: 1em;
        font-weight: bold;
        color: white;
        background: linear-gradient(45deg, #6a11cb, #2575fc);
        border: none;
        border-radius: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        margin-left: 10px;
    }

    .ai-btn:hover {
        background: linear-gradient(45deg, #2575fc, #6a11cb);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }

    .icon-robot {
        width: 1em;
        height: 1em;
        margin-right: 0.5em;
    }
</style>