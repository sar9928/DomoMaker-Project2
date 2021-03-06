const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
    app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
    app.get('/getDomos', mid.requiresLogin, controllers.Domo.getDomos);
    app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
    app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
    app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
    app.get('/logout', mid.requiresLogin, controllers.Account.logout);
    app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
    app.post('/maker', mid.requiresLogin, controllers.Domo.make);
    app.get('/maker2', mid.requiresLogin, controllers.Domo.makerPage2);
    app.post('/maker2', mid.requiresLogin, controllers.Domo.make2);
    app.get('/maker3', mid.requiresLogin, controllers.Domo.makerPage3);
    app.post('/maker3', mid.requiresLogin, controllers.Domo.make3);
    app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;