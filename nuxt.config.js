const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/project-spa/'
    }
} : {}
export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    ...routerBase,
    css: [
        "@/assets/css/main.css",
        "@/assets/css/main.scss",
        "bootstrap/dist/css/bootstrap.css",
        "bootstrap-vue/dist/bootstrap-vue.css",
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["~/plugins/bootstrap-vue.js", "~/plugins/fontawesome.js"],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: ["bootstrap-vue/nuxt", 'nuxt-fontawesome'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};