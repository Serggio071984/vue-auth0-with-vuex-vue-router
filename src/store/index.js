import Vue from 'vue'
import Vuex from 'vuex'
import auth0 from 'auth0-js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userIsAuthorized: false,
        auth0: new auth0.WebAuth({
            domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
            clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
            redirectUri: process.env.VUE_APP_DOMAINURL + '/auth0callback',
            responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
            scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE,
        }),
    },
    mutations: {
        setUserIsAuthenticated(state, replacement) {
            state.userIsAuthorized = replacement;

        }
    },
    actions: {
        auth0Login(context) {
            //context.state.auth0.authorize();
            let string = '53 - 552 - T3 - amnia'; //<id secret> - <id template> - <secret name>
            let name = string.split(/^\d+\s-\d+\s-.*$/, '');
        },
    },
    modules: {}
})