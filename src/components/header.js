import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';




const { Link } = Anchor;
const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
      <div className="header">
        <div className="header__logo">
          <a href="http://google.com">havoc.</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65" >
            <Link  href="#hero" title="Home" />
            <Link  href="#about" title="About" />
            <Link  href="#feature" title="Features" />
            <Link  href="#works" title="How it works" />
            <Link  href="#pricing" title="Pricing" />
            <Link  href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
  );
}

export default Header
