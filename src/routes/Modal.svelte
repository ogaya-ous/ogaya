<script>
    export let form;
    export let isOpen;
    export let title;
    export let agree;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <h2>{title}</h2>
            {#if form?.success}
                <p>入力されたメールアドレスにログインURLを送信しました。</p>
            {:else}
                <form method="post">
                    <div class="email-form">
                        {#if form?.error === 'missing'}
                            <div class="form-missing">
                                <input
                                    class="email-input"
                                    type="email"
                                    name="email"
                                    placeholder="メールアドレスを入力してください"
                                    id="email"
                                />
                            </div>
                        {:else}
                            <input
                                class="email-input"
                                type="email"
                                name="email"
                                placeholder="メールアドレスを入力してください"
                                id="email"
                            />
                        {/if}
                        <button class="submit-button" type="submit">ログイン</button>
                    </div>
                </form>
            {/if}
            <label>
                <input type="checkbox" bind:checked={agree} class="checkbox" />
                <a href="利用規約のURL">利用規約</a>および<a href="プライバシーポリシーのURL">プライバシーポリシー</a>に同意します
            </label>
        </div>
    </div>

{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        box-shadow: 0 2px 4px gray;
        align-items: center;
        pointer-events: none;
        z-index: 5;
    }

    .contents {
        min-width: 240px;
        border-radius: 6px;
        padding: 16px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: auto;
    }

    h2 {
        text-align: center;
        font-size: 24px;
    }

    .email-form {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
    }

    .email-input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 10px;
        font-size: 16px;
    }

    .submit-button {
        background-color: #007bff;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        margin-bottom: 25px;
    }

    .submit-button:hover {
        background-color: #0056b3;
    }

    .form-missing {
        position: absolute;
        pointer-events: none;
        padding: 10px;
        font-size: 16px;
        color: rgba(255, 0, 0, 0.5); /* 薄い赤色 */
        transition: opacity 0.3s ease;
        opacity: 0.5;
    }

</style>