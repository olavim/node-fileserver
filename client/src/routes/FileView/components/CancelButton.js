import React from 'react';
import Button from '../../../components/Button'

export default ({
	onAction
}) => {
	return (
		<Button className="cancel white" onAction={onAction}>
			<label>Cancel</label>
		</Button>
	)
}