import { Link } from 'react-router-dom';



const HeaderBottom = () => {
    return (
        <div className='headerBottom'>
            <div className='logo'>
                <h2 >PORTEN</h2>
            </div>
        <div className='headerBottom-Url'>
          <p className='Home'><Link to={'/'}>Дом</Link></p>
          <p className='Personal'><Link to={'/personal-account'}>Личный кабинет</Link></p>
          <p className='Setting'><Link to={'/settings'}>settings</Link></p>
          <p className='Like'><Link to={'/Like'}>Like</Link></p>
          <p className='Card'><Link to={'/card'}>Card</Link></p>
          <p className='Search'><Link to='/search'>Search</Link></p>
        </div>
        </div>
    );
}

export default HeaderBottom;
