/** @format */

import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function BookShows() {
	const [simplex, setSimplex] = useState(1);

	const [bookData, setBookData] = useState([]);

  useEffect(() => {
    
    axios.get('http://127.0.0.1:5000/get_books')
      .then((response) => {
        setBookData(response.data);  // Store the data in state
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
	return (
		<>
			<div className='row m-0 p-0'>
				{bookData.book_name && bookData.book_name.map((book, i) => (
					<div className='col-sm-6 col-md-4 col-lg-3 p-4' key={i}>
						<div
							className='card'
							>
							<div className='card-header bg-dark text-white text-center p-0'>
								<span className=''>{book}</span>
							</div>
							<div className='card-body m-0 p-0 bg-primary-subtle'>
								<img
									className='img-fluid border-bottom border-white'
									style={{ width: '100%', height: '20vh' }}
									src={bookData.image[i]}
									alt=''
								/>
								<div className=' row d-flex justify-content-start m-0 p-2' style={{fontSize:'12px'}}>
									<div className='col-12 shadow p-0 mb-1 me-1 rounded border-bottom border-white border-3 bookDescription' >
										<span className='m-1'>Author</span><span className='me-1'>{':'}</span>
										<span className=''>{bookData.author[i]}</span>
									</div>

									<div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className=' m-1'>Votes</span><span className='me-1'>{':'}</span>
										<span className=''>{bookData.votes[i]}</span>
									</div>

                                    <div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className=' m-1'>Ratings</span><span className='me-1'>{':'}</span>
										<span className=''>{bookData.rating[i]}</span>
									</div>


                                    <div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className=' m-1'>Language</span><span className='me-1'>{':'}</span>
										<span className=''>{'English'}</span>
									</div>
   
								</div>
							</div>
							<div className='card-footer d-flex justify-content-between align-items-center'>
								<button disabled
									href={'#'}
                                    style={{fontSize:'14px'}}
									className='text-decoration-none border-2 border rounded p-1 backGroundHover border-right'>
									Visit Here
								</button>
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
