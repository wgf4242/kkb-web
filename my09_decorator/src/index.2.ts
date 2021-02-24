class Log {
  @decorate
  print(msg: string) {
    console.log(msg);
  }
}

function decorate(target, property, descriptor) {
  const old = descriptor.value;
  descriptor.value = msg => {
    msg = `{{${msg}}}`
    return old.apply(null, [msg])

  }

  return descriptor
}

const log = new Log()
log.print('hello')