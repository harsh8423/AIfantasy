import React, { useEffect, useState } from 'react'
import ReactSpeedometer from "react-d3-speedometer"

import {teams,grounds} from './rawData'
import Modal from "react-modal";

import versus from "../images/all/versus.png"
import versus1 from "../images/all/versus (1).png"
import rcb from "../images/teams/rcb.jpeg"
import kxib from "../images/teams/kxib.jpeg"
import ailogo from "../images/all/logoai.png"
import dsclogo from "../images/all/logodsc2.png"
import cbot from '../images/all/chatbot.png'
import bulb from "../images/all/lightbulb.png"
import cg from "../images/all/cg.png"

import pitch from "../images/pitch/banglore.jpg"
import DreamTeam from '../components/DreamTeam';

export default function PredictionPage() {

  const [pagestate, setpagestate] = useState(0)

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal(index) {
    setIsOpen(true);
  }

  const last5=[198,200,189,226,174]
  const matchInfo = [
    { 
        desc: "Maxwell can hit big today, great choice for captaincy", 
        highlight: false
    },
    { 
        desc: "Do or Die match for Jonny Bairstow, good risk to pick", 
        highlight: false 
    },
    { 
      desc: "Slower-bowl variation bowler will perform good today, pick Harshal Patel ", 
      highlight: true 
    },
    { 
        desc: "Don't pick Alzari Joseph chinnayaswami has small square boundaries", 
        highlight: false 
    },
];

const customStyles = {
  content: {
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "68%",
    overflow: "auto",
    borderRadius: "12px",
    zIndex: 30,
  },
};

useEffect(() => {
  setTimeout(() => {
    setpagestate(1)
  },500);
  setTimeout(() => {
    setpagestate(2)
  },3000);
  setTimeout(() => {
    setpagestate(3)
  },5000);
}, [])


  return (
    <>
      <div className='sticy-div' style={{position:'sticky', top:'0px', zIndex:2, backgroundColor:'white'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 10px'}}>
          <img src={ailogo} width={100} height={20}/>
          <img src={dsclogo} width={100} height={20}/> 
        </div>
      </div>
    <div className='container-fluid mb-5' style={{backgroundColor:'rgb(240, 241, 241)'}}>
        <div className='row'>
            <div className='col-12 mt-4' style={{backgroundColor:'white'}}>
              <div style={{fontWeight:700,padding:'10px', color:'red'}}>{"Match 6"}</div>
              <div  style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <img src={rcb} width={100} height={100}/>
                <img src={require('../images/all/versus.png')} width={80} height={60}/>
                <img src={kxib} width={100} height={100}/>  
              </div>  
              <div style={{fontWeight:500,padding:'10px'}}>{"Bangluru, 25 March"}</div>
            </div>
            {pagestate>0 && <div className='col-12 p-2 '>
              <div className='normal-box m-2 pb-4' style={{backgroundColor:'white'}}>
                <div style={{fontWeight:700,padding:'10px', color:'red'}}>Pitch Condition</div>
                <img src={pitch} width="100%" height='auto'/>
                <div className='normal-box' style={{fontWeight:700,padding:'10px',margin:'0px 10px'}}>AI Predicted Score: <strong style={{color:'green'}}>{"191 "}</strong><small><small>(min)</small></small></div>
                <div style={{fontWeight:500,padding:'10px',textAlign:'left'}}>Last five match score</div>
                {last5.map((item)=>{
                  return(
                    <span className='normal-box p-1 m-1' style={{fontSize:'12px'}}>{item}</span>
                    )
                  })}
              </div>
            </div>}
                      {pagestate>1 && <div className='col-12'>
                        <div className='normal-box pb-4' style={{backgroundColor:'white'}}>
                        <div style={{fontWeight:700,padding:'10px', color:'red'}}>Win Prediction</div>
                        <div style={{width:'250px',marginLeft:'15px',borderRadius:'8px',fontWeight:500,padding:'5px', fontSize:'14px',display:'flex', justifyContent:'center', alignItems:'center',backgroundColor:'lightgreen'}}><img src={bulb} width={18} height={18}/><span>First Batting team <strong>Advantage</strong></span></div>
                        <div className='mt-3' style={{fontWeight:500,padding:'10px',textAlign:'left'}}>If RCB bat first</div>
                        <ReactSpeedometer
                          maxValue={100}
                          value={61}
                          currentValueText={"RCB 61% - KXIP 39%"}
                          width={270}
                          height={200}
                          segmentColors={[
                            "darkred",
                            "red",
                          ]}
                          needleTransitionDuration={8000}
                          needleTransition="easeElastic"
                          customSegmentStops={[0,61,100]}
                          customSegmentLabels={[
                            {
                              text: "RCB",
                              position: "INSIDE",
                              color: "#555",
                            },
                            {
                              text: "KXIP",
                              position: "INSIDE",
                              color: "#555",
                            },
                          ]}/>
          
                        <div style={{fontWeight:500,padding:'10px',textAlign:'left'}}>If KXIP bat first</div>
                        <ReactSpeedometer
                          maxValue={100}
                          value={57}
                          currentValueText={"RCB 57% - KXIP 43%"}
                          width={270}
                          height={200}
                          segmentColors={[
                            "darkred",
                            "red",
                          ]}
                          needleTransitionDuration={8000}
                          needleTransition="easeElastic"
                          customSegmentStops={[0,57,100]}
                          customSegmentLabels={[
                            {
                              text: "RCB",
                              position: "INSIDE",
                              color: "#555",
                            },
                            {
                              text: "KXIP",
                              position: "INSIDE",
                              color: "#555",
                            },
                          ]}/>
                        </div>
                      </div>}
            {pagestate>2 && <div className='col-12 p-2 '>
              <div className='normal-box m-2 pb-2' style={{backgroundColor:'white'}}>
                <div style={{fontWeight:700,padding:'10px', color:'red'}}>Match Help</div>
                <ul style={{margin:'0px 0px 0px 10px', padding:'0px 0px 0px 20px'}}>
                  {matchInfo.map((item)=>{
                    return(
                      <li className='p-1' style={{fontSize:'12px', backgroundColor:item.highlight? 'lightyellow':'', textAlign:'left'}}>{item.desc}</li>
                      )
                    })}
                </ul>
              </div>
            </div>}
            {pagestate>2 && <DreamTeam/>}
        </div>
        <div className='' style={{position: 'fixed',bottom: '20px', right: '20px',zIndex: 9999}}>
          <img onClick={openModal} src={cbot} style={{cursor:'pointer'}} height={45} width={45} />
        </div>
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        overlayClassName="Overlay"
        onRequestClose={closeModal}
        contentLabel="Cricket Guru"
        >
          <div className="container-fluid" style={{ textAlign: "left" }}>  
            <div className='row'>
              <div className='col-12 mt-2'>
                <span onClick={closeModal} style={{float:'right',fontWeight:700,cursor:'pointer'}}>X</span>
                <img src={cg} width={150} height={"auto"}/> <hr/>
              </div>
              <div className='text-center col-12'><div style={{fontWeight:700,padding:'10px', color:'red', textAlign:'center'}}>Ask any Question, Stats or Prediction related to match</div></div>
              <div className='col-12 mt-3'>
              <div style={{fontWeight:500,padding:'1px',textAlign:'left'}}>Question:</div>
                <textarea style={{border:'1px solid grey', borderRadius:'8px', width:'100%', fontSize:'14px'}} rows={2} className="form__input" name="desc" placeholder="Your Question here..." required="" />
              </div>

              <div className='col-12 mt-3'>
              <div style={{fontWeight:500,padding:'1px',textAlign:'left'}}>Response:</div>
                <textarea style={{border:'1px solid grey', borderRadius:'8px', width:'100%', fontSize:'14px'}} rows={7} className="form__input" name="desc" placeholder="I have all information, analysis and prediction of the match" required="" />
              </div>
              <div className='text-center col-12'><div style={{fontWeight:500,padding:'10px', color:'red', textAlign:'center', fontSize:'11px'}}>*Cricket Guru AI chatBot by Dil Se Cricket</div></div>
              
            </div>
          </div>
        </Modal>
    </div>
  </>
  )
}
