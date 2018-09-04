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
                <h2>LOG IN</h2>
                <div>
                    Don't write to remember. Write to forget.
                </div>
            </div>
            <LoginForm/>
            <div className="links">
                <a onClick={() => changePage('/signup')}>• Signup</a>
            </div>
        </Page>;
    }
}
