// const {EventEmitter} = require('events')
class EventEmitter {
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
}

const ev = new EventEmitter();
ev.on("start", payload => {
  console.log("start runs", payload);
});

ev.emit("start", "hi");

module.exports = class Connection {
    // ##BEGIN## 代码已加密
gywgywgywgywgdqgdUgdvgdegdwgdmgd=gdqgdwgdUgdmgywgqRgqkgRd
gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgywgcRgywgdvgd9gRygywgcUgRggd9gdvgdwgcUgdDgdngdwgdwgd9gdmgqRgqkgc9gyw
gywgywgywgywgRk

gywgywgywgywgdqgdUgdvgdvgd9gdqgdwgdngdUgdvgqRgdDgdegdRgqkgywgRd
gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgqDgd9gdDgdngdwgqRgqdgdqgdUgdvgdvgqdgqlgdDgdegdRgqk
gywgywgywgywgRk

gywgywgywgywgdUgdvgcDgdUgdvgdvgqRgdqgdygqkgywgRd
gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgqDgdUgdvgqRgqdgdqgdUgdvgdvgqdgqlgdqgdygqk
gywgywgywgywgRk
    // ##END##
}
