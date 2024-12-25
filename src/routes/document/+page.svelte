<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from "./$types";
    import complete_path from '$lib/images/complete_icon.png';
    // import axios from 'axios';

    /*
    async function getDocument(page_num){
		// const url = 'http://localhost:8000';
        const url = 'https://oogaya.vercel.app';
		return await axios.get(url + '/api/document/' + page_num);
    }
    */
    export let data: PageData;
    
    export let documentData = data.documents;

    export let document_start_id: number = Number(data.documents[0].document_id);

    // 文書一覧のページ番号
    $: page_num = $page.url.searchParams.get('page');
    $: next_page = Number(page_num) + 1;
    $: prev_page = Number(page_num) - 1;
</script>

<main>
    <div id="document_list" class="cf">
        <section id="work" class="cf">
            <h2>文書一覧</h2>
            {#if documentData[0]}
            <a href="document_info?document_id={ documentData[0].document_id }">
                <div class="document">
                    <article>
                        <div class="document-image">
                            <img class="doc_image" src={ documentData[0].document_path } width="313" height="269" alt="work1">
                        </div>
                        <div class="added_date">
                            <time>{ documentData[0].added_year }年{ documentData[0].added_month }月{ documentData[0].added_day }日</time>
                        </div>
                        <h3><a href="document_info?document_id={ documentData[0].document_id }">{ documentData[0].document_name }</a></h3>
                        {#if documentData[0].complete_flag}
                            <img id="complete" src={ complete_path } width="100"  alt="work1">
                        {/if}
                        <p>{ documentData[0].document_explain }</p>
                    </article>
                </div>
            </a>
            {/if}
            {#if documentData[1]}
            <a href="document_info?document_id={ documentData[1].document_id }">
                <div class="document">
                    <article>
                        <div class="document-image">
                            <img class="doc_image" src={ documentData[1].document_path } width="313" height="269" alt="work2">
                        </div>
                        <div class="added_date">
                            <time>{ documentData[1].added_year }年{ documentData[1].added_month }月{ documentData[1].added_day }日</time>
                        </div>
                        <h3><a href="document_info?document_id={ documentData[1].document_id }">{ documentData[1].document_name }</a></h3>
                        {#if documentData[1].complete_flag}
                            <img id="complete" src={ complete_path } width="100"  alt="work1">
                        {/if}
                        <p>{ documentData[1].document_explain }</p>
                    </article>
                </div>
            </a>
            {/if}
            {#if documentData[2]}
            <a href="document_info?document_id={ documentData[2].document_id }">
                <div class="document">
                    <article>
                        <div class="document-image">
                            <img class="doc_image" src={ documentData[2].document_path } width="313" height="269" alt="work3">
                        </div>
                        <div class="added_date">
                            <time>{ documentData[2].added_year }年{ documentData[2].added_month }月{ documentData[2].added_day }日</time>
                        </div>
                        <h3><a href="document_info?document_id={ documentData[2].document_id }">{ documentData[2].document_name }</a></h3>
                        {#if documentData[2].complete_flag}
                            <img id="complete" src={ complete_path } width="100"  alt="work1">
                        {/if}
                        <p>{ documentData[2].document_explain }</p>
                    </article>
                </div>
            </a>
            {/if}
            {#if documentData[3]}
            <a href="document_info?document_id={ documentData[3].document_id }">
                <div class="document">
                    <article>
                        <div class="document-image">
                            <img class="doc_image" src={ documentData[3].document_path } width="313" height="269" alt="work4">
                        </div>
                        <div class="added_date">
                            <time>{ documentData[3].added_year }年{ documentData[3].added_month }月{ documentData[3].added_day }日</time>
                        </div>
                        <h3><a href="document_info?document_id={ documentData[3].document_id }">{ documentData[3].document_name }</a></h3>
                        {#if documentData[3].complete_flag}
                            <img id="complete" src={ complete_path } width="100"  alt="work1">
                        {/if}
                        <p>{ documentData[3].document_explain }</p>
                    </article>
                </div>
            </a>
            {/if}
            {#if documentData[4]}
            <a href="document_info?document_id={ documentData[4].document_id }">
                <div class="document">
                    <article>
                        <div class="document-image">
                            <img class="doc_image" src={ documentData[4].document_path } width="313" height="269" alt="work5">
                        </div>
                        <div class="added_date">
                            <time>{ documentData[4].added_year }年{ documentData[4].added_month }月{ documentData[4].added_day }日</time>
                        </div>
                        <h3><a href="document_info?document_id={ documentData[4].document_id }">{ documentData[4].document_name }</a></h3>
                        {#if documentData[4].complete_flag}
                            <img id="complete" src={ complete_path } width="100"  alt="work1">
                        {/if}
                        <p>{ documentData[4].document_explain }</p>
                    </article>
                </div>
            </a>
            {/if}
        </section>
    </div>
    <div id="paging">
        <ul class="example">
            {#if prev_page == 0}
            <li class="non">前へ</li>
            {:else}
            <li><a href="?page={ Number(page_num) - 1 }">前へ</a></li>
            {/if}
            <!--1ページ目のページネーションの条件分岐(コード汚いから誰か直して)-->
            {#if page_num == 1 && document_start_id > 10}
            <li class="this">1</li>
            <li><a href="?page=2">2</a></li>
            <li><a href="?page=3">3</a></li>
            {:else if page_num == 1 && document_start_id > 5}
            <li class="this">1</li>
            <li><a href="?page=2">2</a></li>
            {:else if page_num == 1 && document_start_id <= 5}
            <li class="this">1</li>
            <!--2ページ目以降-->
            {:else if document_start_id / (Number(page_num) * 5) >= 1}
            <li><a href="?page={ prev_page }">{ prev_page }</a></li>
            <li class="this">{ page_num }</li>
            <li><a href="?page={ next_page }">{ next_page }</a></li>
            {:else}
            <li><a href="?page={ prev_page }">{ prev_page }</a></li>
            <li class="this">{ page_num }</li>
            {/if}
            <!--次へのボタンを表示するかの条件分岐-->
            {#if document_start_id / (Number(page_num) * 5) >= 1}
            <li><a href="?page={ next_page }">次へ</a></li>
            {:else}
            <li class="non">次へ</li>
            {/if}
        </ul>
    </div>
</main>

<style>
/* widthが950pxより大きい際に適用 */
@media only screen and (min-width: 950px) {
    section#work h2 {
        color:rgba(255, 254, 254, 0.966);
        background-color: rgba(8, 8, 8, 0.521);
    }
    div#document_list {
        max-width: 960px;
        margin: 0 auto;
        color: rgb(3, 3, 3);
    }
    div.document {
        display:flex;
        margin: 30px 0 30px;
        padding: 10px;
        background-color: rgba(8, 8, 8, 0.048);
    }
    div#document_list section#work article {
        width: 100%;
    }

    div#document_list .document-image {
        width: 305px;
        height: 215px;
        float: left;
        margin-right: 20px;
        cursor: pointer;
        object-fit: cover;
        object-position: right top;
    }
    div#document_list section#work article img {
        width: auto;
        margin: auto;
        max-height: 215px;
    }
    div#document_list section#work article h3 {
        border-left: 5px solid #000;
        /* margin-top: 10px; */
        margin-bottom: 10px;
        padding-left: 10px;
        text-align: left;
        float: left;
        font-size: 1.3em;
    }
    div#document_list section#work img#complete {
        float: right;
        width: 15%;
    }

    div#document_list section#work article a {
        color: black;
        text-decoration: none;
    }

    div#document_list section#work article a:hover {
        text-decoration: none;
        color:#0aa284;
    }
    div#document_list section#work article p{
        text-decoration: none;
        color: black;
        line-height: 3.0em;
        border: 1px solid #CCC;
        float: left;
        width: 60%;
    }

    div#document_list section#work article .added_date {
        display: block;
        width: 600px;
    }

    #document_list .document {
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
    }

    div#document_list .document .added_date {
        float: left;
        color: rgba(0,0,0,0.6);
        font-size: 14px;
    }
    .example {
        list-style: none;
        display: flex;
        align-items:center;
        justify-content:center;
    }

    .example li {
        display: inline-block;
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
        border: 1px #ccc solid;
        color:#000053;
        border-radius: 5px / 5px;
        margin: 2px;
    }

    .example li a{
        display: block;
        text-decoration: none;
    }

    .example li a:hover {
        color: #fff;
        text-decoration: none;
        background-color: #003396;
    }

    .example .non {
        background-color: #ccc;
        color:#333;
    }

    .example .this {
        background-color: #777;
        color: #fff;
    }
}

