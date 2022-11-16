import './Description.css'

const Description = () => {
    return (
        <>
            <div class="ui divider"></div>
            <div className="description">
                <div className='description-row1'>
                    <h2 className='aboutCompany'>About Company</h2>
                    <p>Reczee is building the next generation of recruitment products that would streamline the experience across all the stakeholders - recruiters, hiring managers, agencies, panels, candidates, etc.</p>
                </div>
                <div className='description-row2'>
                    <h2 className='requirementsCompany'>Who we are looking for?</h2>
                    <div class="ui bulleted list">
                        <div class="item">Have good aptitude and attention for detail.</div>
                        <div class="item">Has good knowledge of Javascript, React, NodeJs, CSS</div>
                        <div class="item">Knowledge of Ruby/Rails is an advantage</div>
                        <div class="item">Knowledge of how SEO works with HTML tags is an advantage</div>
                        <div class="item">Can make progress every day to the project assigned</div>
                    </div>
                </div>
                <div className='description-row3'>
                    <h2 className='incentivesCompany'>What will you get?</h2>
                    <div class="ui bulleted list">
                        <div class="item">Work in a really fast paced environment</div>
                        <div class="item">Work closely with the founder to learn how to deliver real world projects</div>
                        <div class="item">Internship certificate on successful completion</div>
                        <div class="item">Unmatched level of learning throughout the internship</div>
                        <div class="item">Stipend - ₹5k-20k on project completion (based on the complexity of the project)</div>
                    </div>
                </div>
                <div className='description-row4'>
                    <h2 className='processCompany'>Interview process</h2>
                    <div class="ui bulleted list">
                        <div class="item">Passed the required skill assessments on Reczee TalentHub</div>
                        <div class="item">One optional assignment</div>
                        <div class="item">One 30 minute interview</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;