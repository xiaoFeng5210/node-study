// const events = require('events');
import events from 'events';

function egEventEmitter() {
  const eventEmitter = new events.EventEmitter();

  const connectHandler = function connected() {
    console.log('连接成功')

    eventEmitter.emit('data_received')
  }

  eventEmitter.on('connection', connectHandler)

  eventEmitter.on('data_received', function () {
    console.log('数据接收成功')
    console.log('程序执行完毕')
  })

  eventEmitter.emit('connection');
}

export default egEventEmitter;


