import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Searchbus = () => {
    const[searchbus,setData]=useState(
        {
            "busnumber":""
        }
    )
    const [result, setResult] = useState([])
    const inputHandler=(event)=>{
        setData({...searchbus,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(searchbus)
        axios.post("http://localhost:8089/searchbus",searchbus).then(
            (response) => {
                    setResult(response.data)
            }
        ).catch()
    }
    return (
    <div>
    <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl 12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus No</label>
                            <input type="text" className="form-control" name='busnumber' value={searchbus.busnumber} onChange={inputHandler}/>
                        </div><br></br>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<br></br>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Root</th>
                                    <th scope="col">Bus No</th>
                                    <th scope="col">Driver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map(
                                    (value, index) => {
                                        return <tr>
                                            <th>{value.busname}</th>
                                            <td>{value.root}</td>
                                            <td>{value.busnumber}</td>
                                            <td>{value.driver}</td>
                                        </tr>
                                    }
                                )

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Searchbus