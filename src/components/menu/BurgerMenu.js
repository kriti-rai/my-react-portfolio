import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reveal as Menu } from 'react-burger-menu';

class BurgerMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange = state => {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  render () {
    return (
      <div className='burger-menu'>
        <Menu
          right pageWrapId={ "page-wrap" }
          outerContainerId={ "outer-container" }
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          >
            <Link to ='/kritirai'><span className="menu-item" onClick={() => this.closeMenu()}>Home</span></Link>
            <Link to ='/bio'><span className="menu-item" onClick={() => this.closeMenu()}>Bio</span></Link>
            <Link to ='/portfolio'><span className="menu-item" onClick={() => this.closeMenu()}>Portfolio</span></Link>
            <Link to ='/life'><span className="menu-item" onClick={() => this.closeMenu()}>Life</span></Link>
            <a href="mailto:kriti.rai@gmail.com" className="menu-item" onClick={() => this.closeMenu()}>Contact</a>
            <div className='copyright'>&copy; Kriti Rai 2020</div>
        </Menu>
      </div>
    )
  };
};

export default BurgerMenu;
