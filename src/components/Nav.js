import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className="ui pointing huge menu">
                <div class="header item">
                    Reczee TalentHub
                </div>
                <a href="#" className="active item">Home</a>
                <div className="right menu">
                    <a href="#" className="item">Schedule Interview</a>
                    <a href="#" className="item">Find Jobs</a>
                </div>
            </div>
        </>
    )
}

export default Nav;