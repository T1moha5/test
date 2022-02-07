const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
    console.log('message1', data);
    console.log('message2', second);

})


const MESSAGE = process.env.message || '';

if(MESSAGE){
    emitter.emit('message', MESSAGE, 123)
}else{
    emitter.emit('message', 'there isnt message', 'ddfd')
}

