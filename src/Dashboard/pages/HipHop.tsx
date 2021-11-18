import React from 'react'
import './CategoryMedia.css';
import './page2.css'
import PopC from "../Images/PopC.jpg";
import Num from "../Images/Num.png";
import Quizes from "../Images/Quizes.png";
import Star from "../Images/Star.png";
import Medal from "../Images/Medal.png";
import Points from "../Images/Points.png";
import Hand from "../Images/Hand.png";
import Flag from "../Images/Flag.png";
import Record from "../Images/Record.png";
import PlayButton from '../components/PlayButton/PlayButton';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import back from "../Images/backbutton.png"


function HipHop() {
  const players:any = [{
    name: "Mokokoane",
    score: 21
  },{
    name: "Relebohile",
     score: 50,
  },{
    name: "malepa",
    score: 89,
  },{
    name:"LyonmkMokokoaneRelebohile",
    score: 90,
  },{
    name: "MK",
    score: 10,
  },{
    name: "motlatsi",
    score: 45,
  },{
    name:"Nthako",
    score: 32,
},{
  name: "win",
  score: 87,
},
];

players.sort((a:any, b:any) => b.score - a.score); 
    return (
      <div className="screen">
      <div className="hamburger">
        <Navbar />
       
        </div>
        <div className="sidebar">
        <div className="Select">
          <img className="popc"  src={PopC} alt="Pop" />
        </div>

        <div className="Numplays">
          <span><img id="Num" src={Num} alt="Num"  />
             <span id="PlaysText"> 100 Plays</span>
           </span>
          <span><img id="Quizes" src={Quizes} alt="Quizes"  /> 
          <span id="QuizesText">15 Quizzes </span>
          </span>
          <span><img id="Star" src={Star} alt="Star" width="26px" height="26px" /></span>
          <Link  to="/popculture">
                  <img className="backButton" src={back} alt="back" width="50px" height="50px" />
          </Link>
        </div>

        <div id="Ranks1">
          <span id="Ranks-header">Category Ranks</span>

          <div className="One"><span id ="One">1</span>
            <span id  ="playerName1">{players[0].name}</span>
            <span id ="score1">{players[0].score}</span>
          </div>

          <div className="One"><span id ="One">1</span>
            <span id  ="playerName1">{players[0].name}</span>
            <span id ="score1">{players[0].score}</span>
          </div>

          <div className="Two">
            <span id ="Two">2</span> 
            <span id  ="playerName2">{players[1].name}</span>
            <span id ="score2">{players[1].score}</span>
          </div>

          <div className="Three">
            <span id ="Three">3</span> 
            <span id  ="playerName3">{players[2].name}</span>
            <span id ="score3">{players[2].score}</span>
          </div>
          <div className="Four">
            <span id ="Four">4</span> 
            <span id  ="playerName4">{players[3].name}</span>
            <span id ="score4">{players[3].score}</span>
          </div>
          <div className="Five">
            <span id ="Five">5</span> 
            <span id  ="playerName5">{players[4].name}</span>
            <span id ="score5">{players[4].score}</span>
          </div>
          <div className="Six">
            <span id ="Six">6</span> 
            <span id  ="playerName6">{players[5].name}</span>
            <span id ="score6">{players[5].score}</span>
          </div>
          <div className="Seven">
            <span id ="Seven">7</span> 
            <span id  ="playerName7">{players[6].name}</span>
            <span id ="score7">{players[6].score}</span>
          </div>

    

          <div className="Three">
            <span id ="Three">3</span> 
            <span id  ="playerName3">{players[2].name}</span>
            <span id ="score3">{players[2].score}</span>
          </div>
          <div className="Four">
            <span id ="Four">4</span> 
            <span id  ="playerName4">{players[3].name}</span>
            <span id ="score4">{players[3].score}</span>
          </div>
          <div className="Five">
            <span id ="Five">5</span> 
            <span id  ="playerName5">{players[4].name}</span>
            <span id ="score5">{players[4].score}</span>
          </div>
          <div className="Six">
            <span id ="Six">6</span> 
            <span id  ="playerName6">{players[5].name}</span>
            <span id ="score6">{players[5].score}</span>
          </div>
          <div className="Seven">
            <span id ="Seven">7</span> 
            <span id  ="playerName7">{players[6].name}</span>
            <span id ="score7">{players[6].score}</span>
          </div>

          <img id="Medal" src={Medal} alt="Medal" />
          <img id="Medal-1" src={Medal} alt="Medal" />
          <img id="Medal-2" src={Medal} alt="Medal" />
          <img id="Medal-3" src={Medal} alt="Medal" />
          <img id="Medal-4" src={Medal} alt="Medal" />
          <img id="Medal-5" src={Medal} alt="Medal" />
          <img id="Medal-6" src={Medal} alt="Medal" />
          <img id="Points-1" src={Points} alt="Points"/>
          <img id="Points-2" src={Points} alt="Points"/>
          <img id="Points-3" src={Points} alt="Points"/>
          <img id="Points-4" src={Points} alt="Points"/>
          <img id="Points-5" src={Points} alt="Points"/>
          <img id="Points-6" src={Points} alt="Points"/>
          <img id="Points-7" src={Points} alt="Points"/>

           
        </div>
       
        
        <PlayButton />
        <span id="HipHopText">@quizapp</span>
        <div id="Description">
            <h3>Description</h3>
        </div>
        <div id="DescriptionContainer">
            <p>In this game the player will be asked 10 hip hop related questions questions,
               the questions can either be multiple choice questions 4 answers to choose from
                or it could be a true or false question where they can choose whether an answer is correct 
                or not. Emjoy aim for the highest score!</p>

        </div>
        <div id="SampleQuestions">
            <h3>Sample Questions</h3>
            <img  className="HandImage" src={Hand} alt="Hand"/>
            
            
        </div>
        <span id="Tupac"><p>Who killed 2puc?</p></span>
        <div>
        <img  className="RecordImage" src={Record} alt="Hand"/>
        </div>
        <span id="Records"><p>Which artist has sold the most records?</p></span>
        <div>
        <img  className="FlagImage" src={Flag} alt="Flag"/>
        </div>
        <span id="FlagText"><p>Who are these people?</p></span>
            
        </div>
        </div>
    )
}

export default HipHop;