<template>
  <div class="Money"></div>
  <h3>お金管理</h3>
  <input type="number" v-model="nyuryokugaku" />
  <div>入力額:{{ nyuryokugaku }}</div>
  <button @click="syuunyuu">収入</button>
  <button @click="sisyutu" v-bind:disabled="isSyukkinButtonOff">支出</button>
  <h3>貯金額</h3>
  <div>{{ tyokingaku }}円</div>
  <h3>取引記録</h3>
  <div v-for="(log, index) in logs" v-bind:key="index">
    <div>日付:{{ log.date }}</div>
    <div>操作:{{ log.type }}</div>
    <div>金額:{{ log.money }}</div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export default {
  data() {
    return {
      uid: "Ps1Mp6CXYpxHyXp1Kajv",
      nyuryokugaku: "",
      tyokingaku: 0,
      logs: [],
    };
  },
  methods: {
    syuunyuu: function () {
      addDoc(collection(db, "users", this.uid, "income_plan"), {
        date: new Date(),
        type: "収入",
        money: Number(this.nyuryokugaku),
      });
      // addDoc(collection(db, "syuunyuuLogs"), {
      //   date: new Date(),
      //   type: "収入",
      //   money: Number(this.nyuryokugaku),
      // }),
      //   (this.tyokingaku += Number(this.nyuryokugaku));
      // this.logs.push({
      //   date: new Date(),
      //   type: "入金",
      //   money: Number(this.nyuryokugaku),
      // });
      // console.log(new Date());
    },
    sisyutu: function () {
      this.tyokingaku -= Number(this.nyuryokugaku);

      addDoc(collection(db, "users", this.uid, "items_to_buy"), {
        date: new Date(),
        type: "購入",
        price: Number(this.nyuryokugaku),
      });
    },
  },

  computed: {
    isSyukkinButtonOff: function () {
      if (this.nyuryokugaku <= this.tyokingaku) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style>
h3 {
  position: relative;
  padding: 0.2em 0.5em;
  background: -webkit-linear-gradient(to right, rgb(34, 66, 69), #9eded8);
  background: linear-gradient(to right, rgb(34, 66, 69), #9eded8);
  color: white;
  font-weight: lighter;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.56);
}
button {
  background-color: #ebf1f1;
  border-radius: 3px;
  border: 1px solid #426b5f;
  box-shadow: rgba(234, 239, 237, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #4b5f5b;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui, "Segoe UI", "Liberation Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}
button:hover,
button:focus {
  background-color: #b6dacb;
  color: #5c7469;
}

button:focus {
  box-shadow: 0 0 0 4px rgba(0, 255, 64, 0.15);
}

button:active {
  background-color: #a2c5b5;
  box-shadow: none;
  color: #59735c;
}
</style>
