import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { routePage, routeConfig } from './route_config';
import store from './stores';

const RootStack = createStackNavigator(routePage, routeConfig);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
