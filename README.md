# v-cen-product

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### HOW TO CREATE NPM VUE PACKAGES
---
##1. To install Vue CLI 
```$xslt
npm install -g @vue/cli
```
##2. To create a new project
```$xslt
vue create your-packgage-name 
```
##3. Build your components in src/components/
ex: src/components/Button.vue
##4. create index.js in in src/components/
```$xslt
//index.js 
import Vue from 'vue';
import Button from './Button.vue';
import Alert from './Alert.vue';
const Components = {
  Button,
  Alert,
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});
export default Components;
```
##5. modify package.js
note: `name`, `version`, `private`, `files`, `build-bundle`, `main`
```$xslt
{
  "name": "parseobjects",
  "version": "1.0.0",
  "private": false,
  "main": "./dist/your-packgage-name.common.js",
  "files": [
    "dist/*",
    "src/*",
    "public/*",
    "*.json",
    "*.js",
    "plugins/*"
  ],
  "scripts": {
    "serve": "vue-cli-service serve --host localhost",
    "build": "vue-cli-service build",
    "build-bundle": "vue-cli-service build --target lib --name your-packgage-name ./src/components/index.js"
  },
  "dependencies": {
     ... 
  },
  "devDependencies": {
  ...
  }
}
```
##6. build package
```$xslt
npm run build-bundle
```
To register on npm:
```$xslt
npm adduser
```
To login 
```$xslt
npm login 
```
##7. Publish your components library to NPM
```$xslt
npm publish --access public
```
##8. Installing your package in a different project
```$xslt
npm i your-packgage-name
```
usable
```$xslt
<script>
  import parseobjects from ‘parseobjects’; 
  components: {...parseobjects} 
</script>
<template>
  <Button/>
  <Alert/>
</template>
```