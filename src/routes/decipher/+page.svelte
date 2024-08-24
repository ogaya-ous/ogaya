<script lang="ts">
    import { enhance } from "$app/forms";
    import testimg_path from "$lib/images/first_view.jpg";
    import { onMount } from "svelte";
    import Toast from "../Toast.svelte";
    import { notifications } from "../notifications";
    import type { PageData } from "./$types";

    let decipher_text: HTMLElement | null = null;
    let FormData: string | null = null;
    let translatedText: string = "";
    export let data: PageData;

    export const document_path: string = data.document.document_path;

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
        } catch (error) {
            console.error(error);
        }
    }

    onMount(() => {
        FormData = document.getElementById("text-form")?.innerText ?? null;
        decipher_text = document.getElementById("text-form");
        decipher_text?.addEventListener("input", () => {
            FormData = decipher_text?.innerText ?? null;
        });
    });

    //let text: string | null = null
</script>

<main>
    <h2>文書翻訳</h2>
    <a href="document_info?document_id={data.document_id}" class="back-button"
        >文書の詳細ページへ戻る</a
    >
    <ul class="Pagination">
        <!-- <li class="Pagination-Item">
            <a class="Pagination-Item-Link" href="/pages/1/">
                <svg xmlns="http://www.w3.org/2000/svg" class="Pagination-Item-Link-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </a>
        </li>
        <li class="Pagination-Item">
            <a class="Pagination-Item-Link current" id="current" href="/pages/1/"><span>1/20</span></a>
        </li>
        <li class="Pagination-Item">
            <a class="Pagination-Item-Link" href="/pages/5/">
                <svg xmlns="http://www.w3.org/2000/svg" class="Pagination-Item-Link-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </a>
        </li> -->
        {#if data.session}
            <button
                type="submit"
                class="btn btn--orange"
                form="decipher-form"
                on:click={() => notifications.success("保存しました", 5000)}
                >完了</button
            >
        {:else}
            <button
                class="btn btn--orange"
                on:click={() =>
                    notifications.warning("ログインしてください", 5000)}
                >完了</button
            >
        {/if}
        <button class="btn btn--blue" on:click={aiDecipher}>AI翻訳</button>
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
                    <div
                        class="paper vertical-text"
                        contenteditable="true"
                        id="text-form"
                    >
                        <label for="text-decipher">
                            <input
                                type="text"
                                name="text-decipher"
                                id="text-decipher"
                                hidden
                                bind:value={FormData}
                            />
                            <!-- <span>こちらに翻訳した文章をお書きください。</span> -->
                            <span> 土屋保三郎領分</span>
                            <span> 作州吉田郡坂根村惣代</span>
                            <span> 訴訟人　庄屋　源太郎</span>
                            <span> 訴訟人　問屋　源四郎</span>
                            <span>あきない荷物宿次の件での争い</span>
                            <span> 当御支払所</span>
                            <span> 相手　庄屋　甚兵衛</span>
                            <span> 相手　年寄　傅四郎</span>
                            <br />
                            <span>右の訴訟人源太郎、源四郎が申し上げます。</span
                            ><br />
                            <span>坂根村は昔より、</span>
                        </label>
                    </div>
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
</style>
