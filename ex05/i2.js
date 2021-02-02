const mockFn = () => {
  console.log("mockFn runs");
};

const Connection = require("./index");
const conn = new Connection();

// 订阅连接回调
conn.onConn(mockFn);
conn.onConn(mockFn);

setTimeout(() => {
  conn.connection("连接1完成");
}, 100);

setTimeout(() => {
  conn.connection("连接2完成");
}, 100);
