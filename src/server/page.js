import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import Counter from '../components/counter';
import Dummy from '../components/dummy';
import Button from '../components/button';

export default function(store) {
    function dynamicComponent(Component, id) {
        return (
            <div dangerouslySetInnerHTML={{__html:
                ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <Component />
                    </Provider>
                )}} id={id}>
            </div>
        );
    }

    return (
        <div className="main">
            {dynamicComponent(Counter, 'counterId')}
            <Dummy />
            {dynamicComponent(Button, 'increaserId')}
        </div>
    );
}
