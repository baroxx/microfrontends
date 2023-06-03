# Example for MicroFrontend with Angular Elements

This example shows how to setup MicroFrontends with Angular Elements.

## Web Component with Angular Elements

First, create the project for the component and install required dependencies:

```bash
1. ng new <component-package-name> --create-application=false
1. cd <component-package-name>
1. ng generate application <component-name>  --skip-install=true
1. ng add @angular/elements
```

Adjust your component. In this example I just changed the [app.component.html](header-component/projects/header-component/src/app/app.component.html) to present the content of my MicroFrontend.

You need to adjust the [app.module.ts](header-component/projects/header-component/src/app/app.module.ts) In order to provide a web component:


```
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(AppComponent, {injector});
    customElements.define('header', webComponent);
  }

  ngDoBootstrap() {}
}
```

We change the build command and add a package command in [package.json](header-component/package.json) to get a single JavaScript bundle without hashes:

```
    "build": "ng build --output-hashing=none --configuration production",
    "package": "cat ./dist/header-component/{runtime,polyfills,scripts,main}.js > header-component.js",
```

You can simply run `npm run build` followed by a `npm run package` to build your new component. 

You can provide the JavaScript bundle with nginx. You can create an image with the (Dockerfile)[header-component/Dockerfile] and the commands below:

```
# Podman
podman build . -t angular-elements-header
podman run -p 8081:80 --name header-elements -d angular-elements-header

Docker:
docker build . -t angular-elements-header
docker run -p 8081:80 --name header-elements -d angular-elements-header
```

The bundle is available under http://localhost:8081/header-component.js

You can run these commands to stop and remove the container:
```
# Podman
podman stop header-elements && podman rm header-elements

# Docker
docker stop header-elements && docker rm header-elements
```

## Main page

The main frontend is a regular Angular application which loads the JavaScript bundle and uses the tag of the web component. You need to add "CUSTOM_ELEMENTS_SCHEMA" to [app.module.ts](main-app/src/app/app.module.ts)  avoid compilation errors.

Simply run `ng server` and go to http://localhost:4200 to see the result.
