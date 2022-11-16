import Header from './Header'
import Description from './Description'
import Outline from './Outline'

import './Body.css'

const Body = () => {
    return (
        <>
            <div className='ui container body'>
                <Header />
                <Outline />
                <Description />
            </div>
        </>

    );
}

export default Body;