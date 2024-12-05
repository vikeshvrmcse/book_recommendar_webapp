/** @format */

import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
export default function BookShows({ bookData }) {
	const [simplex, setSimplex] = useState(1);
	return (
		<>
			<div className='row m-0 p-0'>
				{bookData.map((book, i) => (
					<div className='col-sm-6 col-md-4 col-lg-3  g-4' key={i}>
						<div
							className='card'
							>
							<div className='card-header bg-dark text-white text-center p-0'>
								<span className=''>{book.title}</span>
							</div>
							<div className='card-body m-0 p-0 bg-primary-subtle'>
								<img
									className='img-fluid border-bottom border-white'
									style={{ width: '100%', height: '50vh' }}
									src={require(`../data/${book.imageLink}`)}
									alt=''
								/>
								<div className=' row d-flex justify-content-start m-0 p-2' style={{fontSize:'12px'}}>
									<div className='col-12 shadow p-0 mb-1 me-1 rounded border-bottom border-white border-3 bookDescription' >
										<span className='m-1'>Author</span><span className='me-1'>{':'}</span>
										<span className=''>{book.author}</span>
									</div>

									<div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className=' m-1'>Country</span><span className='me-1'>{':'}</span>
										<span className=''>{book.country}</span>
									</div>

                                    <div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className=' m-1'>Language</span><span className='me-1'>{':'}</span>
										<span className=''>{book.language}</span>
									</div>


                                    <div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className=' m-1'>Pages</span><span className='me-1'>{':'}</span>
										<span className=''>{book.pages}</span>
									</div>
                                    <div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className='m-1'>Year</span><span className='me-1'>{':'}</span>
										<span className=''>{book.year}</span>
									</div>

                                    
								</div>
							</div>
							<div className='card-footer d-flex justify-content-between align-items-center'>
								<a
									href={book.link}
                                    style={{fontSize:'14px'}}
									className='text-decoration-none border-2 border rounded p-1 backGroundHover border-right'>
									Visit Here
								</a>
								<button
									className=' btn btn-outline-dark p-1'
                                    style={{fontSize:'12px'}}
									onClick={() => {
										setSimplex(simplex + 1);
									}}
									href='#'>
									<FontAwesomeIcon icon={faThumbsUp} />
								</button>
								<span style={{fontSize:'14px'}} className='badge text-dark border-2 border  p-1 rounded-circle shadow'>
									{simplex}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
