import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SuccessIcon from '../successIcon.png'

export default function Success({state}) {
	const styles = {
		successIcon: {
			borderRadius: '50%',
		},
		successMessage: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
			marginTop: '80px',
		},
		message: {
			fontSize: '0.8rem',
			fontWeight: '600',
			color: '#a3a3a3',
			top: '8px',
		},
	}

	return (
		<div >
			<div style={styles.successIcon}></div>
			<img
                src={SuccessIcon}
				style={{
					color: '#664de5',
					height: 68,
					width: 80,
					position: 'relative',
					top: '30px',
				}}
			/>
			<Typography variant='h2' style={styles.successMessage}>
				Congratulations, {state.displayName}!
			</Typography>
			<Typography variant='h5' style={styles.message}>
				You have completed onboarding, you can start using the Eden!
			</Typography>
			<Button
				style={{
					width: '350px',
					height: '40px',
					backgroundColor: '#664de5'
					, marginTop : '25px'
				}}
			>
				<Typography
					variant='h5'
					style={{ fontSize: '0.8rem', color: 'white' }}
				>
					Launch Eden
				</Typography>
			</Button>
		</div>
	)
}
