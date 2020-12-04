import React from 'react'
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin : 'true',
    }
}
    render(){
        return(
            <div>
                {
                    this.state.isLogin == true ?
                    <div>
 <button className="btn" onClick = {() => this.setState({isLogin:false})}>LogOut</button>
   <p>please Login</p>
</div>
:
<div>
<button className="btn" onClick = {() => this.setState({isLogin:true})}>Login</button>
  <p>you are log in</p>
</div>


    }
    
            </div>
        )
    
        }   
}
