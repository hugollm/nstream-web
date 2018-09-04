import preact from 'preact';

import Page from '/app/page';
import SignupForm from './signup-form';

import { changePage } from '/app/actions';
import './signup-page.scss';


export default class SignupPage extends preact.Component {

    render() {
        return <Page id="signup-page" path="/signup">
            <div className="brand">
                Note Stream
            </div>
            <div className="lead">
                Don't write to remember... write to forget.
            </div>
            <SignupForm/>
            <div className="links">
                <a onClick={() => changePage('/')}>• Login</a>
            </div>
        </Page>;
    }
}
