class Log {
  print(msg: string) {
    console.log(msg)
  }
}

const dec = (target, property) => {
  const old = target.prototype[property]
  target.prototype[property] = msg => {
    msg = `==${msg}==`
    old(msg)
  }
}

dec(Log, 'print')

const log = new Log()
log.print('hello')