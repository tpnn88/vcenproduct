# v-cen-product
Usage:
```text
npm i @tpnn88/vcenproduct

#  usage in component
import '@tpnn88/vcenproduct/dist/vcenproduct.css'
import components from '@tpnn88/vcenproduct'
export default {
    name: "Index",
    components: { ...components }
}

# in template
<v-cen-product :config="{uri: `http://localhost:8080/v1/graphql`}"/>
```
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
##7. add github repository
```$xslt
git remote add origin https://github.com/tpnn88/vcenproduct.git
git branch -M main
git push -u origin main
```

```$xslt
npm i
# add repository to package.js
...
"repository": {
    "type": "git",
    "url": "git+https://github.com/tpnn88/vcenproduct.git"
},
```

##8. Publish your components library to NPM
```$xslt
npm publish --access public
```
##9. Installing your package in a different project
```$xslt
npm i your-packgage-name
```
usable
```$xslt
<script>
  import parseobjects from ???parseobjects???; 
  components: {...parseobjects} 
</script>
<template>
  <Button/>
  <Alert/>
</template>
```
See: <br>
[How To Build Package](http://parseobjects.com/publish-vue-js-components-npm/) <br>
[Version Management](https://cloudfour.com/thinks/how-to-publish-an-updated-version-of-an-npm-package/).