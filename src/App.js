import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from "./firebaseConnect";
import   firebase from 'firebase/compat/app';
import Nav from './components/Nav/Nav'
import NoteList from '../src/components/NoteList/NoteList'
import NoteForm from '../src/components/NoteForm/NoteForm'

function App() {
  // console.log(firebaseConnect)
  // const pushData = () => {
  //   let connectData = firebase.database().ref('dataForNote')
  //       connectData.push({
  //         title: "Ghi chu so 3",
  //         content: "Noi dung ghi chu so 3"
  //       })
  //   console.log("ban vua them du lieu vao firebase")
  // }
  // const deleteData = (id) => {
  //   let connectData = firebase.database().ref('dataForNote')
  //   connectData.child(id).remove()
  //   console.log("da xoa node")
  // }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <button onClick={ () => pushData()}> Click de</button>
    //   <button onClick={ () => deleteData('-N5GRI6tvHXtDUOVIYSc')}>Click xoa</button>
    // </div>
      <div>

         <Nav/>
          <div className="container">
              <div className="row">
                  <NoteList/>
                  <NoteForm/>
              </div>
          </div>
      </div>
  );
}

export default App;
