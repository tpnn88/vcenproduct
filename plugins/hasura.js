export default {
    // called by Vue.use(FirstPlugin)
    install(Vue, options) {
        // create a mixin
        Vue.mixin({
            created() {
                // console.log(Vue);
                console.log(options);
            }
        });
    }
}