import React from 'react'
export default class Maths extends React.Component{
    constructor(props){
        super(props)
        this.state = {
count : 2
  }
    }
    handleDiv = () => {
        this.setState ({count:this.state.count/2})

    }
    handleMulti = () => {
        this.setState ({count:this.state.count*2})
    }


    render(){
        return(
            <div>
                <p>
                    now you can multi as wel as divide as you wanna do
                </p>
                <button onClick = {this.handleMulti}>multi</button>
                <button onClick = {this.handleDiv}>div</button>
        <h1>result{this.state.count}</h1>
            </div>
        )

}
}