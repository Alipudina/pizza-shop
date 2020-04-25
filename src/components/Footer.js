import React, { Component } from 'react';
import { ReactComponent as LinkedInIcon } from '../img/SVG/linkedin.svg';
import { ReactComponent as GithubIcon } from '../img/SVG/github.svg';
import { ReactComponent as XingIcon} from '../img/SVG/xing.svg';


export default class Footer extends Component {

  render() {
    return(
      <div className="footer">
        <div className="footer__logo-container">
          <p className="footer__text-large">Pizza</p>
          <p className="footer__text-small">Shop</p>
        </div>

        <div className="footer__icons-container">
          <a href="https://www.linkedin.com/in/ali-mohammad-pudina-8394a7159/" className="email"><LinkedInIcon className="socialIcons" /></a>
          <a href="alipudina" className="email"><XingIcon className="socialIcons" /></a>
          <a href="https://github.com/Alipudina" className="email"><GithubIcon className="socialIcons" /></a>
        </div>
        <p className="footer__copyright">
        Built by <span className="footer__link">Ali Pudina</span>.
        Copyright &copy; by Ali Pudina. You are 100% allowed to use
        this webpage for both personal and comercial use, but NOT to claim
        it as your own design. A credit to the original author, Ali Pudina,
        is ofcourse highly appreciated!
        </p>
      </div>
    );
  }
}
