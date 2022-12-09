<script>
	let username = '';
	let password = '';

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
  .login-form input[type="password"] {
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
  <h1>ログイン</h1>
  <input type="text" placeholder="ユーザー名" bind:value={username} />
  <input
    type="password"
    placeholder="パスワード"
    bind:value={password}
  />
  <input type="submit" value="ログイン" on:click={handleLogin} />
</form>
