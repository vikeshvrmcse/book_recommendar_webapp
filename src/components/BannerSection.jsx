/** @format */
import React from 'react';
import book from '../images/book_back.jpg';
import '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function BannerSection() {
	let template = '';
	const [searchValue, setSearchValue] = React.useState('');
	const [enable, setEnable] = React.useState(false);

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12 m-0 p-0 '>
						<div className='BookBack d-flex justify-content-center  align-items-center '>
							<div className='bg-primary-subtle rounded shadow-lg m-3 p-3'>
								{
									(template = enable ? (
										<>
											<div className='card'>
												<div className='card-body'>
													<div className='d-flex justify-content-between'>
														<h5 className='card-title'>Alert</h5>
														<button
															type='button'
															className='btn-close'
															aria-label='Close'
															onClick={() =>{ setEnable(false);}}></button>
													</div>

													<p className='card-text'>
														{searchValue}
													</p>
													<a
														href='#'
														className='btn btn-warning'>
														OK
													</a>
												</div>
											</div>
										</>
									) : (
										<span></span>
									))
								}
								<div className=''>
									<h5 className='input-group fs-2  border-bottom border-5 p-3 border-white'>
										Welcome in book recommendation...
									</h5>
								</div>
								{/* <div className='d-flex align-items-center mt-3'>
									<input
										className='me-3 form-control '
										placeholder='Enter here book name'
										type='text'
										value={searchValue}
                                        disabled={enable}
										onChange={(e) => {
											setSearchValue(e.target.value);
										}}
									/>
									<button
										onClick={() => {
											setEnable(!enable);
										}}
                                        
										className='btn border-3 fs-6 btn-outline-light'>
										<FontAwesomeIcon icon={faSearch} />{' '}
									</button>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
