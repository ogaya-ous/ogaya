<script lang="ts">
  import { enhance } from "$app/forms";
  import testimg_path from "$lib/images/first_view.jpg";
  import { onMount } from "svelte";
  import Toast from "../Toast.svelte";
  import { notifications } from "../notifications";
  import type { PageData } from "./$types";

  let decipher_text: HTMLElement | null = null;
  let FormData: string | null = null;
  export let data: PageData;

  export const document_path: string = data.document.document_path;
  export const decoding_content: string = data.history.decoding_content.replace(
    /\n/g,
    "<br>"
  ); // 改行を<br>タグに変換
  export const decoding_gpt: string = data.history.decoding_gpt;

  console.log(decoding_content);

  onMount(() => {
    FormData = document.getElementById("text-form")?.innerText ?? null;
    decipher_text = document.getElementById("text-form");
    decipher_text?.addEventListener("input", () => {
      FormData = decipher_text?.innerText ?? null;
    });
  });
</script>

<main>
  <h2>翻訳の閲覧</h2>
  <div class="head">
    <a href="document_info?document_id={data.document_id}" class="back-button"
      >文書の詳細ページへ戻る</a
    >
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
              update({ reset: true });
            };
          }}
        >
          <div
            class="paper vertical-text"
            contenteditable="false"
            id="text-form"
          >
            <label for="text-decipher">
              <input
                type="text"
                name="text-decipher"
                id="text-decipher"
                hidden
                readonly
                bind:value={FormData}
              />
              {@html decoding_content}
            </label>
          </div>
        </form>
      </div>
      <div class="ai-translation">
        <h3>AI翻訳結果</h3>
        <!-- <p id="ai-translation-text">
                    aaaa
                    {@html translatedText}
                </p> -->
        <p id="ai-translation-text">
          {@html decoding_gpt}
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

  /* 全体のスタイル */
  main {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Noto Serif JP", serif;
    color: #333;
  }

  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    background-color: #7b7b7b;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 20px;
  }

  /* ヘッダー部分 */
  .head {
    margin-bottom: 20px;
  }

  .back-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #f0f0f0;
    color: #383636;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .back-button:hover {
    background-color: #555;
    color: #fff;
  }

  /* 翻訳コンテンツ部分 */
  .decipher {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 25px;
  }

  .decipher-item {
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 48%;
  }

  .decipher-item-text {
    margin-bottom: 20px;
  }

  .dicipher-item-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  /* テキストエリア */
  .paper {
    width: 100%;
    height: 400px;
    writing-mode: vertical-rl;
    font-size: 20px;
    line-height: 2em;
    overflow-x: scroll;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
  }

  .vertical-text {
    writing-mode: vertical-rl;
    font-size: 20px;
    font-family: "Noto Serif JP", serif;
    color: #2c3e50;
    line-height: 2em;
    text-indent: 1em;
  }

  /* AI翻訳結果 */
  .ai-translation {
    margin-top: 20px;
  }

  .ai-translation h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #555;
  }

  #ai-translation-text {
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 18px;
    line-height: 1.6;
    color: #333;
  }

  /* レスポンシブデザイン */
  @media screen and (max-width: 1024px) {
    .decipher {
      flex-direction: column;
      align-items: center;
    }

    .decipher-item {
      width: 100%;
      margin-bottom: 20px;
    }

    .paper {
      height: 300px;
      font-size: 18px;
    }

    .back-button {
      display: block;
      text-align: center;
      margin: 10px auto;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    .paper {
      font-size: 16px;
      height: 250px;
    }

    #ai-translation-text {
      font-size: 16px;
    }
  }
</style>
