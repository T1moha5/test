const os = require('os');
const cluster = require('cluster');

if(cluster.isMaster){
    for(let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
}else{
    console.log('процесс с pid= ', process.pid, 'запущен')
    setInterval(() => {

    }, 5000)
}


