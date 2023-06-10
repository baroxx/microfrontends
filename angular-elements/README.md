# Example for MicroFrontend with Angular Elements

This example shows how to setup MicroFrontends with Angular Elements.

## Web Component with Angular Elements (example header)

First, create the project for the component and install required dependencies. This sections uses the header component as an example. The other web components were created the same way.

```bash
1. ng new header-component --create-application=false
1. cd header-component
1. ng generate application header-component --skip-install=true
1. ng add @angular/elements
```

Install PrimeNG for predefined components (**optional**):

```bash
1. npm install primeng@15.4.1 --save --legacy-peer-deps
1. npm install primeicons --save --legacy-peer-deps
```

Adjust your component. In this example I just changed the [app.component.html](header-component/projects/header-component/src/app/app.component.html) to present the content of my MicroFrontend.

You need to adjust the [app.module.ts](header-component/projects/header-component/src/app/app.module.ts) In order to provide a web component. Remove the bootstrap from NgModule and change the AppModule:


```
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(AppComponent, {injector});
    customElements.define('app-header', webComponent);
  }

  ngDoBootstrap() {}
}
```

We change the build command and add a package command in [package.json](header-component/package.json) to get a single JavaScript bundle without hashes:

```
    "build": "ng build --output-hashing=none --configuration production",
    "package": "cat ./dist/header-component/{runtime,polyfills,scripts,main}.js > header-component.js",
```

### Build podman image

You can just run `./build-podman.sh` to build the web component and create a podman image.

### Manual steps

You can simply run `npm run build` followed by a `npm run package` to build your new component. 

You can provide the JavaScript bundle with nginx. You can create an image with the (Dockerfile)[header-component/Dockerfile] and the commands below:

```
# Podman
podman build . -t angular-elements-header --build-arg CACHEBUST=$(date +%s)
podman run -p 8081:80 --rm --name header-elements -d angular-elements-header

Docker:
docker build . -t angular-elements-header --build-arg CACHEBUST=$(date +%s)
docker run -p 8081:80 --rm --name header-elements -d angular-elements-header
```

The bundle is available under http://localhost:8081/header-component.js

You can run these commands to stop and remove the container:
```
# Podman
podman stop header-elements

# Docker
docker stop header-elements
```

## Main page

The main frontend is a regular Angular application which loads the JavaScript bundle and uses the tag of the web component. You need to add "CUSTOM_ELEMENTS_SCHEMA" to [app.module.ts](main-app/src/app/app.module.ts)  avoid compilation errors.

The imports for the web components is done in the [index.html](main-app/src/index.html). There are [wrapper components](main-app/src/app/elements/) for our web components to use routing.

Simply run `ng server` and go to http://localhost:4200 to see the result.
