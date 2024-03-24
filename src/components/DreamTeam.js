import React from 'react'
import pitchBack from "../images/all/pitchBack.jpg"
import logo from "../images/all/logodsc2.png"

const keeper=[
    {
        name: "A Rawat",
        isXF: true,
        isDetail: false,
        team: "RCB",
        imgUrl: "anujRawat.png",
    },
    {
        name: 'J Bairstow',
        isXF:false,
        isDetail:false,
        team:'KXIP',
        imgUrl:'JonnyBairstow.png'
    },
    
]

const batsmen=[
    {
        name: "V Kohli",
        isXF: false,
        isDetail: false,
        team: "RCB",
        imgUrl: "viratkohli.png",
    },
    {
        name: "faf Du Ple",
        isXF: false,
        isDetail: false,
        team: "RCB",
        imgUrl: "fafduplesis.png",
    },
    {
        name: 'S Dhawan',
        isXF:false,
        isDetail:false,
        team:'KXIP',
        imgUrl:'ShikharDhawan.png'
    },
]

const allRounders=[
    {
        name: 'Livingstone',
        isXF:false,
        isDetail:false,
        team:'KXIP',
        imgUrl:"Liam_Livingstone.png"
    },  
    {
        name: 'G Maxwel',
        isXF:true,
        isDetail:false,
        team:'RCB',
        imgUrl:"Glenn_Maxwel.png"
    },
    {
        name: 'S Curran',
        isXF:false,
        isDetail:false,
        team:'KXIP',
        imgUrl:"Sam_Curran.png"
    },
    {
        name: "C Green",
        isXF: false,
        isDetail: false,
        team: "RCB",
        imgUrl: "Cameron_Green.png",
    },
]

const bowlers=[
    {
        name: 'Harshal P',
        isXF:false,
        isDetail:false,
        team:'RCB',
        imgUrl:'Harshal_Patel.png'
    },
    {
        name: 'Rabada',
        isXF:false,
        isDetail:false,
        team:'KXIP',
        imgUrl:"Kagiso_Rabada.png"
    },
]

const XF=[
    {
        name: "D Karthik",
        isXF: false,
        isDetail: false,
        team: "RCB",
        imgUrl: "DineshKarthik.png",
    },
    {
        name: 'R Patidar',
        isXF:false,
        isDetail:false,
        team:'RCB',
        imgUrl:'rajatPatidar.png'
    },
]


export default function DreamTeam() {

  return (
      <>
      <div className='col-12 mt-3' style={{fontWeight:700,padding:'10px', color:'red', fontSize:'22px'}}>Dream Team Prediction</div>
    <div className='mb-5 col-12 normal-box' style={{ 
        backgroundImage: `url('${pitchBack}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity:0.9,
        marginBottom:'20px',
        width: '100%',
        height: '100%', // Set height as needed
    }}>
        <div className='mt-4'style={{fontWeight:400,padding:'10px', color:'rgb(248, 249, 243)', fontSize:'12px'}}>Wicket Keepers</div>
        <div  style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
            {keeper.map((player)=>{
                return(
                    <div className={player.isXF? 'normal-box p-1':''} style={{borderStyle:player.isXF? 'dashed':'',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <img src={require(`../images/playerIcon/${player.imgUrl}`)} width={45} height={45}/>
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team=='RCB'? 'white':'black', backgroundColor: player.team=='RCB'? 'black':'white', fontWeight:500 }}>{player.name}</span>
                    </div>
                )
            })}
        </div>
        <div className='mt-4'style={{fontWeight:400,padding:'10px', color:'rgb(248, 249, 243)', fontSize:'12px'}}>batsmen</div>
        <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
            {batsmen.map((player)=>{
                return(
                    <div className={player.isXF? 'normal-box p-1':''} style={{borderStyle:player.isXF? 'dashed':'',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <img src={require(`../images/playerIcon/${player.imgUrl}`)} width={45} height={45}/>
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team=='RCB'? 'white':'black', backgroundColor: player.team=='RCB'? 'black':'white', fontWeight:500 }}>{player.name}</span>
                    </div>
                )
            })}
        </div>
        <div className='mt-4'style={{fontWeight:400,padding:'10px', color:'rgb(248, 249, 243)', fontSize:'12px'}}>All Rounders</div>
        <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
            {allRounders.map((player)=>{
                return(
                    <div className={player.isXF? 'normal-box p-1':''} style={{borderStyle:player.isXF? 'dashed':'',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <img src={require(`../images/playerIcon/${player.imgUrl}`)} width={45} height={45}/>
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team=='RCB'? 'white':'black', backgroundColor: player.team=='RCB'? 'black':'white' , fontWeight:500}}>{player.name}</span>
                    </div>
                )
            })}
        </div>
        <div className='mt-4'style={{fontWeight:400,padding:'10px', color:'rgb(248, 249, 243)', fontSize:'12px'}}>Bowlers</div>
        <div className='mb-4' style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
            {bowlers.map((player)=>{
                return(
                    <div className={player.isXF? 'normal-box p-1':''} style={{borderStyle:player.isXF? 'dashed':'',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <img src={require(`../images/playerIcon/${player.imgUrl}`)} width={45} height={45}/>
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team=='RCB'? 'white':'black', backgroundColor: player.team=='RCB'? 'black':'white', fontWeight:500 }}>{player.name}</span>
                    </div>
                )
            })}
        </div>
        <img style={{position:'absolute', left:'10px', opacity:0.6, zIndex:-2}} src={logo} width={100} height={20}/> 
        <img style={{position:'absolute', right:'10px', opacity:0.6, zIndex:-2}} src={logo} width={100} height={20}/> 
        <br/>
        <div className='normal-box mt-4 mb-2' style={{backdropFilter:'blur(2px)'}}>
            <div style={{fontWeight:500,padding:'10px', color:'rgb(248, 249, 243)', fontSize:'12px'}}>Unique X-Facter</div>
            <div className='mb-2' style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap',}}>
                {XF.map((player)=>{
                    return(
                        <div className={'normal-box p-1'} style={{borderStyle:'',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:'white'}}>
                            <img src={require(`../images/playerIcon/${player.imgUrl}`)} width={45} height={45}/>
                            <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team=='RCB'? 'white':'black', backgroundColor: player.team=='RCB'? 'black':'white', fontWeight:500 }}>{player.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    </>
  )
}
