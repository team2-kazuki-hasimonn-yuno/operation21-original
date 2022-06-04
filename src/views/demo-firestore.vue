<template>
  <div class="app">
    残高
    <div>
      <input v-model="tweetText" type="text" />
    </div>
    コメント
    <div>
      <input v-model="zandaka" type="text" />
    </div>
    <button v-on:click="postTweet">ツイート</button>
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.text }}
        {{ tweet.zandaka }}
      </p>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      tweets: [{}],
      tweetText: "",
      zandaka: "",
    }
  },
  methods: {
    postTweet() {
      addDoc(collection(db, "tweets"), {
        text: this.tweetText,
        zandaka: this.zandaka,
      })
      console.log("postTweetが動いたよ")
    },
  },
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      console.log(this.tweets)
    })
  },
}
</script>
