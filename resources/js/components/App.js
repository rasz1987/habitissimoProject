import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';


function App() {
    return (
        <Fragment>

            <Header />
            <hr/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
