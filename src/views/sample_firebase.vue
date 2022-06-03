<template>
  <div class="app">
    <button v-on:click="postTweet">ツイート</button>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "../firebase"

export default {
  methods: {
    postTweet() {
      console.log("発火")
      addDoc(collection(db, "sample"), {
        name: "test",
      })
    },
  },
}
</script>
