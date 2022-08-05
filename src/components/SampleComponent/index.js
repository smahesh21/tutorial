import {Component} from 'react'
class SampleComponent extends Component {
    constructor() {
        super() 
        this.state = {}
    }
    //
    /* Comments  */
    

    onClickDiv=(event) => {
            this.setState({value:event.target.value})
    }

    render() {
        return (
            <input type="text" onChange={this.onClickDiv} />
        )
    }
}

export default SampleComponent