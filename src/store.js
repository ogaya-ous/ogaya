import { onAuthStateChanged } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "./firebase";

/**
 * @typedef {import("firebase/auth").UserInfo} UserInfo
 */

const authStore = writable(/** @type {{ loggedIn: boolean, user: UserInfo | undefined }} */ ({ loggedIn: false, user: undefined }));

// authStoreを更新する関数
const updateAuthStore = (loggedIn, user) => {
  authStore.update(store => ({ ...store, loggedIn, user }));
};

// Firebaseの認証情報が変更された際に、authStoreを更新する
onAuthStateChanged(auth, user => {
  if (user) {
    updateAuthStore(true, user);
  } else {
    updateAuthStore(false, undefined);
  }
});

export default authStore;