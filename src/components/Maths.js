import React from 'react'
class Maths extends React.Component{
    constructor(props){
        super(props)
        this.state = {
count : 0
  }

    }
    handleAdd = () => {
        this.setState ({count:this.state.count+1})
    }
    handleSub = () => {
        this.setState ({count:this.state.count-1})
    }

    render(){
        return(
            <div>
                <p>
                    now you can sum as wel as sub as you wanna do
                </p>
                <button onClick = {this.handleAdd}>add</button>
                <button onClick = {this.handleSub}>Sub</button>
        <h1>result{this.state.count}</h1>
            </div>
        )
    }
}
export default Maths;