import React from 'react'

const ProgressBar = ({bgcolor,progress,height,Prototal,bgcolor1}) => {

	
	const Parentdiv = {
		height: height,
		width: '40%',
		backgroundColor: bgcolor,
		borderRadius: 40,
		margin: "50 auto"
		
	}
	
	const Childdiv = {
		height: '100%',
		maxWidth: `${Prototal}%`,
    	width:{Prototal},
		backgroundColor: bgcolor1,
		borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'white',
		fontWeight: 900
	}
		
	return (
	<div  style={Parentdiv} className="progress">
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default ProgressBar;
