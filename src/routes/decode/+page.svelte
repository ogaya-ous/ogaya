<script lang='ts'>
    import { page } from '$app/stores';
    import test from '$lib/images/logo.png';
    import type { PageData } from "./$types";

    export let data: PageData;
    export let decodedDatas = data.decoded;
</script>

<main>
    <main id="information">
        <div class="wrapper">
          <h1>翻訳済み文書のまとめ</h1>
          {#each decodedDatas as decodedData}
          <article id="part1">
            <ul>
              <li>
                <p class="text_date"><time>{ decodedData.added_year }年{ decodedData.added_month }月{ decodedData.added_day }</time></p>
                <img src={ decodedData.decoded_path } alt="work1">
                <!-- <img src={test} alt="work1"> -->
              </li>
              <li>
                <h2><a href="decoded_document?decoded_id={ decodedData.decoded_id }">{ decodedData.decoded_name }</a></h2>
                <p class="text_content">{ decodedData.decoded_explain }</p>
              </li>
            </ul>
          </article>
          {/each}


        </div>
    </main>
</main>

<style>
  @media only screen and (min-width: 769px) {
  /* information
  ------------------------------ */
  #information {
    padding: 80px 0 100px;
    color: #222;
    text-align: center;
    background-color: #fafafa;
  }
  
  #information img {
      width: 100%;
  }
  
  #information .wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
  }
  
  #information h1 {
    display: inline-block;
    margin: 0 auto 40px;
    padding-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 4px solid #222;
  }
  
  #information article {
    margin-bottom: 2%;
    padding: 10px;
    text-align: left;
    height: 30%;
    /* border-radius: 20px; */
    background-color: #f1f1f1;
  }
  
  #information article .text_date {
    font-size: 0.85rem;
  }
  
  #information article h2 {
    margin-bottom: 30px;
    padding-bottom: 12px;
    font-size: 1.15rem;
    line-height: 1.8em;
    border-bottom: 5px solid #494949;
  }
  
  #information article .text_content {
    line-height: 2.0em;
    font-size: 0.85rem;
  }

  #information article a {
    color: #494949;
    text-decoration: none;
  }

  
  #content2 ol li time {
    margin-right: 20px;
    font-size: 0.85rem;
  }
  
  
  #part1 img {
    max-width: 305px;
    text-align:center;
    margin-left: 10%;
    /* height: 90%; */
  
  }
  
  ul {
    display: flex;
  }
  
  li {
    width: 50%;
    list-style-type:none;
  }
}
@media (max-width: 768px) {
    #information {
        padding: 40px 0; /* 上下のパディングを縮小 */
        background-color: #fafafa; /* 背景色を維持 */
    }

    #information h1 {
        font-size: 1.1rem; /* タイトルサイズを調整 */
        margin-bottom: 20px; /* マージンを縮小 */
        text-align: center;
    }

    #information article {
        padding: 10px; /* パディングを維持 */
        margin-bottom: 20px; /* 各記事のマージンを調整 */
        background-color: #f1f1f1; /* 背景色を維持 */
        border-radius: 10px; /* 角を丸くする */
    }

    #information article .text_date {
        font-size: 0.75rem; /* 日付サイズを調整 */
    }

    #information article h2 {
        font-size: 1.25rem; /* サブタイトルサイズを調整 */
        margin-bottom: 15px; /* マージンを調整 */
    }

    #information article .text_content {
        line-height: 1.5em; /* 行間を調整 */
        font-size: 0.9rem; /* テキストサイズを調整 */
    }

    #information img {
        width: 100%; /* 画像の幅を100%に */
        height: auto; /* 高さを自動調整 */
    }

    ul {
        flex-direction: column; /* 縦並びに変更 */
        padding: 0; /* パディングをリセット */
    }

    li {
        width: 100%; /* 幅を100%に */
        margin-bottom: 10px; /* 各リスト項目の間隔を調整 */
    }

    #part1 img {
        max-width: 100%; /* 画像の最大幅を100%に */
        margin: 0 auto; /* 中央揃え */
        display: block; /* ブロック表示に */
    }
}
  </style>