import React from 'react';
import Button from '../../../components/Button'

class FileInputButton extends React.Component {
	render() {
		return (
			<Button className="upload blue">
				<input type="file" name="fileinput" multiple/>
				<label for="fileinput">Choose files</label>
			</Button>
		)
	}
}

export default FileInputButton;