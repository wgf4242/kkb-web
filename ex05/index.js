// const {EventEmitter} = require('events')
module.exports = class Connection {
  constructor() {
    this._events = {};
  }
  on(eventName, callback) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(callback);
  }

  emit(eventName, payload) {
    this._events[eventName].forEach(cb => {
      cb(payload);
    });
  }

  onConn(fn) {
    this.on("start", fn);
  }

  connection(payload) {
    this.emit("start", payload);
  }
};

