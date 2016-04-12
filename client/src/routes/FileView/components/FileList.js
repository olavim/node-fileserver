import React from 'react';
import path from 'path';
import { Link } from 'react-router';

module.exports = React.createClass({
    render: function() {
        let files = this.props.files;
        let dir = this.props.path;

        let fileComponents = files.map((file, index) => {
            if (file.type === 'directory') {
                let p = path.join(dir, file.name);
                return (
                    <li key={index}>
                        <Link to={p}>{file.name}</Link>
                    </li>
                );
            }

            return <li key={index}>{file.name}</li>;
        });

        return (
            <ul>
                {fileComponents}
            </ul>
        );
    }
});