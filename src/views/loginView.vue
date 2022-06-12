<template>
  新規登録
  <div class="app">
    メアド
    <div>
      <input v-model="email" type="text" />
    </div>
    パスワード
    <div>
      <input v-model="password" type="text" />
    </div>
    <button v-on:click="Login">新規登録</button>
    <button v-on:click="signIn">ログイン</button>
    <button v-on:click="signOut">サインアウト</button>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

export default {
  data() {
    return {
      email: "",
      password: "",
      user: [],
    }
  },
  methods: {
    // 新規登録＆ログイン
    async Login() {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })
    },
    // サインアウトしたアカウントで再度サインインする
    signIn() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password).then(
        (user) => {
          // Signed in
          console.log("userinfo" + user)
          this.user = user
          console.log("thisuser" + this.user)
        }
      )
    },
    // サインアウト
    signOut() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("サインアウト")
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
