/** @format */

import { faBookAtlas, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export default function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-primary-subtle'>
				<div className='container-fluid'>
					<a
						className='navbar-brand p-3'
						href='#'>
						<FontAwesomeIcon className='text-white' icon={faBookAtlas}/>
					</a>
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
						className='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<a
									className='nav-link active text-white backGroundHover'
									aria-current='page'
									href='#'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link backGroundHover text-white'
									href='#'>
									About us
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle backGroundHover text-white'
									href='#'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Book Store
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a
											className='dropdown-item'
											href='#'>
											Science
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='#'>
											Technology
										</a>
									</li>
									<li>
										<hr className='dropdown-divider' />
									</li>
									<li>
										<a
											className='dropdown-item'
											href='#'>
											Other
										</a>
									</li>
								</ul>
							</li>
							
						</ul>
						
					</div>
				</div>
			</nav>
		</>
	);
}
