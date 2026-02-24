import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://5bab1ce6fd8c930c13674068363f2866@o4510920231747584.ingest.de.sentry.io/4510920237776976",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});