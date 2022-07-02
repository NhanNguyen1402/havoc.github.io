import React from 'react';

import { BackTop } from 'antd';

function Footer() {
  return (
    <div >
      <div id='footer' className="footer">
          <a className='footer__logo' href="http://google.com">havoc.</a>
          <ul className="footer__socials">
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
          </ul>
          <div className="footer__copyright">Copyright &copy; Nhan Nguyen</div>
          <BackTop>
            <div className="footer--goTop"><i className="fas fa-arrow-circle-up"></i></div>
          </BackTop>
      </div>
    </div>
  );
}

export default Footer;
