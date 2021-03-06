import service, { IdleEvents } from "../lib";

service.configure({ timeToIdle: 10, timeToTimeout: 5 });
service.start();

document.getElementById("resume").addEventListener("click", service.reset.bind(service));
document.getElementById("stop").addEventListener("click", service.stop.bind(service));

service.on(IdleEvents.UserIsBack, () => {
  console.log("User is back!");
});

service.on(IdleEvents.UserHasTimedOut, () => {
  console.log("User has timed out!");
});

service.on(IdleEvents.TimeoutWarning, countdown => {
  console.log(`User has ${countdown} seconds to come back!`);
});

service.on(IdleEvents.UserIsIdle, () => {
  console.log("User has become idle!");
});

service.on(IdleEvents.UserIsActive, () => {
  console.log("User is active");
});
