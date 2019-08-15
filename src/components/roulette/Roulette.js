import React from "react";
import RoulettePiece from "./RoulettePiece";
import "./Roulette.css";

class Roulette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: "spin the wheel!",
      textInside: "stuff",
      projects: ["p1", "p2"],
      stopped: -1,
    }
  }


  render() {
    return (
      <div>
        <div><svg style={(() => {
            const style = {height: 300, width: 300};
            if(this.state.stopped > 0) style.transform = `rotate(${this.state.stopped}deg)`
            console.log(style);
            return style;
          })()}>
          <g id="spinner" className={this.state.stopped > 0 ? "stopped" : "" }>
            {this.state.projects.map(
              (projName, projIdx)  => {
                const rate = 2*Math.PI / this.state.projects.length;
                return (<RoulettePiece centerX={150} centerY={150} length={120} angularOffset={projIdx * rate} angularWidth={rate} ></RoulettePiece>)
              }
            )}
          </g>
        </svg></div>  
        <div>
          {this.state.projects.map(
            (proj, i) => (<span key={i}>{proj}</span>)
          )}
        </div>
        <div id="rouletteInput">
          <input type="text" value={this.state.textInside} onChange={(ev)=>{this.setState({textInside: ev.target.value})}}></input>
          <button 
            onClick={() => {
              console.log(this.state.projects);
              if(this.state.textInside !== "") this.setState({
                projects: [...this.state.projects, this.state.textInside],
                textInside: ""
              })}}
          >add project</button>
          <button onClick={()=>this.setState({stopped: -1})}>turn</button>
          <button onClick={()=>this.setState({stopped: 120})}>stop</button>
          </div>
      </div>
    )
  }
  
}


export default Roulette;
