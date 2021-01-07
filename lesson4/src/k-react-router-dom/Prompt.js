import RouterContext from "./RouterContext"
import React, {Component} from 'react'

function Prompt({message, when = true}) {
  return (
    <RouterContext.Consumer>
      {(context) => {
        if (!when) {
          return null
        }
        let method = context.history.block
        return (
          <LifeCycle
            onMount={self => {
              method(message)
            }}
            onUnmount={self => {
              method(null)
            }}
          />
        )
      }}
    </RouterContext.Consumer>
  )
}

class LifeCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this)
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount.call(this, this)
    }
  }

  render() {
    return null
  }
}

export default Prompt
