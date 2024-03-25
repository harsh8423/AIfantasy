import React from 'react'
import pitchBack from "../images/all/pitchBack.jpg"
import logo from "../images/all/logodsc2.png"

const team1='CSK'
const keeper=[
    {
        name: "W Saha",
        isXF: false,
        isDetail: false,
        team: "GT",
        imgUrl: "w_saha.png",
    },
]

const batsmen=[
    {
        name: "S Gill",
        isXF: false,
        isDetail: false,
        team: "GT",
        imgUrl: "gill.png",
    },
    {
        name: "D Michell",
        isXF: true,
        isDetail: false,
        team: "CSK",
        imgUrl: "D_michell.png",
    },
    {
        name: "R Gaikwad",
        isXF: false,
        isDetail: false,
        team: "CSK",
        imgUrl: "RGaikwad.png",
    },
    {
        name: "S Sudarshan",
        isXF: false,
        isDetail: false,
        team: "GT",
        imgUrl: "saiSudarshan.png",
    },
]
    
    const allRounders=[
        {
            name: "A Omarzai",
        isXF: false,
        isDetail: false,
        team: "GT",
        imgUrl: "A_omarzai.png",
    },
    {
        name: "Jadeja",
        isXF: false,
        isDetail: false,
        team: "CSK",
        imgUrl: "jadeja.png",
    },
    {
        name: "R Ravindra",
        isXF: false,
        isDetail: false,
        team: "CSK",
        imgUrl: "rachinRavindra.png",
    },
]

const bowlers=[
    {
        name: "D Chahar",
        isXF: true,
        isDetail: false,
        team: "CSK",
        imgUrl: "deepak_chahar.png",
    },
    {
        name: "Rashid Khan",
        isXF: false,
        isDetail: false,
        team: "GT",
        imgUrl: "rashidKhan.png",
    },
    {
        name: "M Rahman",
        isXF: false,
        isDetail: false,
        team: "CSK",
        imgUrl: "fizz.png",
    },
]

const XF=[
    {
        name: "D Miller",
        isXF: true,
        isDetail: false,
        team: "GT",
        imgUrl: "david_miller.png",
    },
    {
        name: "A Rahane",
        isXF: true,
        isDetail: false,
        team: "CSK",
        imgUrl: "ajinkyaRahane.png",
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
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team==team1? 'white':'black', backgroundColor: player.team==team1? 'black':'white', fontWeight:500 }}>{player.name}</span>
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
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team==team1? 'white':'black', backgroundColor: player.team==team1? 'black':'white', fontWeight:500 }}>{player.name}</span>
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
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team==team1? 'white':'black', backgroundColor: player.team==team1? 'black':'white' , fontWeight:500}}>{player.name}</span>
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
                        <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team==team1? 'white':'black', backgroundColor: player.team==team1? 'black':'white', fontWeight:500 }}>{player.name}</span>
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
                            <span style={{padding:'1px 7px',borderRadius:'4px', fontSize:'11px',color: player.team==team1? 'white':'black', backgroundColor: player.team==team1? 'black':'white', fontWeight:500 }}>{player.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    </>
  )
}
