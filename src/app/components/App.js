import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'Pages/Main';

import './App.scss';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Main}/>

                    <Route exact path={'/blog'}/>
                    <Route exact path={'/blog/:slug'} />
                    <Route exact path={'/land-for-sale'} />
                    <Route exact path={'/land-for-sale/:slug'} />

                    <Route exact path={'/seller/:slug'} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(App);
