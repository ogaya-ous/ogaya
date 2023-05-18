<script>
    import { signIn } from "@auth/sveltekit/client";
    import { modals } from 'svelte-modals';

    import facebook_icon from '$lib/images/sns_icon/f_logo_RGB-Blue_512.png';
    import google_icon from '$lib/images/sns_icon/logo_google.png';


    export let isOpen
    export let title
    export let agree

    let stackIndex = modals.length
</script>

{#if isOpen}
    <div class="modal-overlay">
        <div role="dialog" class="modal">
            <div class="contents">
                <h2>{title}</h2>
                    <div class="button-container">
                        <button class="sign-in-button" on:click={ () => signIn("Google") }>
                            <img src={google_icon} alt="google_icon" class=google-icon>
                            <b>Googleでログイン</b>
                        </button>
                        <button class="sign-in-button" on:click={ () => signIn("Google") }>
                            <img src={facebook_icon} alt="facebook_icon" class="facebook-icon">
                            <b>FaceBookでログイン</b>
                        </button>
                    </div>
                <label>
                    <input type="checkbox" bind:checked={agree} class="checkbox" />
                    <a href="利用規約のURL">利用規約</a>および<a href="プライバシーポリシーのURL">プライバシーポリシー</a>に同意します
                </label>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 9999;
    }
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

    .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .facebook-icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        vertical-align: middle;
    }

    .google-icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        vertical-align: middle;
    }

    .sign-in-button {
        background-color: white;
        color: black;
        border: none;
        border-radius: 4px;
        margin-bottom: 12px;
        width: 300px;
        height: 50px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s ease;
    }

    .sign-in-button:hover {
    background-color: #3367D6;
    }

</style>