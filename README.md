# microfrontends

There are the same pros (e. g. freedom of technology choice) an cons (e. g. increased complexity) as for microservices in the backend. This overview shows the pros and cons for the different approaches.

| Approach | Pros | Neutral | Cons |
|---|---|---|---|
| Monolith | - No additional dependencies <br>- Easier implementation of routing | - Complexity depends on size | - Bad overview (even with modules)<br>- Scaling of the complete application  |
| Web components (Angular Elements) | - Separate deployments<br>- Easier development (smaller pieces)<br>- You can choose different technologies | - Complexity depends on number of services<br>- Separate scaling depends on implementation (lazy loading) | - Additional dependencies<br>- Dependencies to other services (web components)<br>- Common styling is getting harder |
| Linked frontends | - Separate deployments<br>- Separate scaling<br>- Easier development (smaller pieces)<br>- You can choose different technologies<br>- No additional dependencies | - Complexity depends on number of services | - Services need to know each other (URLs for routing)<br>- Common styling is getting harder |

