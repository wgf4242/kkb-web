@decClass
class Log {
  @decFunction
  print(msg: string) {
    console.log(msg);
  }
}

function decFunction(target, property, descriptor) {
  // console.log("1 run me first");
  var p = new Promise((resolve: any, reject) => resolve());
  p.then(() => console.log('run me in print')); // 正常先执行 类函数装饰器, 再执行类装饰器，改个异步
  // setTimeout(() => {console.log("1 run me first");},0)
  return descriptor;
}

function decClass(target) {
  console.log("run me at class");
  return target;
}

const log = new Log();
log.print("hello");
