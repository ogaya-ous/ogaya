<script lang='ts'>
    // import { auth } from "$lib/auth";

    export let form;
    export let isOpen;
    export let title;
    export let agree;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <h2>{ title }</h2>
                <div class="google-login-button" data-onsuccess="onSignIn">
                    <button type="button" on:click={ async () => {
                        //auth.signInWith('google');
                    }}>
                        <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z" fill="#EA4335"></path></svg>
                        Googleでログイン
                    </button>
                </div>
                <br>
            <label>
                <input type="checkbox" bind:checked={ agree } class="checkbox" />
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

    .google-login-button {
        display: flex;
        justify-content: center;
    }

    .google-login-button button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        padding: 8px 16px;
        background: white;
        color: black;
        font-size: 16px;
        cursor: pointer;
    }

</style>