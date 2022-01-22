import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import GroupsIcon from '@mui/icons-material/Groups'

export default function Setup({ state, updateData }) {
	const [styles, setStyles] = useState({
		welcomeMessage: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
		},
		message: {
			fontSize: '0.8rem',
			fontWeight: '600',
			color: '#a3a3a3',
		},
		myselfButton: {
			height: '150px',
			width: '160px',
			borderStyle: 'solid',
			borderColor: '#664de5',
			borderWidth: 'thin',
			borderRadius: '4%',
			backgroundColor: 'white',
			textAlign: 'center',
		},
		teamButton: {
			height: '150px',
			width: '160px',
			borderStyle: 'solid',
			borderColor: '#e4e2e2',
			borderWidth: 'thin',
			borderRadius: '4%',
			backgroundColor: 'white',
			textAlign: 'center',
		},
	})

	const handleOption1Click = (event) => {
		updateData('setup', 'myself')
		setStyles({
			...styles,
			myselfButton: {
				height: '150px',
				width: '160px',
				borderStyle: 'solid',
				borderColor: '#664de5',
				borderWidth: 'thin',
				borderRadius: '4%',
				backgroundColor: 'white',
				textAlign: 'center',
			},
			teamButton: {
				height: '150px',
				width: '160px',
				borderStyle: 'solid',
				borderColor: '#e4e2e2',
				borderWidth: 'thin',
				borderRadius: '4%',
				backgroundColor: 'white',
				textAlign: 'center',
			},
		})
	}

	const handleOption2Click = (event) => {
		updateData('setup', 'team')
		setStyles({
			...styles,
			teamButton: {
				height: '150px',
				width: '160px',
				borderStyle: 'solid',
				borderColor: '#664de5',
				borderWidth: 'thin',
				borderRadius: '4%',
				backgroundColor: 'white',
				textAlign: 'center',
			},
			myselfButton: {
				height: '150px',
				width: '160px',
				borderStyle: 'solid',
				borderColor: '#e4e2e2',
				borderWidth: 'thin',
				borderRadius: '4%',
				backgroundColor: 'white',
				textAlign: 'center',
			},
		})
	}

	return (
		<div style={{display: 'flex', flexDirection : 'column', gap: '25px'}}>
			<Typography variant='h2' style={styles.welcomeMessage}>
				How are you planning to use Eden?
			</Typography>
			<Typography
				variant='h6'
				style={{
					fontSize: '0.8rem',
					fontWeight: '600',
					color: '#a3a3a3',
				}}
			>
				We'll streamline your setup experience accordingly.
			</Typography>
			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					gap: '30px',
				}}
			>
				<button
					onClick={handleOption1Click}
					style={styles.myselfButton}
				>
					<PersonIcon style={{ color: '#664de5' }} />
					<Typography
						variant='h5'
						style={{ fontWeight: 'bold', fontSize: '0.9rem' }}
					>
						For myself.
					</Typography>
					<Typography variant='h6' style={styles.message}>
						Write better. Think more clearly. Stay organized.
					</Typography>
				</button>

				<button onClick={handleOption2Click} style={styles.teamButton}>
					<GroupsIcon style={{ color: '#664de5' }} />
					<Typography
						variant='h5'
						style={{ fontWeight: 'bold', fontSize: '0.9rem' }}
					>
						With my team.
					</Typography>
					<Typography variant='h6' style={styles.message}>
						Wikis, docs, tasks & projects, all in one place.
					</Typography>
				</button>
			</div>
		</div>
	)
}
