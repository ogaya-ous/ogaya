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
  <a href="document_info?document_id={data.document_id}" class="back-button"
    >文書の詳細ページへ戻る</a
  >
  <ul class="Pagination">
    {#if !data.session}
      <button
        class="btn btn--orange"
        on:click={() => notifications.warning("ログインしてください", 5000)}
        >完了</button
      >
    {:else if ai_flag == false}
      <button
        class="btn btn--orange"
        on:click={() => notifications.warning("AI翻訳を実行してください", 5000)}
        >完了</button
      >
    {:else}
      <button
        type="submit"
        class="btn btn--orange"
        form="decipher-form"
        on:click={() => notifications.success("保存しました", 5000)}
        >完了</button
      >
    {/if}

    <button class="btn btn--blue ai-btn" on:click={aiDecipher}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-robot"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        style="width: 1em; height: 1em; margin-right: 0.5em;"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 2a2 2 0 012 2v1h-4V4a2 2 0 012-2zm-6 7h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2zm0 2v7h12v-7H6zm3 1a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zM9 18h6v2H9v-2z"
        />
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
          <textarea
            class="paper vertical-text"
            name="text-decipher"
            id="text-form"
            bind:value={FormData}
          ></textarea>
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
      font-family: "Noto Sans JP", sans-serif; /* フォントを統一 */
    }

    /* メインコンテナ */
    main {
      padding: 20px;
      max-width: 90%;
      margin: 0 auto;
      background-color: #f9f9f9; /* 背景色を追加 */
      border-radius: 10px; /* 角を丸くする */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 影を追加 */
    }

    /* ヘッダー */
    h2 {
      font-size: 28px;
      font-weight: bold;
      color: #000000;
      background-color: #ffc400; /* ヘッダーの背景色 */
      padding: 15px 20px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 20px;
    }

    /* 戻るボタン */
    .back-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #ffffffa2; /* ボタンの背景色 */
      color: #000000;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      transition:
        background-color 0.3s ease,
        transform 0.2s ease;
      margin-bottom: 20px;
    }

    .back-button:hover {
      background-color: #000000a2; /* ホバー時の色 */
      color: #fff;
      transform: translateY(-2px); /* ホバー時に少し上に移動 */
    }

    /* ページネーション */
    .Pagination {
      display: flex;
      justify-content: center;
      gap: 10px; /* ボタン間のスペース */
      margin-bottom: 20px;
    }

    .Pagination button {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background-color: #6a11cb; /* ボタンの背景色 */
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        transform 0.2s ease;
    }

    .Pagination button:hover {
      background-color: #2575fc; /* ホバー時の色 */
      transform: translateY(-2px); /* ホバー時に少し上に移動 */
    }

    /* AI翻訳ボタン */
    .ai-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background: linear-gradient(45deg, #6a11cb, #2575fc); /* グラデーション */
      border: none;
      border-radius: 25px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .ai-btn:hover {
      background: linear-gradient(
        45deg,
        #2575fc,
        #6a11cb
      ); /* ホバー時のグラデーション */
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px); /* ホバー時に少し上に移動 */
    }

    /* 翻訳コンテンツ */
    .decipher {
      display: flex;
      justify-content: space-between;
      gap: 20px; /* セクション間のスペース */
      margin-top: 20px;
    }

    .decipher-item {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 48%; /* 幅を調整 */
      transition: transform 0.2s ease;
    }

    .decipher-item:hover {
      transform: scale(1.02); /* ホバー時に少し拡大 */
    }

    /* 画像セクション */
    .dicipher-item-image img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    /* テキストエリア */
    .paper {
      width: 100%;
      height: 700px;
      writing-mode: vertical-rl;
      font-size: 30px;
      line-height: 1.5em;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 15px;
      background-color: #f9f9f9;
      resize: none; /* リサイズを無効化 */
    }

    /* AI翻訳結果 */
    .ai-translation {
      margin-top: 20px;
      padding: 15px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 10px;
    }

    .ai-translation h3 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }

    #ai-translation-text {
      font-size: 16px;
      line-height: 1.6;
      color: #555;
    }

    /* レスポンシブデザイン */
    @media screen and (max-width: 768px) {
      .decipher {
        flex-direction: column; /* 縦並び */
      }

      .decipher-item {
        width: 100%; /* 幅を100%に */
        margin-bottom: 20px;
      }

      .paper {
        height: 300px; /* 高さを調整 */
        font-size: 16px; /* フォントサイズを小さく */
      }

      .back-button,
      .Pagination button,
      .ai-btn {
        width: 100%; /* ボタンの幅を100%に */
        margin-bottom: 10px;
      }
    }
  }
  @media only screen and (max-width: 949px) {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Noto Sans JP", sans-serif;
    }

    /* メインコンテナ */
    main {
      padding: 15px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* ヘッダー */
    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      background-color: #ffc400;
      padding: 10px 15px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 15px;
    }

    /* 戻るボタン */
    .back-button {
      display: block;
      width: 100%;
      padding: 12px;
      background-color: #ffffff;
      color: #000000;
      text-align: center;
      text-decoration: none;
      border-radius: 25px;
      border-color: #000000;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .back-button:hover {
      background-color: #000000a2;
      color: #fff;
    }

    /* ページネーション */
    .Pagination {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }

    .Pagination button {
      flex: 1;
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      background-color: #6a11cb;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .Pagination button:hover {
      background-color: #2575fc;
    }

    /* AI翻訳ボタン */
    .ai-btn {
      display: block;
      width: 100%;
      padding: 12px;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      border: none;
      border-radius: 25px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      cursor: pointer;
    }

    .ai-btn:hover {
      background: linear-gradient(45deg, #2575fc, #6a11cb);
    }

    /* 翻訳コンテンツ */
    .decipher {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 15px;
    }

    .decipher-item {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 15px;
      width: 100%;
    }

    /* 画像セクション */
    .dicipher-item-image img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    /* テキストエリア */
    .paper {
      width: 100%;
      height: 500px;
      writing-mode: vertical-rl;
      font-size: 25px;
      line-height: 1.5em;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }

    /* AI翻訳結果 */
    .ai-translation {
      margin-top: 15px;
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 10px;
    }

    .ai-translation h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
      text-align: center;
    }

    #ai-translation-text {
      font-size: 14px;
      line-height: 1.6;
      color: #555;
    }
  }
</style>
