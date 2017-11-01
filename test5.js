//просто убрать фигурные скобки из второго .then

const append = acc => next => next === undefined ? acc : append(`${acc} -> ${next}`)
const schedule = next => setTimeout(next, 0)
const promisedAppend = next => res => new Promise(resolve => schedule(() => resolve(res(next))))
const logHandler = res => console.log('Получено:', res && res())
const doSomething = promisedAppend('doSomething')
const doSomethingElse = promisedAppend('doSomethingElse')

console.log('Ожидается:', 'start -> doSomething -> doSomethingElse')
Promise.resolve(append('start'))
.then(res=> doSomething(res))
.then(res=>doSomethingElse(res))
.then(logHandler)


/* Promise.resolve(append('start'))
 .then(res => doSomething(res))
 .then(res => { doSomethingElse(res) })
 .then(logHandler) */
