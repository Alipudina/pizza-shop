import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Wellcome from './Wellcome';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <>
        <Wellcome />
        <Footer />
      </>
    )
  }
}
