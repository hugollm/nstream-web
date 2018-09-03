import store from './store';


export function changePage(path) {
    history.pushState(null, null, path);
    store.set('page.path', path);
}

export function pageMatch(path) {
    path = path.replace(/\/:([^\/]+)/g, '/(?<$1>[^\/]+)');
    let regex = new RegExp('^' + path + '$');
    let current = store.get('page.path');
    let match = regex.exec(current);
    let data = match && match.groups ? match.groups : null;
    return {match: Boolean(match), data: data};
}

export function setPageData(data) {
    if (data)
        store.merge({page: {data: data}});
}

window.onpopstate = function() {
    store.set('page.path', location.pathname);
}
