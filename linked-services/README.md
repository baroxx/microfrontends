# Example for MicroFrontend with linked services

This example shows how to setup MicroFrontends with linked services. It as simple as createing two services (service-a and service-b) which are running separately. service-a has a list of items and just knows the names of them. There is a button for each item to service-b which knows the details. An error page is shown in case the item is not known.

This is the simplest solution for MicroFrontends. But it can get complex if shared components like the header are required. You should avoid the usage of shared libraries. You should think about web components provided via an separated deployment instead.

In this example we took the header web component from [angular-elements/header-component](../angular-elements/header-component). service-a knows about service-b. service-b doesn't know service-a but the loaded header component does.  