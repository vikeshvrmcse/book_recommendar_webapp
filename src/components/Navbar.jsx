/** @format */

import { faBookAtlas, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-primary-subtle'>
				<div className='container-fluid'>
					<Link
						className='navbar-brand p-3'
						>
						<FontAwesomeIcon className='text-white' icon={faBookAtlas}/>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse z-50'
						id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link to={'/'}
									className='nav-link active text-white backGroundHover'
									aria-current='page'
									>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/approaches'}
									className='nav-link text-white backGroundHover'
									aria-current='page'
									>
									Approches
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/project-analysis'}
									className='nav-link backGroundHover text-white'
									>
									Project Analysis
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<Link
									className='nav-link dropdown-toggle backGroundHover text-white'
									
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Book Store
								</Link>
								<ul className='dropdown-menu'>
									<li>
										<Link to={'/science'}
											className='dropdown-item'
											>
											Science
										</Link>
									</li>
									<li>
										<Link to={'/mathematics'}
											className='dropdown-item'
											>
											Mathematics
										</Link>
									</li>
									<li>
										<Link to={'/technologies'}
											className='dropdown-item'
											>
											Technologies
										</Link>
									</li>
									<li>
										<hr className='dropdown-divider' />
									</li>
									<li>
										<Link to={'/others'}
											className='dropdown-item'
											>
											Other
										</Link>
									</li>

								</ul>
							</li>
							<li className='nav-item'>
								<Link to={'/about-us'}
									className='nav-link backGroundHover text-white'
									>
									About Us
								</Link>
							</li>
							
						</ul>
						
					</div>
				</div>
			</nav>
		</>
	);
}
