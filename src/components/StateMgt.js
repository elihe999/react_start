import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        })
        
        this.setState(
            nextState => {
                console.log(nextState.counter);
                return {counter: nextState.counter + 1}
            },
            () => {
                console.log(this.state.counter)
            }
        );
        this.setState(
            nextState => {
                console.log(nextState.counter); // 0
                return { counter: nextState.counter + 1 }; // 1
            },
            () => {
                console.log(this.state.counter); // 3
            }
        );
        this.setState(
            nextState => {
                console.log(nextState.counter); // 0
                return { counter: nextState.counter + 1 }; // 1
            },
            () => {
                console.log(this.state.counter); // 3
            }
        );
        this.setState(
            nextState => {
                console.log(nextState.counter); // 0
                return { counter: nextState.counter + 1 }; // 1
            },
            () => {
                console.log(this.state.counter); // 3
            }
        );
           
        console.log(this.state.counter)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render(h) {
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}

export default function StateMgt() {
    return (
        <div>
            <Clock />
        </div>
    )
}