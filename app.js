const port = process.env.PORT || 3000;
const exec = require('child_process').exec;
const myScript = exec(`json-server -p ${port} db.json`);
myScript.stdout.on('data', (data)=>{
    console.log(data); 
});
myScript.stderr.on('data', (data)=>{
    console.error(data);
});