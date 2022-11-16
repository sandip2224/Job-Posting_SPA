import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className='header-detail'>
                    <h2 className='roleName'>Full stack Engineering Intern</h2>
                    <p className='companyName'>Reczee</p>
                </div>
                <div className='header-apply'>
                    <button className='ui primary button'>Apply</button>
                </div>
            </div>
        </>
    );
}

export default Header;