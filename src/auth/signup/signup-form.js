import preact from 'preact';
import './signup-form.scss';


export default class SignupForm extends preact.Component {

    render() {
        return <form onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Email" spellCheck="false" autoFocus/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Password Confirmation"/>
            <button type="submit">Sign Up</button>
        </form>;
    }
}
