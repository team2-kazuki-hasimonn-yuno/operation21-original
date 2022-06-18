<template>
  <body>
    <div class="container">
      <header>
        <div class="row">
          <h1>新規登録</h1>
        </div>
      </header>
    </div>

    <hr />

    <div class="container">
      <form action="＃" method="get" class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="form-group">
            <label for="name"
              ><span class="label label-danger">必須</span> お名前</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="例："
              autofocus
              required
            />
          </div>
          <div class="form-group">
            <label for="email"
              ><span class="label label-danger">必須</span>
              メールアドレス</label
            >
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="例："
            />
          </div>
          <div class="form-group">
            <label for="tel"
              ><span class="label label-danger">必須</span> パスワード</label
            >
            <input
              v-model="password"
              type="text"
              class="form-control"
              placeholder="例："
            />
          </div>
          <button type="submit" v-on:click="Login">新規登録</button>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

export default {
  data() {
    return {
      email: "",
      password: "",
      user: [],
    }
  },
  methods: {
    async Login() {
      console.log("lll")
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
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
  },
}
</script>

<style scoped>
@charset "utf-8";

header {
  margin-top: 30px;
  color: #43a047;
}
hr {
  border-width: 3px;
  border-color: #43a047;
}
h1 {
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  text-align: center;
}
.align-light {
  text-align: right;
}
.form-group {
  margin-bottom: 35px;
}
input:required {
  background: #ffcdd2;
}
input:focus {
  background: #dcedc8;
}
.label {
  color: red;
}
</style>
