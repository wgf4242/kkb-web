@dec2
class Log {
  @dec1
  print(msg: string) {
    console.log(msg);
  }
}

function dec1(target, property, descriptor) {
  console.log("1 run me first");
  // setTimeout(() => {console.log("1 run me first");},0)
  return descriptor;
}

function dec2(target) {
  console.log("2 run me second");
  return target;
}

const log = new Log();
log.print("hello");
