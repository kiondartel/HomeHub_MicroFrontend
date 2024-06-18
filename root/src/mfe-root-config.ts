import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mfe/auth",
  app: () => System.import<LifeCycles>("@mfe/auth"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mfe/dashbaord",
  app: () => System.import<LifeCycles>("@mfe/dashboard"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
