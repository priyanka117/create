import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function Name({ state, updateData }) {
	const styles = {
		welcomeMessage: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
			marginTop: '10px',
		},
		message: {
			fontSize: '0.8rem',
			fontWeight: '600',
			color: '#a3a3a3',
		},
	}

	const handleNameChange = (event) => {
		updateData('name', event.target.value)
		updateData(
			'nameValidation',
			event.target.value?.length !== 0 || undefined ? false : true
		)
	}

	const handleDisplayNameChange = (event) => {
		updateData('displayName', event.target.value)
		updateData(
			'displayNameValidation',
			event.target.value?.length !== 0 || undefined ? false : true
		)
	}

	return (
		<div>
			<Typography variant='h2' style={styles.welcomeMessage}>
				Welcome! First things first...
			</Typography>
			<Typography variant='h5' style={styles.message}>
				You can always change them later.
			</Typography>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '30px',
					gap: '15px',
				}}
			>
				<Typography
					variant='h5'
					style={{
						marginRight: '290px',
						fontSize: '0.8rem',
						fontWeight: '600',
						color: '#a3a3a3',
						height: ''
					}}
				>
					Full Name
				</Typography>
				<TextField
					id='outlined-required'
					variant='outlined'
					required
					error={state.nameValidation}
					helperText={
						state.nameValidation && 'Please enter Full Name.'
					}
					value={state.name}
					onChange={handleNameChange}
				/>
				<Typography
					variant='h5'
					style={{
						textAlign : 'left',
						fontSize: '0.8rem',
						fontWeight: '600',
						color: '#a3a3a3',
					}}
				>
					Display Name
				</Typography>
				<TextField
					id='outlined-required'
					variant='outlined'
					required
					error={state.displayNameValidation}
					helperText={
						state.displayNameValidation &&
						'Please enter Display Name.'
					}
					value={state.displayName}
					onChange={handleDisplayNameChange}
				/>
			</div>
		</div>
	)
}
