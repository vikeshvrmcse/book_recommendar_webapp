/** @format */

import React from 'react';

export default function ProjectAnalysis(props) {
	return (
		<>
			<div className='container-fluid p-5'>
				<div class='row d-flex align-items-center justify-content-between'>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>A</div>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>B</div>
				</div>

        <div class='row d-flex align-items-center justify-content-center'>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>C</div>
				</div>

        <div class='row d-flex align-items-center justify-content-between'>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>D</div>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>E</div>
				</div>

        <div class='row d-flex align-items-center justify-content-center p-5'>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center me-5' style={{width:'13%',height:'25vh'}}>D</div>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>E</div>
				</div>

        <div class='row d-flex align-items-center justify-content-center mb-5'>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>C</div>
				</div>

        <div class='row d-flex align-items-center justify-content-center'>
					<div class='col-4 rounded-circle backGradient d-flex align-items-center justify-content-center' style={{width:'13%',height:'25vh'}}>C</div>
				</div>
			</div>
		</>
	);
}