@media only screen and (max-width: 949px) {
    section#work h2 {
        font-size: 1.2em;
        color: rgba(255, 254, 254, 0.966);
        background-color: rgba(8, 8, 8, 0.521);
        padding: 0.5em;
    }
    
    div#document_list {
        margin: 0 auto;
        padding: 0 10px;
    }

    div.document {
        display: block;
        margin: 15px 0;
        padding: 10px;
        background-color: rgba(8, 8, 8, 0.048);
    }

    div#document_list .document-image {
        width: 100%;
        height: auto;
        margin: 0 auto;
        object-fit: cover;
    }

    div#document_list section#work article img {
        width: 100%;
        height: 200px;
        width: auto;
        margin: 0 auto;
    }

    div#document_list section#work article h3 {
        font-size: 1.1em;
        padding-left: 5px;
        margin: 10px 0;
        text-align: center;
    }

    div#document_list section#work img#complete {
        display: block;
        margin: 10px auto;
        width: 80px;
    }

    div#document_list section#work article p {
        font-size: 0.9em;
        line-height: 1.5em;
        width: 100%;
        margin: 10px 0;
    }

    div#document_list section#work article .added_date {
        display: block;
        text-align: center;
        font-size: 0.85em;
        color: rgba(0, 0, 0, 0.6);
    }

    .example {
        padding: 0;
        justify-content: center;
    }

    .example li {
        height: 30px;
        width: 30px;
        font-size: 10px;
        line-height: 30px;
        margin: 2px;
    }

    .example li a {
        font-size: 0.85em;
    }


    .example {
        list-style: none;
        display: flex;
        align-items:center;
        justify-content:center;
    }

    .example li {
        display: inline-block;
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
        border: 1px #ccc solid;
        color:#000053;
        border-radius: 5px / 5px;
        margin: 2px;
    }

    .example li a{
        display: block;
        text-decoration: none;
    }

    .example li a:hover {
        color: #fff;
        text-decoration: none;
        background-color: #003396;
    }

    .example .non {
        background-color: #ccc;
        color:#333;
    }

    .example .this {
        background-color: #777;
        color: #fff;
    }
    
}
</style>