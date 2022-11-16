import './Nav.css'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="ui pointing huge menu">
                <div class="header item">
                    Reczee TalentHub
                </div>
                
                <Link to='/' className='item'>Home</Link>
                <Link to='/robinhood-apply' className='item'>RobinHood</Link>
                <div className="right menu">
                    <Link to="/" className="item">Schedule Interview</Link>
                    <Link to="/" className="item">Find Jobs</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;