import ReactDOMServer from 'react-dom/server';
import { configureStore } from '../store';

export default function renderContent(Component, state) {
    const store = configureStore(state);
    const component = Component(store);

    return ReactDOMServer.renderToStaticMarkup(component);
}
