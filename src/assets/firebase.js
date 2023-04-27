// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

// 파이어베이스 DB를 초기화
const oFirebase = firebase.initializeApp({
  // 파이어베이스 콘솔에서 복사하여 붙여넣기
  apiKey: "AIzaSyAhw-Y9T34effeScvO9BkuHZ3A3lJqj_yA",
  authDomain: "jhingg-711a3.firebaseapp.com",
  databaseURL: "https://jhingg-711a3-default-rtdb.firebaseio.com",
  storageBucket: "jhingg-711a3.appspot.com",
});

const oDB = oFirebase.database();

export const oBoardDB = oDB.ref('boardlist');

export const oStorage = oFirebase.storage();

export const oFirebaseAuth = oFirebase.auth()