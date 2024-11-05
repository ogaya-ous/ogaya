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
        <div class="decipher-item" id="docImage">
            <div class="dicipher-item-image">
                <img src={document_path} alt="work1" />
            </div>
        </div>
        <div class="decipher-item" id="docText">
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
    </div>
</main>
<Toast />

<style>
@media only screen and (min-width: 950px) {
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif; /* フォントを統一 */
    }

    /* 戻るボタンのスタイル */
    .back-button {
        position: absolute;
        color: #fff;
        padding: 5px 10px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        background-color: #3d3d3d; /* ボタンの色 */
        transition: background-color 0.3s;
    }

    .back-button:hover {
        background-color: #555; /* ホバー時の色 */
    }

    /* メインコンテナ */
    .decipher {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap; /* レスポンシブ対応 */
        padding: 20px; /* パディングを追加 */
    }

    /* 各セクションのスタイル */
    .decipher-item {
        flex: 1 1 45%; /* 自動的にサイズを調整 */
        margin: 10px; /* セクション間のスペース */
        background-color: rgb(228, 227, 178);
        border-radius: 10px; /* 角を丸くする */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        overflow: hidden; /* 子要素のオーバーフローを隠す */
        transition: transform 0.2s; /* ホバー効果 */
    }

    .decipher-item:hover {
        transform: scale(1.02); /* ホバー時に少し拡大 */
    }

    .decipher-item-text {
        padding: 20px; /* パディングを追加 */
    }

    /* 画像のスタイル */
    .dicipher-item-image {
        padding: 5px;
    }

    #docImage img {
        width: auto; /* 画像をコンテナに合わせる */
        max-height: 500px; /* アスペクト比を保つ */
        border-radius: 10px; /* 角を丸くする */
        margin: auto;
    }

    /* テキストエリアのスタイル */
    .paper {
        width: 100%;
        height: 500px; /* 固定の高さに設定 */
        writing-mode: vertical-rl;
        font-size: 18px; /* フォントサイズを少し小さく */
        line-height: 1.5em; /* 行間を調整 */
        border: 1px solid #ddd; /* 境界線 */
        border-radius: 5px; /* 角を丸くする */
        padding: 10px; /* パディングを追加 */
        background-color: #fff; /* 背景色 */
    }

    /* ヘッダー */
    h2 {
        margin: 5px 0;
        color: #333; /* テキストの色 */
        text-align: center; /* 中央揃え */
        font-size: 1.5em; /* フォントサイズを大きく */
    }

    /* ページネーション */
    .Pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0; /* 上下のマージン */
    }

    .Pagination button {
        background-color: #6a11cb; /* ボタンの色 */
        color: white; /* テキストの色 */
        border: none;
        border-radius: 25px; /* 丸いボタン */
        padding: 10px 20px; /* ボタンのパディング */
        font-weight: bold;
        cursor: pointer; /* カーソルをポインターに */
        transition: background-color 0.3s; /* ホバー効果 */
    }

    .Pagination button:hover {
        background-color: #2575fc; /* ホバー時の色 */
    }

    /* AI翻訳結果 */
    .ai-translation {
        padding: 15px; /* パディングを追加 */
        background-color: #f9f9f9; /* 背景色 */
        border: 1px solid #ddd; /* 境界線 */
        margin-top: 5px; /* 上のマージン */
        width: 100%;
        border-radius: 5px; /* 角を丸くする */
    }

    .ai-translation h3 {
        margin-bottom: 5px; /* 下のマージン */
        font-size: 1.5em; /* フォントサイズを大きく */
    }

    .ai-translation p {
        margin: 0; /* マージンをリセット */
        color: #333; /* テキストの色 */
    }

    /* AIボタンのスタイル */
    .ai-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        font-size: 1em;
        font-weight: bold;
        color: white;
        background: linear-gradient(45deg, #6a11cb, #2575fc);
        border: none;
        border-radius: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        margin-left: 10px; /* 左のマージン */
    }

    .ai-btn:hover {
        background: linear-gradient(45deg, #2575fc, #6a11cb);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px); /* ホバー時に少し上に移動 */
    }

    /* アイコンのスタイル */
    .icon-robot {
        width: 1em;
        height: 1em;
        margin-right: 0.5em; /* 右のマージン */
    }
}

