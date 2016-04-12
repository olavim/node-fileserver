module.exports = {
    path: '/home/*',
    getComponent(location, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/FileView'))
        })
    }
}