[16:11] Guichi Zhao
    

// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants"
 
// import './hook'




 
importReact,{useReducer,useState,useRef,useCallback,useEffect}from'react'
importReactDOMfrom'react-dom'


 
// let c
functionApp(){
console.log('render me')
const[count,setCount]=useState(0)
setCount({})
// useEffect(() => {
// setCount(x => x + 1)
// }, [count])
// setCount(1)
// let aaa = 0
// if (count % 3 === 0) {
// aaa = (aaa + count)
// }
// // const c = useRef(null)
// const click = useEffect(() => {
// console.log('count is', count)
// setCount(count + 1)
// }, [count])
// c.current = count
console.log('render App')
return<div>
<div>{`Count is ${count}`}</div>
{/* <button onClick={click}>Click</button> */}
</div>
}
 
// class App extends React.Component {
// state = { count: 0 }
// render() {
// return <div>
// <div>{`Count is ${this.state.count}`}</div>
// <button onClick={() => {
// this.setState({ count: this.state.count + 1 })
// setTimeout(() => {
// console.log('count is ??', this.state.count)
// }, 3000)
// }}>Click</button>
// </div>
// }
// }
 
ReactDOM.render(<App/>,document.getElementById('root'))
 
// // const initialState = { count: 0 };
 
// // function reducer(state, action) {
// // switch (action.type) {
// // case 'increment':
// // return { count: state.count + 1 };
// // case 'decrement':
// // return { count: state.count - 1 };
// // default:
// // throw new Error();
// // }
// // }
 
// // function Counter() {
// // const [state, dispatch] = useReducer(reducer, initialState);
// // return (
// // <>
// // Count: {state.count}
// // <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
// // <button onClick={() => dispatch({ type: 'increment' })}>+</button>
// // </>
// // );
// // }
// // ReactDOM.render(<Counter />, document.getElementById('root'))



 
// const buckets = {}
// let currentFn;
 
// const makeFnHook = (fn) => {
// return function (...args) {
// currentFn = fn.name
// // console.log(`set ${currentFn} as current`)
// return fn.apply(this, args)
// }
// }
 
// function getCurrentBucket(name) {
// if (!buckets[name]) {
// buckets[name] = {
// state: [],
// nextStateId: 0
// }
// }
// return buckets[name]
// }
// function test() {
// const [count, setCount] = useReducer(reducer, 0)
// setCount(count + 1)
// console.log('count is', count)
// }
// test = makeFnHook(test)
 
// test()
// // test()
// // test()





 
// // function useReducer(reducer, init) {
// // const bucket = getCurrentBucket();
// // if (!bucket.state[bucket.nextStateId]) {
// // let slot = [init, (action) => {
// // slot[0] = reducer(slot[0], action)
// // }]
// // bucket.state[bucket.nextStateId] = slot;
// // }
// // return bucket.state[bucket.nextStateId++]
// // }
 
// function useReducer(reducer, init) {
// const bucket = getCurrentBucket()
// if (!bucket.stateSlot[bucket.nextStateId]) {
// let slot = [init, (v) => {
// slot[0] = reducer(slot[0], v)
// }]
// bucket.stateSlot[bucket.nextStateId] = slot
// }
// return bucket.stateSlot[bucket.nextStateId++]
// }
 
// test() //1
// test() //2
// test() //3

