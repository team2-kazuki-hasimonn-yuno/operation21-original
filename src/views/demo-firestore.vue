<template>
  <div class="app">
    <button v-on:click="createDatabase">データベース作成</button>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase.js"

export default {
  data() {
    return {
      uid: "",
      mail: "",
      user: [],
    }
  },
  methods: {
    createDatabase() {
      setDoc(doc(db, "users", this.uid), {
        mail: this.mail,
      })
    },
  },
  created: function () {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        this.uid = user.uid
        this.mail = user.email
        console.log(this.uid)
        console.log(this.mail)
      } else {
        console.log("ユーザーがログインしていません")
      }
    })
  },
}
</script>
