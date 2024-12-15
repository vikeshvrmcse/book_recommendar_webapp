/** @format */

import React, { useState } from 'react';
import vd from '../images/others_back_video.mp4';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Others() {
	const [h, setH]=useState(false)
	const [hValue, setHValue]=useState('')
	const [simplex, setSimplex] = useState(1);

	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSearch = () => {
		if (searchQuery.trim()) {
			setHValue('show reletade 4 books')
			fetch(`http://127.0.0.1:5000/search_books?query=${searchQuery}`)
				.then((response) => response.json())
				.then((data) => setSearchResults(data))
				.catch((error) => console.error('Error fetching data:', error));
		}else{
			setH(false);
			setHValue('khatam tata tata by by')
		}
	};
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
								<h1 className='text-center textColor' style={{fontSize:'60px'}}>Search for Others Books</h1>
								<div className='d-flex flex-row'>
									<input
										className='form-control'
										type='text'
										value={searchQuery}
										onChange={handleSearchChange}	
										placeholder='Enter here book name'
									/>
									<button className='backGroundHover ps-3 pe-3 border-2 rounded border-white ms-2' onClick={()=>{handleSearch();setH(true);}}> <FontAwesomeIcon icon={faSearch} /> </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className='row m-0 p-0'>
				{(h && searchResults.length>0 ?<h1 className='text-center text-uppercase display-3 focus-ring-light m-5'><b>{hValue}</b></h1>:<h1 className='text-uppercase text-center text-danger display-3 m-5'><b>{hValue}</b></h1>)}
				{searchResults.length>0 ? ( 
					
					searchResults.map((item, i) => (
					
					<div className='col-sm-6 col-md-4 col-lg-3 p-4' key={i}>
						
						<div
							className='card'
							>
							<div className='card-header bg-dark text-white text-center p-0'>
								<span className=''>{item[0]}</span>
							</div>
							<div className='card-body m-0 p-0 bg-primary-subtle'>
								<img
									className='img-fluid border-bottom border-white'
									style={{ width: '100%', height: '20vh' }}
									src={item[2]}
									alt=''
								/>
								<div className=' row d-flex justify-content-start m-0 p-2' style={{fontSize:'12px'}}>
									<div className='col-12 shadow p-0 mb-1 me-1 rounded border-bottom border-white border-3 bookDescription' >
										<span className='m-1'>Title: </span><span className='me-1'>{':'}</span>
										<span className=''>{item[0]}</span>
									</div>

									<div className='col-12 shadow p-0 mb-1 rounded border-bottom border-white border-3 bookDescription'>
										<span className=' m-1'>Author</span><span className='me-1'>{':'}</span>
										<span className=''>{item[1]}</span>
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
					))
				) : (
				  ""
				)}
				
			</div>
		</>
	);
}
