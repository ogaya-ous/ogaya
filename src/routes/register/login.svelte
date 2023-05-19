<script>
	let username = '';
	let email_address = '';
  let check1 = false;
  let check2 = false;

	function handleLogin() {
    if (username === "admin" && password === "admin") {
      // ログイン成功
      alert("ログイン成功");
    } else {
      // ログイン失敗
      alert("ログイン失敗");
    }
  }

</script>

<style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }

  .login-form {
    max-width: 320px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 4px;
  }

  .login-form h1 {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  .login-form input[type="text"],
  .login-form input[type="email"] {
    width: 93%;
    height: 40px;
    margin-bottom: 20px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .login-form input[type="submit"] {
    width: 100%;
    height: 40px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

<form class="login-form">
  <h1>会員登録</h1>
  <input type="text" placeholder="ユーザー名" bind:value={username} />
  <input
    type="email"
    placeholder="メールアドレス"
    bind:value={email_address}
  />
  <input type="checkbox" id="terms" bind:checked={check1}>利用規約に同意する<br>
  <input type="checkbox" id="privacy" bind:checked={check2}>プライバシーポリシーに同意する<br>
  <br>
  <input type="submit" value="登録する" on:click={handleLogin} disabled={!check1&!check2} />
</form>