@media only screen and (max-width: 950px) {
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif; /* フォントを統一 */
    }

    /* 戻るボタンのスタイル */
    .back-button {
        padding: 5px;
        font-size: 0.5em; /* フォントサイズを小さく */
    }

    /* メインコンテナ */
    .decipher {
        flex-direction: column; /* 縦に並べる */
        align-items: center; /* 中央揃え */
        padding: 10px; /* パディングを追加 */
    }

    /* 各セクションのスタイル */
    .decipher-item {
        width: 100%; /* 幅を90%に設定 */
        margin: 2px 0; /* 上下のマージンを追加 */
        background-color: rgb(228, 227, 178);
        border-radius: 10px; /* 角を丸くする */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        overflow: hidden; /* 子要素のオーバーフローを隠す */
    }

    .decipher-item-text {
        padding: 5px; /* パディングを追加 */
    }

    /* 画像のスタイル */
    #docImage img {
        width: auto; /* 幅を100%に設定 */
        max-height: 300px; /* 最大高さを300pxに設定 */
        border-radius: 10px; /* 角を丸くする */
        margin: auto;
    }

    /* テキストエリアのスタイル */
    .paper {
        width: 100%;
        height: 300px; /* 固定の高さに設定 */
        writing-mode: vertical-rl;
        font-size: 13px; /* フォントサイズを少し小さく */
        line-height: 1.5em; /* 行間を調整 */
        border: 1px solid #ddd; /* 境界線 */
        border-radius: 5px; /* 角を丸くする */
        padding: 10px; /* パディングを追加 */
        background-color: #fff; /* 背景色 */
    }

    /* ヘッダー */
    h2 {
        margin: 10px 0; /* マージンを調整 */
        font-size: 0.9em; /* フォントサイズを小さく */
        text-align: center;
    }

    /* ページネーション */
    .Pagination {
        flex-direction: column; /* 縦に並べる */
        align-items: center; /* 中央揃え */
        margin: 2px 0; /* 上下のマージン */
    }

    .Pagination button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        font-size: 0.5em;
        font-weight: bold;
        color: white;
        background:#6a11cb;
        border: none;
        border-radius: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        margin-left: 20%; /* 左のマージン */
    }

    .Pagination button:hover {
        background-color: #2575fc; /* ホバー時の色 */
    }

    /* AI翻訳結果 */
    .ai-translation {
        padding: 10px; /* パディングを追加 */
        background-color: #f9f9f9; /* 背景色 */
        border: 1px solid #ddd; /* 境界線 */
        margin-top: 2px; /* 上のマージン */
        width: 100%; /* 幅を100%に設定 */
        border-radius: 5px; /* 角を丸くする */
    }

    /* AIボタンのスタイル */
    .ai-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        font-size: 0.5em;
        font-weight: bold;
        color: white;
        background: #ff0101;
        border: none;
        border-radius: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        margin-left: 10%; /* 左のマージン */
    }

    .ai-btn:hover {
        background: linear-gradient(45deg, #2575fc, #6a11cb);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px); /* ホバー時に少し上に移動 */
    }

    /* アイコンのスタイル */
    .icon-robot {
        width: 1em;
        height: 1em;
        margin-right: 0.5em; /* 右のマージン */
    }
    .decipher {
        flex-direction: column; /* 縦並び */
    }
    .decipher-item #docImage{
        order: 1; /* 最初に表示 */
    }

    .decipher-item #docText{
        order: 2; /* 次に表示 */
    }
}
</style>