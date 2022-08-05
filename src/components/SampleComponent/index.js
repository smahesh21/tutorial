import {Component} from 'react'
class SampleComponent extends Component {
state = {userInput:""}
onClickDiv=(event) => {
    this.setState({userInput:event.target.value})
}

render() {
    return (
        <div>
            <input type="text" onChange={this.onClickDiv} />
        </div>
        )
    }
}

export default SampleComponent
