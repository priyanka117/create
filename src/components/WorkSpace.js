import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

export default function WorkSpace({ state, updateData }) {
	const styles = {
		welcomeMessage: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
			marginTop: '10px',
			right: '20px',
		},
		message: {
			fontSize: '0.8rem',
			fontWeight: '600',
			color: '#a3a3a3',
			right: '20px',
		},
	}

	const handleNameChange = (event) => {
		updateData('workspaceName', event.target.value)
		updateData(
			'workspaceNameValidation',
			event.target.value?.length !== 0 || undefined ? false : true
		)
	}

	const handleWorksapceNameChange = (event) => {
		updateData('workspaceURL', event.target.value)
	}

	return (
		<div>
			<Typography variant='h2' style={styles.welcomeMessage}>
				Let's set up a home for all your work
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
						textAlign: 'left',
						fontSize: '0.8rem',
						fontWeight: '600',
						color: '#a3a3a3',
					}}
				>
					Workspace Name
				</Typography>
				<TextField
					id='outlined-required'
					variant='outlined'
					required
					error={state.workspaceNameValidation}
					helperText={
						state.workspaceNameValidation &&
						'Please enter Workspace Name.'
					}
					value={state.workspaceName}
					onChange={handleNameChange}
					// style={{ position: 'relative', right: '29px' }}
				/>
				<Typography
					variant='h5'
					style={{
						// marginLeft: '-250px',
						textAlign: 'left',
						fontSize: '0.8rem',
						fontWeight: '600',
						color: '#a3a3a3',
					}}
				>
					Workspace URL (optional)
				</Typography>
				<TextField
					defaultValue='Example'
					id='outlined-start-adornment'
					// sx={{ m: 1, width: '25ch' }}
					variant='outlined'
					value={state.workspaceURL}
					onChange={handleWorksapceNameChange}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<TextField
									disabled
									id='filled-disabled'
									defaultValue='www.eden.com/'
									variant='filled'
								/>
							</InputAdornment>
						),
					}}
				/>
			</div>
		</div>
	)
}
