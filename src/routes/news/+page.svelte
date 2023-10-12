<script>
    import img_path from '$lib/images/news.jpg';
    import doc from '$lib/images/document_img.jpg';
</script>

<main>
    <main id="information">
        <div class="wrapper">
          <h1>お知らせ</h1>

          <article id="part1">
            <ul>
              <li>
                <p class="text_date"><time datetime="2021-04-12">2021.04.12</time></p>
                <img src={doc}>
              </li>
              <li>
                <h2>お問い合わせページを追加しました。</h2>
                <p class="text_content">お問い合わせページを追加しました。<br>当サイトについてのお問い合わせは、記載した電話番号、またはメールアドレスまでお寄せください。</p>
              </li>
            </ul>
          </article>

          <article id="part2">
            <ul>
              <li>
                <p class="text_date"><time datetime="2021-04-05">2021.04.05</time></p>
                <img src={doc}>
              </li>
              <li>
                <h2>プロフィールを更新しました。</h2>
                <p class="text_content">プロフィールを更新しました。</p>
              </li>
            </ul>
          </article>

          <article id="part3">
            <ul>
              <li>
                <p class="text_date"><time datetime="2021-04-01">2021.04.01</time></p>
                <img src={doc}>
              </li>
              <li>
                <h2>PROFILEサイトを公開しました！</h2>
                <p class="text_content">サイトを公開しました。<br>今後も更新ができるよう頑張ります。</p>
              </li>
            </ul> 
          </article>

        </div>
    </main>
</main>

<style>
/* information
------------------------------ */
#information {
  padding: 80px 0 100px;
  color: #222;
  text-align: center;
  background-color: #fafafa;
}

#information img {
    margin-bottom: 40px;
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
  margin-bottom: 40px;
  padding: 40px 40px 35px;
  text-align: left;
  border-radius: 20px;
  background-color: #faf4df;
}

#information article .text_date {
  font-size: 0.85rem;
}

#information article h2 {
  margin-bottom: 30px;
  padding-bottom: 12px;
  font-size: 1.15rem;
  line-height: 1.8em;
  border-bottom: 2px solid #bab02b;
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
  width: 70%
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
</style>