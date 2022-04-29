class HelloWorld extends React.Component {
    render() {
        return <h1>This is the Hello World component!</h1>;
    }
}

//ReactDOM.render(<Hello />, document.getElementById('root'))


class JSXDemo extends React.Component {
    render(){
        return (
            <div>
                <h1>Result of 2 x 2 : {2 * 2}</h1>
            </div>
        )
    }
}

//ReactDOM.render(<JSXDemo />, document.getElementById('root'))


function getMood(){
    const moods = ['Angry', 'Hungry', 'Happy', 'Sad', 'Pissed off'];
    //Common way to select a random item from an array
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo2 extends React.Component {
    render(){
        return (
            <div>
                <h1>My Current Mood is: {getMood()}</h1>
            </div>
        )
    }
}

//ReactDOM.render(<JSXDemo2 />, document.getElementById('root'))
