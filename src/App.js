import React from 'react';
import './App.css';
import io from 'socket.io-client';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'begin_edit': false};

    }
    removePlaceholder(ev) {
        this.setState({'begin_edit': true});
    }
    contentDidMount() {

    }
    render() {
        return (
            <div className="App">
                <div className="editor">
                    {this.state.begin_edit ? "" : <span className="placeholder-title" onClick={this.removePlaceholder.bind(this)}>Write Here</span> }
                </div>
            </div>
        );
    }
}
export default App;
