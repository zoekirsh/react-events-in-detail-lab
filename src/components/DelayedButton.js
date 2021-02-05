// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (e) => {
    e.persist();
    let timer = this.props.delay
    setTimeout(() => {this.props.onDelayedClick(e)}, timer)
  }

  render(){
    return(
      <button onClick={this.handleClick}>Delay</button>
    )
  }
}

export default DelayedButton