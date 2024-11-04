<script>
	import ogaya1 from '$lib/images/sakane_vs_ogaya1.jpg';
	import ogaya2 from '$lib/images/sakane_vs_ogaya2.jpg';
</script>
<main>
    <h2 class="title">翻訳から分かった大茅地区の出来事の紹介</h2>
    <div class="contents">
        <div class ="content1">
            <p>文化二年（1805年）　大茅と坂根の争いの話
                <p>大茅地区には、３００年ほど前からの文書が先祖代々の方の努力で多く残されています。このページでは、大茅地区有文書を翻訳することで判明した出来事の一つに、大茅地区と坂根地区の争いの一件を紹介させていただきます。
                    <p>文化二年のことですが、この頃日本では、1783年に浅間山の大噴火、この影響もあった天明の大飢饉、1808年間宮林蔵からふと探査、1853年ペリー来航などがありました。また1868年には、元号が明治になりました。この頃西粟倉村はまだ無く、今の現在の各部落が村でした。各村ごとに今の役場のような仕事をしていました。坂根は峠のふもとの村で宿がありました。坂根は宿次（しゅくつぎ）と言って次の宿屋まで人や荷物を送ってお金を得ていました。大茅は、坂根が峠のふもとであったのに対して、一番山奥の村で農作物の出来が悪いため、木の桶や樽の材料等木材を使った物を作り、大茅地区の南部に位置する大原の方へ出荷していました。
                        <p>このような中で、文化二年の２月に坂根の人たちが大茅からの道にバリケードを作り、大茅からの荷物の出荷を止めてしまいました。４～５日でこの騒動は収まりましたが、４月に坂根が大茅を訴えました。５月には大茅も訴えに反論して訴えました。８月には、怪我人がでて、争いが起こらないように取り決めが定められました。坂根は土浦藩の領地であったのに対して、大茅は、幕府の領地でした。この様に争いが起き、解決できないときは、江戸で裁判を行うことになります。大茅からは３人江戸に行きましたが、その中の一人が疱瘡にかかり、ついには亡くなっています。この事についても資料が残っています。
                            <p>どの様な内容で双方が訴えたかお話しします。坂根は、宿次により収入を得ていました大茅は宿次を行わず、直接木の桶や樽の材料を運んでいました。これがこの争いが起きたきっかけです。坂根は、宿次による収入を得ることができなかったため、大茅からの道にバリケードを作ったのです。坂根が江戸へ送った訴訟の内容や大茅の訴えの古文書等大茅地区で大切に保管しており、それらから以上のような出来事を知ることが出来ております。このような出来事で江戸まで行き、裁判を行ったわけですが、その結果については、記録はありませんので、大変気になる内容ですがどちらが勝ったかはわかりません。
                                <p>我々が翻訳を行った古文書から以上のようなことがわかり、大茅地区で起こった出来事、暮らしの様子を知ることが出来ました。大茅地区の歴史をさらに紐解くため皆様のお力を添えていただけますと幸いです。
        </div>
        <div class="content2">
            <img src={ ogaya1 } alt="" class="ogaya_image">
            <img src={ ogaya2 } alt="" class="ogaya_image">
        </div>
    </div>
</main>

<style>
    @media only screen and (min-width: 950px) {
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
}

@media only screen and (max-width: 949px) {
    .contents {
        display: block;
        padding: 15px;
        min-height: 100vh;
        background-color: #f8f8f8; /* 背景色を追加 */
    }

    .content1 {
        width: 100%;
        text-align: left;
        margin: 0 0 20px; /* 下部余白を追加 */
    }

    .content1 p {
        font-size: 0.6em; /* フォントサイズを大きく */
        line-height: 1.6em; /* 行間を広げて読みやすく */
        margin-bottom: 15px; /* 各段落の下に余白を追加 */
    }

    .content2 {
        width: 100%;
        text-align: center;
        margin: 0; /* マージンをリセット */
    }

    .title {
        font-size: 20px; /* タイトルのフォントサイズを調整 */
        font-weight: bold;
        margin-bottom: 15px;
        text-align: center;
        color: #333; /* タイトルの色を変更 */
    }

    .ogaya_image {
        width: 90%; /* 画像幅を90%に設定 */
        height: auto; /* 高さを自動調整 */
        border-radius: 8px; /* 画像に角丸を追加 */
        margin: 0 auto; /* 画像を中央揃え */
        display: block; /* 画像をブロック要素に設定 */
        margin-bottom: 15px; /* 画像の下に余白を追加 */
    }
}
</style>
