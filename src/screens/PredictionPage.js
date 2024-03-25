import React, { useEffect, useState } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Modal from "react-modal";
import DreamTeam from '../components/DreamTeam';

import ailogo from "../images/all/logoai.png"
import dsclogo from "../images/all/logodsc2.png"
import cbot from '../images/all/chatbot.png'
import bulb from "../images/all/lightbulb.png"
import cg from "../images/all/cg.png"

import teamIcon1 from "../images/teams/csk.png"
import teamIcon2 from "../images/teams/gt.jpg"
import pitch from "../images/pitch/banglore.jpg"

const team1="CSK"; const team2="GT"
const venue="Chennai, 26 March"
const matchno=7
const team1color="yellow"; const team2color="lightgrey"
const tossIndicator=""
const team1Predic={t1:54,t2:46}
const team2Predic={t1:59,t2:41}
const scprePredictor=171
const last5=[176,182,172,144,167]
const matchInfo = [
  { 
      desc: "Best cantaincy choice Kane williamson if he get chance ", 
      highlight: false
  },
  { 
      desc: "Ajinkya Rahane can be a unique X Factor in this match", 
      highlight: false 
  },
  { 
    desc: "Take risk and make A Omarzai as a capntain to your team", 
    highlight: true 
  },
  { 
      desc: "You can drop Devid miller beacuse he has worst record against CSK", 
      highlight: false 
  },
];

export default function PredictionPage() {


  const [pagestate, setpagestate] = useState(0)

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal(index) {
    setIsOpen(true);
  }

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
    height: "75%",
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
    <div className='container-fluid' style={{backgroundColor:'rgb(240, 241, 241)'}}>
        <div className='row'>
            <div className='col-12 mt-4' style={{backgroundColor:'white'}}>
              <div style={{fontWeight:700,padding:'10px', color:'red'}}>{"Match "}{matchno}</div>
              <div  style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <img src={teamIcon1} width={100} height={100}/>
                <img src={require('../images/all/versus.png')} width={80} height={60}/>
                <img src={teamIcon2} width={100} height={100}/>  
              </div>  
              <div style={{fontWeight:500,padding:'10px'}}>{venue}</div>
            </div>
            {pagestate>0 && <div className='col-12 p-2 '>
              <div className='normal-box m-2 pb-4' style={{backgroundColor:'white'}}>
                <div style={{fontWeight:700,padding:'10px', color:'red'}}>Pitch Condition</div>
                <img src={pitch} width="100%" height='auto'/>
                <div className='normal-box' style={{fontWeight:700,padding:'10px',margin:'0px 10px'}}>AI Predicted Score: <strong style={{color:'green'}}>{scprePredictor}</strong><small><small>(min)</small></small></div>
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
                        <div style={{width:'250px',marginLeft:'15px',borderRadius:'8px',fontWeight:500,padding:'5px', fontSize:'14px',display:'flex', justifyContent:'center', alignItems:'center',backgroundColor:'lightgreen'}}><img src={bulb} width={18} height={18}/><span>{tossIndicator}</span></div>
                        <div className='mt-3' style={{fontWeight:500,padding:'10px',textAlign:'left'}}>If {team1} bat first</div>
                        <ReactSpeedometer
                          maxValue={100}
                          value={team1Predic.t1}
                          currentValueText={`${team1} ${team1Predic.t1}% - ${team2} ${team1Predic.t2}%`}
                          width={270}
                          height={200}
                          segmentColors={[
                            team1color,
                            team2color,
                          ]}
                          customSegmentStops={[0,team1Predic.t1,100]}
                          customSegmentLabels={[
                            {
                              text: team1,
                              position: "INSIDE",
                              color: "#555",
                            },
                            {
                              text: team2,
                              position: "INSIDE",
                              color: "#555",
                            },
                          ]}/>
          
                        <div style={{fontWeight:500,padding:'10px',textAlign:'left'}}>If {team2} bat first</div>
                        <ReactSpeedometer
                          maxValue={100}
                          value={team2Predic.t1}
                          currentValueText={`${team1} ${team2Predic.t1}% - ${team2} ${team2Predic.t2}%`}
                          width={270}
                          height={200}
                          segmentColors={[
                            team1color,
                            team2color,
                          ]}
                          customSegmentStops={[0,team2Predic.t1,100]}
                          customSegmentLabels={[
                            {
                              text:team1,
                              position: "INSIDE",
                              color: "#555",
                            },
                            {
                              text:team2,
                              position: "INSIDE",
                              color: "#555",
                            },
                          ]}/>
                        </div>
                      </div>}
            {pagestate>2 && <div className='col-12 p-2 '>
              <div className='normal-box m-2 pb-2' style={{backgroundColor:'white'}}>
                <div style={{fontWeight:700,padding:'10px', color:'red'}}>Match Help Center</div>
                <ul style={{margin:'0px 0px 0px 10px', padding:'0px 0px 0px 20px'}}>
                  {matchInfo.map((item)=>{
                    return(
                      <li className='p-1' style={{fontSize:'14px', backgroundColor:item.highlight? 'lightyellow':'', textAlign:'left'}}>{item.desc}</li>
                      )
                    })}
                </ul>
              </div>
            </div>}
            {pagestate>2 && <DreamTeam/>}
            <div className='col-12 mt-2 mb-5' style={{color:'red', padding:'10px', fontWeight:900, fontSize:'16px'}}>
              Powered By <br/>
              <img src={dsclogo} width={270} height={40}/> 
            </div>
        </div>
        <div className='' style={{position: 'fixed',bottom: '20px', right: '20px',zIndex: 9999}}>
          <img onClick={openModal} src={cbot} style={{cursor:'pointer'}} height={55} width={55} />
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
