import React from 'react';
// import { render } from 'react-dom';      //1
import ReactDOM from 'react-dom'

const user = {firstName: 'tom', lastName: 'jerry'}
const greet = <p>hello everyone.</p>
function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const arr = [1,2,3].map(num => <li key={num}>{num}</li>)

const jsx = (
    <div>
        <h1>React Nice!</h1>
        {/** */}
        <p>{formatName(user)}</p>
        {greet}
        <ul>{arr}</ul>
    </div>
);

console.log(jsx)
ReactDOM.render(jsx, document.getElementById('root'))
// const root = document.querySelector('#root');        //1
// render(<div>Hello world</div>, root);    //1