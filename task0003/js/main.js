require.config({
    baseUrl: 'js',
    paths: {
        util: 'util.min',
        gtd: 'index.min'

    }
});

require([
    'gtd'
], function (gtd) {
    gtd()();
});
