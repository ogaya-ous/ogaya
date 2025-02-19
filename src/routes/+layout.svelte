<script>
  import "../app.css";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Modal from "./Modal.svelte";
  import { closeModal, Modals } from "svelte-modals";
</script>

<Header></Header>
<Modals>
  <div slot="backdrop" class="backdrop" on:click={closeModal}></div>
</Modals>
<main>
  <slot></slot>
</main>
<Footer></Footer>

<!--
<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
-->
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
</style>
