import './Outline.css'

const Outline = () => {
    return (
        <>
            <div class="ui divider"></div>
            <div className="outline">
                <div className='outline-clm1'>
                    <p className='roleType'><i class="fa-solid fa-suitcase"></i> Internship</p>
                    <p className='roleLocation'><i class="fa-solid fa-location-dot"></i> Remote</p>
                </div>
                <div className='outline-clm2'>
                    <p className='roleCompensation'><i class="fa-sharp fa-solid fa-credit-card"></i> ₹5K - 20K/m</p>
                    <p className='roleDuration'><i class="fa-solid fa-buildings"></i> 0-1 yrs</p>
                </div>
                <div class="ui vertical divider">AND</div>
                <div className='outline-clm3'>
                    <h2 className='requirementsHeader'>Requirements</h2>
                    <div class="ui bulleted list">
                        <div class="item">Experience: 0 - 1 yrs</div>
                        <div class="item">Node.js</div>
                        <div class="item">React.js</div>
                        <div class="item">JavaScript</div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Outline;