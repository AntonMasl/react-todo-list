import React from 'react';

import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="header__title">Мои дела</h1>
            <div className="header__number-task">Всего: <span>{props.state.data.length}</span></div>
        </header>
    )
}

export default Header;