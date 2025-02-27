const msg: string = 'Hello World !'
console.log(msg)

let userAge: number = 0
// userAge = "test" // error

const set = new Set<number>()
set.add(1)
// set.add('2') // error

const map = new Map<number, string>()
map.set(1, '1')
// map.set('2', '2') // error
