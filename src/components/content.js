import React from 'react';
import { Link } from 'react-router-dom';


function Content() {
  return (
    <div>
      <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className="container">
          <div className="row row-pb-md">
            <div className="col-md-8 col-md-offset-2 text-left animate-box" data-animate-effect="fadeInUp">
              <div className="fh5co-heading">
                <span>--- Information regarding Scholarship detail ---</span>
                <h2><strong>What We Do</strong></h2>
                <p>we provide the Scholarship details of certain government sites.</p>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 ">
              <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                <span className="icon">
                  <i className="icon-eye"></i>
                </span>
                  <h3>Dr. Punjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna</h3>
                  <p>Regarding Scheme : www.mahadbt.gov.in One of the Scheme of Maha DBT is Dr. Punjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna for Higher & Technical Education department are given here. Other important details like Eligibility, Required Document List etc., given briefly below on this page. Candidates go through the details given below:.</p>
                  <p><a href="3.html">Learn more</a></p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                <span className="icon">
                  <i className="icon-command"></i>
                </span>
                  <h3>EBC</h3>
                  <h3></h3>
                  <p>The term EBC is adopted in Dr. Ambedkar Post-Matric Scholarship for the Economically Backward className Students (Centrally Sponsored Scheme) which is effective from 2014-15. Under this scholarships are given to Indian nationals belonging to General Category whose total income from all sources of the employed candidate or his/her parents/guardians.</p>
                  <p><a href="2.html">Learn more</a></p>
              </div>
            </div>
            <div className="clearfix visible-sm-block"></div>
            <div className="col-md-4 col-sm-6 ">
              <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                  <span className="icon">
                    <i className="icon-power"></i>
                  </span>
                  <h3>Ahindi Bhashik Scholarship</h3>
                  <p>Overview : : Hindi Scholarship to Students From Non-Hindi Speaking States For Post Matric Studies With Hindi Subject. Indian government has started this scholarship since year 1984-85 for the Ahindi State’s student after 10th Selection of Candidates is on Merit basis
                  Eligibility : The applicant must be a resident of the Maharashtra State
                  * Need to get at least 60 percent in 10th /12th standard and 65 percent marks in Hindi Subject
                  </p>
                  <p>
                    <a href="1.html">Learn more</a>
                  </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                <span className="icon">
                  <i className="icon-eye"></i>
                </span>
                  <h3>Merit-cum-Means Scholarship</h3>
                  <p>The Merit-cum-Means scholarship is the front-running scholarship scheme of the Ministry of Minority Affairs. The scholarship provides financial assistance to the meritorious minority students so as to encourage them to pursue technical or professional education.</p>
                  <p><a href="4.html">Learn more</a></p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                <span className="icon">
                  <i className="icon-command"></i>
                </span>
                  <h3>Babasaheb Ambedkar Swadhar Yojna</h3>
                  <p>Bharatratna Dr. Babasaheb Ambedkar Swadhar Yojna is for candidates from Schedule casts & Navbowdh category having more than 60% marks in 10th/12th/ Degree/ Diploma. For personally disable applicants from Schedule casts & Navbowdh category require atleast 50% marks. Such applicants will get pay for their after metric education.</p>
                  <p><a href="5.html">Learn more</a></p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                <span className="icon">
                  <i className="icon-power"></i>
                </span>
                  <h3>SCHOLARSHIP FOR SC & ST CATEGORY</h3>
                  <p>FOR SCHOLARSHIP
                  Eligibility :SC /ST Students Availing Scholarship:-
                  Annual Income of parents should be below 2 Lakh per annum.
                  VJNT / SBC/ OBC Students Availing Scholarship:-
                  Annual income of parents should be below 1 Lakhs per annum.
                  Website : www. mahadbt.gov.in
                  </p>
                  <p><a href="6.html">Learn more</a></p>
              </div>
            </div>

              <div className="clearfix visible-md-block"></div>
              <div className="clearfix visible-md-block"></div>
              <div className="row copyright">
                <div className="col-md-12 text-center">
                    <ul className="fh5co-social-icons">
                      <li><a href="#"><i className="icon-twitter"></i></a></li>
                      <li><a href="#"><i className="icon-facebook"></i></a></li>
                      <li><a href="#"><i className="icon-linkedin"></i></a></li>
                      <li><a href="#"><i className="icon-dribbble"></i></a></li>
                    </ul>
                </div>
              </div>
        </div>
      </div>
    </div>
    <Link to="/Footer">
      <button variant="outlined">
          Footer
      </button>
    </Link>
  </div>
  );
}

export default Content;
