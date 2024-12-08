/** @format */

import {
	faFacebook,
	faInstagram,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
	faAngleRight,
	faFileInvoice,
	faHandMiddleFinger,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
	return (
		<>
			<footer className='bg-primary-subtle mt-3'>
				<div className='row m-4 p-5'>
					<div className='footer col-lg-3 col-sm-12 col-md-6 text-primary'>
						<h4 className='m-0 p-1'>Team members</h4>
						<ul>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Vikesh Kr.</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Vansh Pal</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Vansh Bhattnagar</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Nandita Saxena</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-3 col-sm-12 col-md-6 footer'>
						<h4 className='text-primary m-0 p-1'>ML Features</h4>
						<ul>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Based On Title</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Based On Authors</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Based On Publishers</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Based On Content</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-3 col-sm-12 col-md-6 footer'>
						<h4 className='text-primary m-0 p-1'>Used Process</h4>
						<ul>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Book Dataset</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Data Clining</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Logistic Regression</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>UI Using React</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-3 col-sm-12 col-md-6 footer'>
						<h4 className='text-primary m-0 p-1'>Contact Us</h4>
						<ul>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Mains Hostel, MJPRU</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Gate No-1, MJPRU</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Gate No-1, MJPRU</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faAngleRight} />{' '}
								<a href='#'>Girls Hostel, MJPRU</a>
							</li>
						</ul>
					</div>
				</div>
				<div
					className='row backGroundColor m-0 p-3 border-top border-5 border-white'
					style={{ fontSize: '13px' }}>
					<div className='col d-flex justify-content-between align-items-center'>
						<div className=''>
							<span>@copyrigts, All rights reserved</span>
						</div>
						<div className='d-flex justify-content-between'>
							<div className='me-3 ms-3 fs-4 iconHover'>
								<span>
									<FontAwesomeIcon icon={faInstagram} />
								</span>
							</div>
							<div className='me-3 ms-3 fs-4 iconHover'>
								<span>
									<FontAwesomeIcon icon={faYoutube} />
								</span>
							</div>
							<div className='me-3 ms-3 fs-4 iconHover'>
								<span>
									<FontAwesomeIcon icon={faFacebook} />
								</span>
							</div>
						</div>
						<div>
							<span>Developed, By Vikesh</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
