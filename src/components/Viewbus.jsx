import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Viewbus = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8089/viewbus").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch()
      }
  useEffect(()=>{(fetchData())},[])
  return (
    <div>
       <Nav/>
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
                                {data.map(
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

export default Viewbus