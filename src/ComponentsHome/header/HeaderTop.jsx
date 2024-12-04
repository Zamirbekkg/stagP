import React from 'react';
import exat from './Header.svg/Exat.svg';

const HeaderTop = () => {
    return (
        <div>
            <div className='headerTop'>
                <p className='headerTop-P'>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00</p>
                <div className='headerTopBtn'>
                    <img className='exat' src={exat} alt="Логотип" />
                    <button className='Login2' >Войти</button>
                    <span className='span'>/</span>
                    <button className='Login2' >Регистрация</button>
                </div>

            </div>
        </div>
    );
}

export default HeaderTop;
