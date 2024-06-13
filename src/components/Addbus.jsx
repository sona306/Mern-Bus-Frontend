import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Addbus = () => {

    const[addbus,setData]=useState(
       
    {
        "busname":'',
        "root":"",
        "busnumber":"",
        "driver":""
    }
    )
    const inputHandler=(event)=>{
        setData({...addbus,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(addbus)
         axios.post("http://localhost:8089/addbus",addbus).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Sucessfully added")
                } else {
                    alert("error!")
                }
            }
        ).catch()
    }
  return (
    <div>
<Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus Name</label>
                            <input type="text" className="form-control" name='busname' value={addbus.busname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Root</label>
                            <input type="text" className="form-control" name='root' value={addbus.root} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus Number</label>
                            <input type="text" className="form-control" name='busnumber' value={addbus.busnumber} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Driver</label>
                            <input type="text" className="form-control" name='driver' value={addbus.driver} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-primary" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addbus