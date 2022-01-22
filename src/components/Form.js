import React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Success from './Success'
import Name from './Name'
import Setup from './Setup'
import WorkSpace from './WorkSpace'
import './Form.css'
import Eden from '../Eden.png'

const steps = [0, 1, 2, 3]

export default function Form() {

	const [activeStep, setActiveStep] = React.useState(0)
	const [completed, setCompleted] = React.useState({})
	const [state, setState] = React.useState({
		name: '',
		displayName: '',
		nameValidation: true,
		displayNameValidation: true,
		workspaceName: '',
		workspaceURL: '',
		workspaceNameValidation: true,
		setup: 'myself',
	})

	const updateData = (type, newData) => {
		setState((data) => {
			return { ...data, [type]: newData }
		})
	}

	const totalSteps = () => {
		return steps.length
	}

	const completedSteps = () => {
		return Object.keys(completed).length
	}

	const isLastStep = () => {
		return activeStep === totalSteps() - 1
	}

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps()
	}

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1
		switch (newActiveStep) {
			case 0:
				return setActiveStep(newActiveStep)
			case 1:
				return (
					!state.nameValidation &&
					!state.displayNameValidation &&
					setActiveStep(newActiveStep)
				)
			case 2:
				return (
					!state.workspaceNameValidation &&
					setActiveStep(newActiveStep)
				)
			case 3:
				return setActiveStep(newActiveStep)
			default:
				return null
		}
	}

	const handleStep = (step) => () => {
		switch (step) {
			case 0:
				return setActiveStep(step)
			case 1:
				return (
					!state.nameValidation &&
					!state.displayNameValidation &&
					setActiveStep(step)
				)
			case 2:
				return !state.workspaceNameValidation && setActiveStep(step)
			case 3:
				return setActiveStep(step)
			default:
				return null
		}
	}

	return (
		<div
			style={{
				margin: '83px 60px',
				height: '-webkit-fill-available',
				backgroundColor: 'white',
			}}
		>
			<div style={{ textAlign: '-webkit-center' }}>
				<Typography
					variant='h2'
					style={{
						fontSize: '1.5rem',
						fontWeight: 'bold',
						position: 'fixed',
						left: '730px',
						top: '114px',
					}}
				>
					Eden
				</Typography>
				<Stepper
					nonLinear
					activeStep={activeStep}
					style={{
						width: '300px',
						position: 'absolute',
						top: '182px',
						left: '614px',
					}}
				>
					{steps.map((label, index) => (
						<Step key={label} completed={completed[index]}>
							<StepButton
								color='inherit'
								onClick={handleStep(index)}
							></StepButton>
						</Step>
					))}
				</Stepper>
				<div
					style={{
						position: 'absolute',
						top: '250px',
						left: '590px',
					}}
				>
					{(() => {
						switch (activeStep) {
							case 0:
								return (
									<Name
										state={state}
										updateData={updateData}
									/>
								)
							case 1:
								return (
									<WorkSpace
										state={state}
										updateData={updateData}
									/>
								)
							case 2:
								return (
									<Setup
										state={state}
										updateData={updateData}
									/>
								)
							case 3:
								return <Success state={state} />
							default:
								return null
						}
					})()}
					{activeStep !== steps.length && activeStep !== 3 && (
						<Button
							onClick={handleNext}
							style={{
								width: '350px',
								height: '40px',
								backgroundColor: '#664de5',
								marginTop: '35px',
								position: 'fixed',
								left: '592px',
							}}
						>
							<Typography
								variant='h5'
								style={{ fontSize: '0.8rem', color: 'white' }}
							>
								Create Workspace
							</Typography>
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
