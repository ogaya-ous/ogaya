<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
	import { onMount } from 'svelte';
	import { closeModal, Modals, modals, openModal } from 'svelte-modals';
	import Modal from './Modal.svelte';

	// header ハンバーガーメニューの制御
	let root;
	let nav_click;
	let hamburger = false;

	onMount(() => {
		let btn = root.querySelector(".toggle-btn");
		let nav_click = root.querySelector("nav_click");

		btn.onclick = () => {
			hamburger = !hamburger;
		};

		nav_click.onclick = () => {
			hamburger = false;
		}
	});
	function handleOpen() {
		openModal(Modal, {
			title: `Alert #${$modals.length + 1}`,
			message: "This is an alert",
			onOpenAnother: () => {
				handleOpen()
			}
		})
	}
</script>

<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
  />
</Modals>

<header>
	<div bind:this={ root }>
		<!-- スマホヘッダー -->
		<div class="sp_nav">
			<div id="navigation" class:hamburger = { hamburger }>
				<div class="logo">
					<a href="/"><img src={ logo } alt=""></a>
				</div>
				<div class="menu_list">
					<nav>
						<div class="inner">
							<img src={ logo } alt="">
							<ul>
								<li class:nav_click={ nav_click }><a href="/">Home</a></li>
								<li class:nav_click={ nav_click }><a href="/news">News</a></li>
								<li class:nav_click={ nav_click }><a href="/document?page=1">Document</a></li>
								<li class:nav_click={ nav_click }><a href="#">History</a></li>
								<li class:nav_click={ nav_click }><a href="#">Contact</a></li>
								<li class:nav_click={ nav_click }><a href="/login">Login</a></li>
							</ul>
						</div>
					</nav>
				</div>
				<div class="toggle-btn">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div id="mask"></div>
			</div>
		</div>
		<!-- PCヘッダー -->
		<div class="pc_nav">
			<div id="navigation">
				<div class="logo">
					<a href="/"><img src={ logo } alt=""></a>
				</div>
				<div class="menu_list">
					<nav>
						<div class="inner">
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/news">News</a></li>
								<li><a href="/document?page=1">Document</a></li>
								<li><a href="#">History</a></li>
								<li><a href="#">Contact</a></li>
								{#if Object.keys($page.data.session || {}).length}
									{#if $page.data.session.user.image}
										<li><span style="background-image: url('{$page.data.session.user.image}')" class="avatar" /></li>
									{/if}
								{:else}
									<li class="login_btn"><a href="javascript:void(0)" on:click={ handleOpen }>Login</a></li>
								{/if}
								<!-- <li class="login_btn"><button on:click={ handleOpen }>Login</button></li> -->
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	/* レスポンシブ化 (記述: モバイルファースト) */
	/* iPhone 縦 */
	.pc_nav {
		display: none;
	}

	.sp_nav #navigation {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Noto Sans JP', sans-serif;
		background-color: rgba(121, 121, 121, 0.082);
	}

	.sp_nav .logo img {
		margin-left: 10px;
		width: auto;
		height: 50px;
	}

	.sp_nav nav {
		width: 100vw;
		display: block;
		position: fixed;
		background-color: #ffffff;
		top: 0;
		left: -500px;
		bottom: 0;
		transition: all 0.5s;
		z-index: 3;
		opacity: 0;
	}

	.sp_nav .hamburger nav {
		left: 0;
		opacity: 1;
	}

	.sp_nav nav .inner {
		padding: 25% 50px;
	}

	.sp_nav nav .inner ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.sp_nav nav .inner ul li {
		margin: 0;
		/* border-bottom: 1px solid #333; */
	}

	.sp_nav nav .inner ul li a {
		display: block;
		text-decoration: none;
		color: #333;
		font-size: 14px;
		padding: 1rem;
		transition-duration: 0.2s;
	}

	.sp_nav .toggle-btn {
		display: block;
		position: fixed;
		top: 15px;
		right: 30px;
		width: 30px;
		height: 30px;
		z-index: 3;
		cursor: pointer;
	}

	.sp_nav .toggle-btn span {
		position: absolute;
		display: block;
		left: 0;
		width: 30px;
		height: 2px;
		background-color: #333;
		transition: all 0.5s;
		border-radius: 4px;
	}

	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0,0,0,0.50)
	}

	.sp_nav .toggle-btn span:nth-child(1) {
		top: 4px;
	}

	.sp_nav .toggle-btn span:nth-child(2) {
		top: 14px;
	}

	.sp_nav .toggle-btn span:nth-child(3) {
		bottom: 4px;
	}

	.sp_nav .hamburger .toggle-btn span {
		background-color: #333;
	}

	.sp_nav .hamburger .toggle-btn span:nth-child(1) {
		transform: translateY(10px) rotate(-315deg);
	}

	.sp_nav .hamburger .toggle-btn span:nth-child(2) {
		opacity: 0;
	}

	.sp_nav .hamburger .toggle-btn span:nth-child(3) {
		transform: translateY(-10px) rotate(315deg);
	}

	.sp_nav #mask {
		display: none;
		transition: all 0.5s;
	}

	.sp_nav .hamburger #mask {
		display: block;
		background-color: #000;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: fixed;
		opacity: 0.8;
	}

	@media screen and (min-width:480px) { 
		/*　for iPhone Landscape　(iPhone 横)　*/
		.sp_nav nav .inner {
			padding: 10px 50px;
		}

		.sp_nav .hamburger nav {
			overflow: scroll;
		}
	}

	@media screen and (min-width:768px) and ( max-width:1024px) {
		/*　for iPad 　*/
		.sp_nav nav {
		left: -1000px;
	}

	}

	@media screen and (min-width:1024px) {
		.sp_nav {
			display: none;
		}

		.pc_nav {
			display: block;
		}

		.pc_nav #navigation {
			display: flex;
			justify-content: space-between;
			font-family: 'Noto Sans JP', sans-serif;
			background-color: rgba(121, 121, 121, 0.082);
		}

		.pc_nav nav {
			top: 0;
			left: 0;
			width: 100%;
			height: 70px;
			margin: 0 auto;
			padding-top: 5px;
			display: block;
			align-items: center;
			box-sizing: border-box;
			justify-content: right;
		}

		.pc_nav ul {
			display: flex;
			margin: 10px 0 0 auto;
			float: right;
		}

		.pc_nav li {
			list-style: none;
		}

		.pc_nav a {
			padding: 10px 0px;
			display: block;
			text-decoration: none;
			color: black;
			margin-right: 35px;
		}

		.pc_nav a:hover {
			color: #0aa284;
		}

		.pc_nav li.login_btn a {
			color: white;
			padding: 10px 30px;
			border-radius: 10px;
			background-color: #0F4C3A;
		}

		.pc_nav li.login_btn a:hover {
			text-decoration: none;
			background-color: #197157;
		}

		.pc_nav .logo {
			margin-left: 35px;
		}

		.pc_nav .logo img {
			width: auto;
			height: 50px;
		}
		.avatar {
			border-radius: 2rem;
			float: left;
			height: 2.8rem;
			width: 2.8rem;
			background-color: white;
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
</style>
