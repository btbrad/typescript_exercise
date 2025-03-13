export {}

function isString(input: unknown): input is string {
  return typeof input === 'string'
}

function foo(input: string | number) {
  if (isString(input)) {
    input.replace('1', '2')
  }
}
