/** @format */

import React from 'react';
import vd from '../images/others_back_video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Others(props) {
	let template = '';
	const [searchValue, setSearchValue] = React.useState('');
	const [enable, setEnable] = React.useState(false);
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12 m-0 p-0 '>
						<div className='divVideo'>
							<video
								className='BookBackVideo'
								autoPlay
								muted
								loop
								src={vd}
								type='video/mp4'></video>
							<div className='onBookBackVideo'>
								<h1 className='text-center textColor fs-1'>Search for Others Books</h1>
								<div className='d-flex flex-row'>
									<input
										className='form-control'
										type='text'
										placeholder='Enter here book name'
									/>
									<button className='backGroundHover ps-3 pe-3 border-2 rounded border-white ms-2'><FontAwesomeIcon icon={faSearch} /> </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
