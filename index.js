import {NumberPicker} from './NumberPicker.js'

class App extends React.Component {
    render(){
        return(
            <NumberPicker />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))