// 必要な関数を import
// eslint-disable-next-line prettier/prettier
import { initializeApp } from "firebase/app"
// eslint-disable-next-line prettier/prettier
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8t447kymgSmJ0vYHAxV6MESm-bOvXeyQ",
  authDomain: "operation21-55e62.firebaseapp.com",
  projectId: "operation21-55e62",
  storageBucket: "operation21-55e62.appspot.com",
  messagingSenderId: "426035874669",
  appId: "1:426035874669:web:f5bc7d31678754a89f2864",
  measurementId: "G-3RQ789B0EF",
  // eslint-disable-next-line prettier/prettier
}

// Firebaseアプリオブジェクトを初期化
// eslint-disable-next-line prettier/prettier
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
// eslint-disable-next-line prettier/prettier
export const db = getFirestore(app)
