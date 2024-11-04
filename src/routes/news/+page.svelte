<script lang='ts'>
    import { page } from '$app/stores';
    import test from '$lib/images/logo.png';
    import type { PageData } from "./$types";

    export let data: PageData;
    export let newsDatas = data.news;
</script>

<main>
    <main id="information">
        <div class="wrapper">
          <h1>お知らせ</h1>
          {#each newsDatas as newsData}
          <article id="part1">
            <ul>
              <li>
                <p class="text_date"><time>{ newsData.added_year }年{ newsData.added_month }月{ newsData.added_day }</time></p>
                <img src={ newsData.news_path } alt="work1">
                <!-- <img src={test} alt="work1"> -->
              </li>
              <li>
                <h2>{ newsData.news_name }</h2>
                <p class="text_content">{ newsData.news_explain }</p>
              </li>
            </ul>
          </article>
          {/each}


        </div>
    </main>
</main>

<style>
/* information
------------------------------ */
@media only screen and (min-width: 950px) {
  #information {
    padding: 80px 0 100px;
    color: #222;
    text-align: center;
    background-color: #fafafa;
  }

  #information img {
      height: auto;
      margin: 0 auto;
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
    font-size: 1.3rem;
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

  #content2 ol li:last-child {
    margin-bottom: 0;
  }

  #content2 ol li time {
    margin-right: 20px;
    font-size: 0.85rem;
  }

  .link_contact a {
    display: inline-block;
    padding: 15px 60px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    box-shadow: 0 5px 0 #b07c00;
    background-color: #e29000;
  }

  .link_contact a:hover {
    background-color: #e89d19;
  }

  #part1 img {
    max-width: 305px;
    text-align:center;
    /* margin-left: 10%; */
    /* height: 90%; */

  }

  #part2 img {
    width: 70%
  }

  #part3 img {
    width: 70%
  }

  ul {
    display: flex;
  }

  li {
    width: 50%;
    list-style-type:none;
  }
}
@media only screen and (max-width: 949px) {
  #information {
    padding: 40px 20px;
    color: #222;
    text-align: center;
    background-color: #fafafa;
  }

  #information .wrapper {
    width: 100%;
  }

  #information h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 3px solid #222;
  }

  #information article {
    margin-bottom: 20px;
    padding: 10px;
    text-align: left;
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  #information article .text_date {
    font-size: 1rem;
    text-align: left;
    color: #666;
  }

  #information article h2 {
    font-size: 1.1rem;
    margin: 10px 0;
    padding-bottom: 8px;
    border-bottom: 3px solid #494949;
    line-height: 1.5em;
  }

  #information article .text_content {
    font-size: 0.9rem;
    line-height: 1.6em;
  }

  #part1 img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  ul {
    display: block;
    padding: 0;
  }

  li {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}
</style>