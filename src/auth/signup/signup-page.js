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
                <h2>SIGN UP</h2>
                <div>
                    Just a quick form. You can do this :)
                </div>
            </div>
            <SignupForm/>
            <div className="links">
                <button className="btn-link" onClick={() => changePage('/')}>• Login</button>
            </div>
        </Page>;
    }
}
