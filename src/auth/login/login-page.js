import preact from 'preact';

import Page from '/app/page';
import LoginForm from './login-form';

import { changePage } from '/app/actions';

import './login-page.scss';


export default class LoginPage extends preact.Component {

    render() {
        return <Page id="login-page" path="/">
            <div className="brand">
                Note Stream
            </div>
            <div className="lead">
                Don't write to remember... write to forget.
            </div>
            <LoginForm/>
            <div className="links">
                <a onClick={() => changePage('/signup')}>• Signup</a>
            </div>
        </Page>;
    }
}
