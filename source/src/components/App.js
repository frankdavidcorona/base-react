import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Index from './index/Index';

injectTapEventPlugin();

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <div className="main-container">
                        <Switch>
                            <Route path='/' exact component={Index}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}
