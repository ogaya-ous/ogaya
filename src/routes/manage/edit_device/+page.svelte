<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
  export let device = data.device; // deviceデータも受け取る

  console.log(device);

  async function toggleViewFlag(deviceId: number) {
    const response = await fetch(`?device_id=${deviceId}`, {
      method: "PATCH",
    });

    if (response.ok) {
      console.log("Device view_flag toggled successfully");
      location.reload(); // デバイス情報を再取得するためにページを再読み込み
    } else {
      console.error("Failed to toggle device view_flag");
    }
  }
</script>

<main>
  <div class="manage">
    <h1>スマート大茅IoTの表示</h1>

    <table>
      <tr>
        <th>表示切り替えボタン</th>
      </tr>
      <tr>
        <td>
          {#if !device.view_flag}
            <button
              id="view"
              class="decoding"
              on:click={() => toggleViewFlag(device.device_id)}>表示中</button
            >
          {:else}
            <button
              id="view"
              class="complete"
              on:click={() => toggleViewFlag(device.device_id)}>非表示</button
            >
          {/if}
        </td>
      </tr>
    </table>
  </div>
</main>

<style>
  @media only screen and (min-width: 950px) {
    h1 {
      color: rgb(255, 255, 255);
      background-color: rgba(8, 8, 8, 0.521);
      margin: 10px;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 80%;
      margin-left: 10%;
    }

    table tr {
      border-bottom: solid 1px #eee;
      margin: 100%;
    }

    table th,
    table td {
      text-align: center;
      width: 20%;
      padding: 15px 0;
    }

    table td button#edit {
      text-align: center;
      color: #000000;
      font-size: 130%;
      display: block;
      text-align: center;
      text-decoration: none;
      width: 200px;
      margin: auto;
      padding: 1rem 4rem;
      font-weight: bold;
      background: #fab05b;
      color: #fff;
      border-radius: 100vh;
      border: none;
      transition: 0.5s;
    }

    table td button#edit a {
      color: #ffffff;
      text-decoration: none;
    }

    table td button#delete {
      text-align: center;
      color: #000000;
      font-size: 130%;
      display: block;
      text-align: center;
      text-decoration: none;
      width: 200px;
      margin: auto;
      padding: 1rem 4rem;
      font-weight: bold;
      background: #888888;
      color: #fff;
      border-radius: 100vh;
      border: none;
      transition: 0.5s;
    }

    table td button#view a {
      color: #ffffff;
      text-decoration: none;
    }

    table td .decoding {
      text-align: center;
      color: #000000;
      font-size: 130%;
      display: block;
      text-align: center;
      text-decoration: none;
      width: 200px;
      margin: auto;
      padding: 1rem 4rem;
      font-weight: bold;
      background: #00b42d;
      color: #fff;
      border-radius: 100vh;
      border: none;
      transition: 0.5s;
    }

    table td .complete {
      text-align: center;
      color: #000000;
      font-size: 130%;
      display: block;
      text-align: center;
      text-decoration: none;
      width: 200px;
      margin: auto;
      padding: 1rem 4rem;
      font-weight: bold;
      background: #eaed22;
      color: #fff;
      border-radius: 100vh;
      border: none;
      transition: 0.5s;
    }
  }
  /* スマートフォン用のスタイル */
  @media only screen and (max-width: 950px) {
    h1 {
      font-size: 1.1rem;
      padding: 10px;
      color: rgb(255, 255, 255);
      background-color: rgba(8, 8, 8, 0.7);
      text-align: center;
    }

    table {
      width: 100%;
      margin: 0;
    }

    table td {
      padding: 10px;
      font-size: 0.7rem;
    }

    table th {
      background-color: #9a9a9a;
      color: #ffffff;
      padding: auto;
      font-size: 0.6rem;
    }

    table td {
      padding: 12px 5px;
    }

    table td button#edit,
    table td button#delete,
    table td .decoding,
    table td .complete {
      font-size: 0.7rem;
      width: 100%;
      padding: 0.6rem 1rem;
      margin: 5px 0;
    }

    /* ボタンごとのスタイル */
    table td button#edit {
      background: #fab05b;
    }

    table td button#delete {
      background: #888888;
    }

    table td .decoding {
      background: #00b42d;
    }

    table td .complete {
      background: #eaed22;
    }
  }
</style>
