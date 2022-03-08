import { Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Study from './components/Study';
import AddCount from './components/AddCount';
import Login from './components/Login';
import Register from './components/Register';
import Comment from './components/Comment';
import Parent from './components/transfer/HelloWorld';
import NewList from './components/news';

export default class App extends Component {
  render() {
    return (
      <>
       {/* <Header />
       <hr /> */}
       {/* <Study /> */}
       {/* <AddCount /> */}
       {/* <Login /> */}
       {/* <Register /> */}
       {/* <Comment /> */}
       {/* <Parent /> */}
       <NewList />
       {/* <hr />
       <Footer /> */}
      </>
    )
  }
}