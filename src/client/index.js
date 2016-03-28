/* global _initialState */

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/button';
import Counter from '../components/counter';

import { Provider } from 'react-redux'
import { configureStore } from '../store';

const store = configureStore(_initialState);

function makeEntryPoint(Component) {
    class EntryPoint extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <Component />
                </Provider>
            );
        }
    }

    return <EntryPoint />;
}

ReactDOM.render(
    makeEntryPoint(Button),
    document.getElementById('increaserId')
);

ReactDOM.render(
    makeEntryPoint(Counter),
    document.getElementById('counterId')
);
