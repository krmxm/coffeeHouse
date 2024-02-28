import { Component } from 'react';

import './nav.scss';

import {WhiteLogo} from "../../assets"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        }
    }

    componentDidUpdate(prevProps, prevState) { // wtf
        if (prevState.openMenu !== this.state.openMenu) {
            this.setOverflow();
        }
    }

    onMenu = () => {
        this.setState(state => ({
            openMenu: !state.openMenu
        }))
    }

    setOverflow() {
        document.body.style.overflow = this.state.openMenu ? 'hidden' : '';
    }

    render() {
        const {openMenu} = this.state;
        return(
            <nav className="nav">
                <a href="#somelink" className="nav__logo-link">
                    <img src={WhiteLogo} alt="coffee beans logo" className="nav__logo-img" />
                </a>
    
                <ul className={`nav__items ${openMenu ? 'nav__items_burger-open' : ''}`}>
                    <a href="https://github.com/bogdan-derdz/CoffeeHouse/blob/main/src/components/Nav/Nav.scss" className="nav__item">Coffee house</a>
                    <a href="#work" className="nav__item">Our coffee</a>
                    <a href="#price" className="nav__item">For your pleasure</a>
                </ul>
    
                <div onClick={this.onMenu} className={`nav__burger ${openMenu ? 'nav__burger_active' : ''}`}></div>
            </nav>
        )
    }
    
}

export default Nav;