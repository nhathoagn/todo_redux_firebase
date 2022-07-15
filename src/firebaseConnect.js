
import   firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
const firebaseConfig = {
	apiKey: "AIzaSyB1UNswfJR3u1rm1shd9KSnO9c7SMTIn2g",
	authDomain: "reacttodo-7f2e5.firebaseapp.com",
	projectId: "reacttodo-7f2e5",
	databaseURL: "https://reacttodo-7f2e5-default-rtdb.firebaseio.com",
	storageBucket: "reacttodo-7f2e5.appspot.com",
	messagingSenderId: "617888742584",
	appId: "1:617888742584:web:f650136a646256a4ad084d",
	measurementId: "G-8VKY2EL90R"
};
export const firebaseConnect = firebase.initializeApp(firebaseConfig);

const data = firebase.database().ref('dataForNote/node2');
//get data
// data.once('value').then(function (snapshot) {
// 	console.log(snapshot.val())
// })
//edit data
// data.set({
// 	id: 2,
// 	noteContent: "di lam",
// 	title: "Ngay 12/03"
// })
