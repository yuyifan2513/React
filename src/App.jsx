import { Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Study from './components/Study';
import AddCount from './components/AddCount';
import Login from './components/Login';
import Register from './components/Register';

export default class App extends Component {
  render() {
    return (
      <>
       <Header />
       <hr />
       {/* <Study /> */}
       {/* <AddCount /> */}
       {/* <Login /> */}
       <Register />
       <hr />
       <Footer />
      </>
    )
  }
}