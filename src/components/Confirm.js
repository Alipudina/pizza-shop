import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {hasRedirected: false};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({hasRedirected: true});
    }, 5000)
  }

  componentWillUmount() {
    this.setState({hasRedirected: false});
  }

  render() {
    return (
      <div className="confirm">
        <h1 className="confirm__thank">Thank you for choosing us!</h1>
        <h2 className="confirm__submit">Your order has been submitted you will be redirected back home in 5 secs.</h2>
        {this.state.hasRedirected && <Redirect to="/" />}
      </div>
    )
  }
}
