/** @format */

import { faDiceFive, faDiceFour, faDiceOne, faDiceThree, faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Approaches(props) {
	return (
		<>
			<div class='container-fluid text-center'>
				<div class='row justify-content-start m-0 p-2'>
					<div class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center' style={{height:'30vh'}}>
            <FontAwesomeIcon className='me-1 fa-spin' icon={faDiceOne}/>Step
          </div>
				</div>
        <div class='row justify-content-center m-0 p-2'>
        <div class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center' style={{height:'30vh'}}>
            <FontAwesomeIcon className='me-1 fa-spin' icon={faDiceTwo}/>Step
          </div>
				</div>
        <div class='row justify-content-end m-0 p-2'>
        <div class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center' style={{height:'30vh'}}>
            <FontAwesomeIcon className='me-1 fa-spin' icon={faDiceThree}/>Step
          </div>
				</div>
        <div class='row justify-content-center m-0 p-2'>
        <div class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center' style={{height:'30vh'}}>
            <FontAwesomeIcon className='me-1 fa-spin' icon={faDiceFour}/>Step
          </div>
				</div>
        <div class='row justify-content-start m-0 p-2'>
        <div class='col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center' style={{height:'30vh'}}>
            <FontAwesomeIcon className='me-1 fa-spin' icon={faDiceFive}/>Step
          </div>
				</div>
			</div>
		</>
	);
}
