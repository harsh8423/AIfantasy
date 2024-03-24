import React, {useState} from 'react'
import {teams,grounds} from './rawData'

import { useNavigate} from "react-router-dom";
import versus from "../images/all/versus.png"
import versus1 from "../images/all/versus (1).png"
import rcb from "../images/teams/rcb.jpeg"
import kxib from "../images/teams/kxib.jpeg"
import ailogo from "../images/all/logoai.png"
import dsclogo from "../images/all/logodsc2.png"

export default function Home() {

    let navigate = useNavigate();
    const [selectedvenue, setselectedvenue] = useState("")

  return (
    <div className='container'>
      <div className='sticy-div' style={{position:'sticky', top:'0px', zIndex:2, backgroundColor:'white', borderBottom:'1px solid lightgrey'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 10px'}}>
          <img src={ailogo} width={100} height={20}/>
          <img src={dsclogo} width={100} height={20}/> 
        </div>
      </div>
        <div className='row p-4'>
              <div className='col-12 mt-3'>
              <div style={{fontWeight:500,padding:'10px'}}>Select Team</div>
              <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
              <div className="btn-group">
                <button style={{border: "1px solid lightgrey",color:'black'}} className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                  <span style={{padding:'5px 5px',margin:'4px'}}><strong>RCB</strong></span>
                </button>
              </div>
              <div>
                <img src={versus1} width={30} height={30}/>
              </div>
              <div className="btn-group">
                <button style={{border: "1px solid lightgrey",color:'black'}} className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                  <span style={{padding:'5px 5px',margin:'4px'}}><strong>KXIP</strong></span>
                </button>
              </div>
              </div>
              <div className="btn-group mt-3">
              <div style={{fontWeight:500,padding:'10px'}}>Select Venue</div>

                <button style={{
                  border: "1px solid lightgrey", color:'black',
                  backgroundColor: "white",
                }} className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {!selectedvenue==""? selectedvenue:'Venue'}&nbsp;&nbsp;
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {grounds.map((item)=>{
                    return(
                      <div className='text-center' style={{borderBottom:'1px solid lightgrey'}}>
                        <div style={{padding:'5px 35px',borderRadius:'8px',cursor:'pointer'}} onClick={()=>{setselectedvenue(item)}}>{item}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <button type="button" onClick={()=>{navigate("../PredictionPage")}} className="btn btn-success mt-4">Start Prediction</button>
            </div>
            <div className='col-12 mt-5 normal-box' style={{backgroundColor:'yellow', padding:'10px', fontWeight:500, fontSize:'22px'}}>100% Guranteed Winning</div>
            <div className='col-12 mt-2 normal-box' style={{backgroundColor:'lightpink', padding:'10px', fontWeight:500, fontSize:'22px'}}>AI powered Team</div>
            <div className='col-12 mt-2 normal-box' style={{backgroundColor:'red', padding:'10px', fontWeight:500, fontSize:'22px'}}>Dream 11 Prediction and Team</div>
            <div className='col-12 mt-2' style={{color:'red', padding:'10px', fontWeight:700, fontSize:'22px'}}>
              Only On <br/>
              <img src={dsclogo} width={200} height={20}/> 
            </div>

            <div className='col-12 mt-2 normal-box' style={{backgroundColor:'lightblue', padding:'10px', fontWeight:500, fontSize:'22px'}}>Join Telegram Channel</div>
        </div>
    </div>
  )
}
