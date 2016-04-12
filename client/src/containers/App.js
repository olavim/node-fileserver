import React from 'react';

class App extends React.Component {
    componentWillMount() {
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

module.exports = App;