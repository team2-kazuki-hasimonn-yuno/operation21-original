// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8t447kymgSmJ0vYHAxV6MESm-bOvXeyQ",
  authDomain: "operation21-55e62.firebaseapp.com",
  projectId: "operation21-55e62",
  storageBucket: "operation21-55e62.appspot.com",
  messagingSenderId: "426035874669",
  appId: "1:426035874669:web:f5bc7d31678754a89f2864",
  measurementId: "G-3RQ789B0EF",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
