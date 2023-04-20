const net = require('net');


const client = new net.Socket();

client.connect(3000,'127.0.0.1',()=>{
  console.log("----COnexion TCP Existosa-----");

client.on('close', ()=>{
  console.log("COnexion terminada");
});

client.on('data',(data) =>{
  console.log(`INFO: ${data}`);
}))
