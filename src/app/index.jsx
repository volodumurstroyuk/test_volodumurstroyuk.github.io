import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js'
import Products from './components/products.jsx'

import './scss/style.scss';

class App extends React.Component {

    render () {
        return (
            <Provider store={store}>
                <div className="container">
                    <Products/>
                </div>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('app'));