console.log("Hello there date " + new Date().getUTCDate());
let owner = (process.env.OWNER == ""|| process.env.OWNER == undefined) ? "DEFAULT" : process.env.OWNER; 
console.log("Node env, owner is = " + owner);