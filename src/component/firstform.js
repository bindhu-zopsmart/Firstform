import React, { Component } from 'react'
import "./form.css"
// import {person} from '../component/image'
// import {person} from "./component/image/person.jpg"
 class Firstform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        phonenumber:'',
        email:'',
        password:'',
        isSubmited:false,
        Message: ""
         
      }
    }
    handleName=event =>{
        this.setState({
            ...this.state,
            name:event.target.value
        })

        // console.log(event.target.value)
    }
    handlePhoneNumber=event =>{
        this.setState({...this.state,
            phonenumber:event.target.value
        })
    }
    handleEmail=event =>{
        this.setState({
            ...this.state,
            email:event.target.value
        })
    }
    handlePassword=event =>{
        this.setState({
            ...this.state,
            password:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
       this.setState({
        Message:"Thanks for registering"
            

       })
       console.log(this.state.Message)
     }

     render() {
      let condition=(this.state.Message.length>0)?'hidden':'';
    return (
      <div className='main'>
        <div className='sub-main'>

            
    <div>
            {
                
                this.state.Message
            }
        </div>
        <form onSubmit={this.handleSubmit} className={`${condition}`}>
        
            <div className="container-image">
                <img src="/person.jpg" alt="profile" className='profile'/>
            </div>
          
            <h1 >Register</h1>
           
            <div className='name'>
                
                <input type="text" className='inputBox' placeholder='user name' value={this.state.name} onChange={this.handleName} required/>

            </div>
            <div className='name'>
                
                <input type="number" placeholder='phone number' value={this.state.phonenumber} onChange={this.handlePhoneNumber} required/>

            </div>
            <div className='name'>
                
                <input type="email" placeholder='email' value={this.state.email} onChange={this.handleEmail} required/>
            </div>
            <div className='name'>
                    
                    <input type="password" placeholder='password' value={this.state.password} onChange={this.handlePassword} required/>
            </div>
                <div className='login-button'>
                <button type="submit">Submit</button>
                </div>

        </form>
      </div>
        
      </div>
    )
  }
}

export default Firstform