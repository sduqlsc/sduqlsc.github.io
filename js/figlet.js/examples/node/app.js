// build time:Mon Mar 08 2021 10:45:03 GMT+0800 (China Standard Time)
var figlet=require("../../lib/node-figlet.js");figlet("Hello World!","Standard",function(o,l){if(o){console.log("Something went wrong...");console.dir(o);return}console.log(l);figlet.text("Again, Hello World!","Graffiti",function(o,l){if(o){console.log("Something went wrong...");console.dir(o);return}console.log(l);figlet.text("Last time...",{font:"Standard",horizontalLayout:"full",verticalLayout:"full"},function(o,l){if(o){console.log("Something went wrong...");console.dir(o);return}console.log(l)})})});
//rebuild by neat 