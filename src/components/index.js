import Vue from 'vue';
import VCenProduct from './VCenProduct.vue';
const Components = {
    VCenProduct
};
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});
export default Components;