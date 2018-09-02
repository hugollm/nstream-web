import preact from 'preact';
import './app.scss';


export default class App extends preact.Component {

    render() {
        return <div id="app">
            hello world
        </div>;
    }
}


preact.render(<App/>, document.body, document.getElementById('app'));
