import './Outline.css'

const Outline = () => {
    return (
        <>
            <div class="ui divider"></div>
            <div className="outline">
                <div className='outline-clm1'>
                    <p className='roleType'><i class="fa-solid fa-suitcase"></i>&nbsp;&nbsp;&nbsp;Internship</p>
                    <p className='roleLocation'><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;&nbsp;Remote</p>
                </div>
                <div className='outline-clm2'>
                    <p className='roleCompensation'><i class="fa-sharp fa-solid fa-credit-card"></i>&nbsp;&nbsp;&nbsp;&nbsp;₹5K - 20K/m</p>
                    <p className='roleDuration'><i class="fa-solid fa-building-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;0-1 yrs</p>
                </div>
                <div className='outline-small-parent'>
                    <div className='outline-clm1-small'>
                        <p className='roleType-small'><i class="fa-solid fa-suitcase"></i> Internship</p>
                        <p className='roleLocation-small'><i class="fa-solid fa-location-dot"></i> Remote</p>
                    </div>
                    <div className='outline-clm2-small'>
                        <p className='roleCompensation-small'><i class="fa-sharp fa-solid fa-credit-card"></i> ₹5K - 20K/m</p>
                        <p className='roleDuration-small'><i class="fa-solid fa-building-user"></i> 0-1 yrs</p>
                    </div>
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