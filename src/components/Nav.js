import './Nav.css'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="ui pointing huge menu">
                <div class="header item">
                    Reczee TalentHub
                </div>

                {/* <Link to='/' className='item'>Home</Link>
                <Link to='/robinhood-apply' className='item'>RobinHood</Link> */}
                <a href='/' className='item'>Home</a>
                <a href='/robinhood-apply' className='item'>RobinHood</a>
                <div className="right menu">
                    <a href='/' className='item'>Schedule Interview</a>
                    <a href='/' className='item'>Find Jobs</a>
                    {/* <Link to="/" className="item">Schedule Interview</Link>
                    <Link to="/" className="item">Find Jobs</Link> */}
                </div>
            </div>
        </nav>
    )
}

export default Nav;