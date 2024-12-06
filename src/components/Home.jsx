/** @format */

import React from 'react';
import BannerSection from './BannerSection';
import BookShows from './BookShows';
import { bookData } from '../data/BookData';
import {
	faCircleArrowDown,
	faDiceFive,
	faDiceFour,
	faDiceOne,
	faDiceThree,
	faDiceTwo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home() {
	return (
		<>
			<BannerSection />
			<BookShows bookData={bookData} />
			<h1 className='m-5 text-center fs-1 p-5'>
				Feedbacks <hr className='border-4 border-dark' />{' '}
			</h1>
			<div className='container-fluid'>
				<div class='row justify-content-start m-0 p-2'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient'
						style={{
							width: '8%',
							height: '16vh',
							backgroundColor: '#016b88',
							position: 'relative',
							left: '17%',
							marginBottom: '2%',
						}}>
						<FontAwesomeIcon icon={faCircleArrowDown} />
					</div>
					<div>
						<div
							style={{
								width: '15%',
								backgroundColor: '#016b88',
								height: '1vh',
								transform: 'rotate(120deg)',
								position: 'absolute',
								left: '12%',
								zIndex: '-1',
							}}></div>
						<div
							class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center'
							style={{ height: '30vh' }}>
							<FontAwesomeIcon
								className='me-1 fa-spin'
								icon={faDiceOne}
							/>
							Step
						</div>
					</div>
				</div>
				<div class='row justify-content-end m-0 p-2'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient'
						style={{
							width: '8%',
							height: '16vh',
							backgroundColor: '#016b88',
							position: 'relative',
							right: '10%',
							marginBottom: '2%',
						}}>
						<FontAwesomeIcon icon={faCircleArrowDown} />
					</div>
					<div className='d-flex justify-content-end'>
						<div
							style={{
								width: '10%',
								backgroundColor: '#016b88',
								height: '1vh',
								transform: 'rotate(120deg)',
								position: 'absolute',
								right: '15%',
								zIndex: '-1',
							}}></div>
						<div
							class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center'
							style={{ height: '30vh' }}>
							<FontAwesomeIcon
								className='me-1 fa-spin'
								icon={faDiceOne}
							/>
							Step
						</div>
					</div>
				</div>
				<div class='row justify-content-start m-0 p-2'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient'
						style={{
							width: '8%',
							height: '16vh',
							backgroundColor: '#016b88',
							position: 'relative',
							left: '17%',
							marginBottom: '2%',
						}}>
						<FontAwesomeIcon icon={faCircleArrowDown} />
					</div>
					<div>
						<div
							style={{
								width: '15%',
								backgroundColor: '#016b88',
								height: '1vh',
								transform: 'rotate(120deg)',
								position: 'absolute',
								left: '12%',
								zIndex: '-1',
							}}></div>
						<div
							class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center'
							style={{ height: '30vh' }}>
							<FontAwesomeIcon
								className='me-1 fa-spin'
								icon={faDiceOne}
							/>
							Step
						</div>
					</div>
				</div>
				<div class='row justify-content-end m-0 p-2'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient'
						style={{
							width: '8%',
							height: '16vh',
							backgroundColor: '#016b88',
							position: 'relative',
							right: '10%',
							marginBottom: '2%',
						}}>
						<FontAwesomeIcon icon={faCircleArrowDown} />
					</div>
					<div className='d-flex justify-content-end'>
						<div
							style={{
								width: '10%',
								backgroundColor: '#016b88',
								height: '1vh',
								transform: 'rotate(120deg)',
								position: 'absolute',
								right: '15%',
								zIndex: '-1',
							}}></div>
						<div
							class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center'
							style={{ height: '30vh' }}>
							<FontAwesomeIcon
								className='me-1 fa-spin'
								icon={faDiceOne}
							/>
							Step
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
