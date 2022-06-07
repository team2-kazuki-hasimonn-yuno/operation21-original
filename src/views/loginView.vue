<template>
  <div class="app">
    メアド
    <div>
      <input v-model="email" type="text" />
    </div>
    パスワード
    <div>
      <input v-model="password" type="text" />
    </div>
    <button v-on:click="Login">ログイン</button>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// import { db } from "../firebase.js"

export default {
  data() {
    return {
      email: "",
      password: "",
      user: [],
    }
  },
  methods: {
    Login() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password).then(
        (userCredential) => {
          // Signed in
          console.log("userC" + userCredential)
          this.user = userCredential.user
          // ...
        }
      )
      console.log(this.user)
    },
  },
}
</script>
