import React from 'react';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import '../assets/styles/navigation.scss';

const style = {
    margin: 12,
};

const NavigationComponent = () => {
    return (
        <nav className="navigation">
            <ul>
                <RaisedButton style={style}><NavLink exact to="/" activeClassName="navigation_active">Home</NavLink></RaisedButton>
            </ul>
        </nav>
    )
}

export default NavigationComponent;