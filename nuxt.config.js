const pkg = require('./package');

module.exports = {
    mode: 'universal',
    generate: {
        routes: function () {
            const fs = require('fs');
            return fs.readdirSync('./assets/content/portfolio').map(file => {
                return {
                    route: `/portfolio/${file.split(".")[0]}`, // Remove the .json from the end of the filename
                    payload: require(`./assets/content/portfolio/${file}`),
                };
            });
        },
    },
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~plugins/vue-scrollto.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/markdownit'
    ],
    markdownit: {
        injected: true,
    },
    /*

    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        extend(config, ctx) {
            if(ctx.idDev) {
                config.entry.push('eventsource-polyfill')
            }
        }
    }
};