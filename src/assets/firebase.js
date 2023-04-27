// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

// 파이어베이스 DB를 초기화
const oFirebase = firebase.initializeApp({
  // 파이어베이스 콘솔에서 복사하여 붙여넣기
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
});

const oDB = oFirebase.database();

export const oBoardDB = oDB.ref('boardlist');

export const oStorage = oFirebase.storage();

export const oFirebaseAuth = oFirebase.auth()