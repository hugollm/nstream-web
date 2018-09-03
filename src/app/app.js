import preact from 'preact';

import LoginPage from '/auth/login/login-page';
import SignupPage from '/auth/signup/signup-page';

import store from './store';
import { changePage } from './actions';

import './app.scss';


export default class App extends preact.Component {

    componentDidMount() {
        let update = this.forceUpdate.bind(this);
        this.observer = store.observer(update, 'page.path');
    }

    render() {
        return <div id="app">
            <LoginPage/>
            <SignupPage/>
            <hr/>
            <button onClick={() => changePage('/')}>Login</button>
            <button onClick={() => changePage('/signup')}>Signup</button>
        </div>;
    }
}


preact.render(<App/>, document.body, document.getElementById('app'));
