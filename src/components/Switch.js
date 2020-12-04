import React from 'react'
export default class Switch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: 'white'
        }
    }
    handleOff =()=>{
        console.log('off')
        this.setState({
            backgroundColor: 'black'
        })
    }
    handleOn =()=>{
        console.log('on')
        this.setState({
            backgroundColor: 'white'
        })

    }
render(){
    console.log(this.state)
    return(
        <div style={{backgroundColor:this.state.backgroundColor}}>
        <button onClick={this.handleOn}>On</button>
        <button onClick={this.handleOff}>Off</button>
        </div>
    )
}
}