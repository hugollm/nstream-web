import preact from 'preact';
import './login-form.scss';


export default class LoginForm extends preact.Component {

    render() {
        return <form onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Email" spellCheck="false" autoFocus/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </form>;
    }
}
