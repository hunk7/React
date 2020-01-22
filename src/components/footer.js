import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Footer(){
	return(
		<div>
			<h1>Components Parsing</h1>
			<Link to="/Header">
			
			  <button variant="outlined">
			    Content
			  </button>
			</Link>
			<div className="gototop js-top">
				<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
			</div>
		</div>
	);
}

export default Footer;