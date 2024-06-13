import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
  
    const[signup,setData]=useState(
        {
            "name":'',
            "emailid":'',
            "phone":'',
            "gender":'',
            "password":'',
            "confirm":''
        }
    )
    const inputHandler=(event)=>{
        setData({...signup,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(signup)
         axios.post("http://localhost:8089/signup",signup).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("New signIn created")
                } else {
                    alert("error!")
                }
            }
        ).catch()
    }
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={signup.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='emailid' value={signup.emailid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name='phone' value={signup.phone} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                            <select name="gender" id="" className="form-control" value={signup.gender} onChange={inputHandler}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={signup.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name='confirm' value={signup.confirm} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-primary" onClick={readValue}>Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <a href="/">
                        <button className="btn btn-info" onClick={readValue}>SignIn Now</button><br></br><br></br>
                        </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Signup