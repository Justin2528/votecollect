const hook = new Discord.WebhookClient('541136291765420042', 'c-LQX-ZrcYJarqW3iHzB_vF-BmqgJWqWneTKm398CxpwB4jPIJqbSBQMmxvbng98kJY9');
const DBL = require('dblapi.js');
const dbl = new DBL(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUxMDEyMjMzNDc5NTk4OTAwMyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQ5MDg3OTA4fQ.iSAICe7p8w1djLMCtP-1EDrqgHepSsze8sfyEg89RII, { webhookPort: 5000, webhookAuth: 'c-LQX-ZrcYJarqW3iHzB_vF-BmqgJWqWneTKm398CxpwB4jPIJqbSBQMmxvbng98kJY9' });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
  L = hook.roles.find("name", "EDGE Voter");
  vote.addRole(L);
});
