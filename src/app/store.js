import Store from 'true-store';

export default new Store({
    page: {
        path: location.pathname,
        data: {},
    }
});
