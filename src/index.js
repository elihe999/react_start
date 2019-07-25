import React from 'react';
// import { render } from 'react-dom';      //1
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import style from "./index.module.css";
// import "./index.css";

const user = {firstName: 'tom', lastName: 'jerry'}
const greet = <p>hello everyone.</p>
function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const arr = [1,2,3].map(num => <li key={num}>{num}</li>)
const name = <h1>Default Name</h1>
const jsx = (
    <div>
        {name ? <h1>React Nice!</h1> : null}
        {/** */}
        <p>{formatName(user)}</p>
        {greet}
        <ul>{arr}</ul>
        {/** The `style` prop expects a mapping from style properties to values, not a string.  */}
        {/* <img src={logo} alt="logo" style="width:100px" /> */}
        <img src={logo} alt="logo" style={{width: 100}} className={style.img} />
    </div>
);

console.log(jsx)
ReactDOM.render(jsx, document.getElementById('root'))
// const root = document.querySelector('#root');        //1
// render(<div>Hello world</div>, root);    //1