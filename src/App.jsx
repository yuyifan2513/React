import { Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Study from './components/Study';

export default class App extends Component {
  render() {
    return (
      <>
       <Header />
       <hr />
       <Study />
       <hr />
       <Footer />
      </>
    )
  }
}