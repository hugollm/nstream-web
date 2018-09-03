import preact from 'preact';

import store from './store';
import { pageMatch, setPageData } from './actions';


export default class Page extends preact.Component {

    componentDidMount() {
        this.setState({match: false, testedPath: null});
    }

    componentDidUpdate() {
        this.matchPage();
    }

    matchPage() {
        let currentPath = store.get('page.path');
        if (this.state.testedPath == currentPath)
            return;
        let { match, data } = pageMatch(this.props.path);
        this.setState({match: match, testedPath: currentPath}, () => {
            if (match)
                setPageData(data);
        });
    }

    render(props, state) {
        if (!state.match)
            return null;
        return <div id={props.id} className="page">
            {props.children}
        </div>;
    }
}
