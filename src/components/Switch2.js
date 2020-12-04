import React from 'react'
class Switch2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
color : 'black'
        }
    }
    handleOn = () => {
console.log('in')
     
    this.setState({
        color:'lightPink'
    })
}
    handleOff = () => {
console.log('out')
this.setState({
    color:'blue'
})

    }

    render(){
        return(
            <div style = {{color:this.state.color}}>
                <p>you are great</p>
            <button onClick={this.handleOn}> text pink </button>
            <button onClick={this.handleOff}>text blue </button>
            </div>
        )
    }
}
export default Switch2;