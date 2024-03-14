import Vue from "vue";
import { ValidationProvider, extend } from 'vee-validate';
// Add a rule.
extend('required',value=>{
    if(value.length <= 5){
        return 'Fill the input field';
    }
    return true;
});
Vue.component('ValidationProvider', ValidationProvider);