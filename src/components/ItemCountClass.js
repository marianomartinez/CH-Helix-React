import React, { Component } from 'react'

class ItemCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    onRemove() {
        // if(this.count >= 0) {
            this.setState((prevState, props) => ({
                count: prevState.count - 1
                // count: prevState.count + props.addValue
            }))
        // }
    }

    onAdd() {
        // if(this.count < 5) {
            this.setState((prevState, props) => ({
                count: prevState.count + 1
                // count: prevState.count + props.addValue
            }))
        // }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onRemove()}>
                    -
                </button>
                <div>
                    Count = {this.state.count}
                </div>
                <button onClick={() => this.onAdd()}>
                    +
                </button>
            </div>
        )
    }
}

export default ItemCount
