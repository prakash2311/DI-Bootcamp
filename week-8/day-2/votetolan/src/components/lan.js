// import React from "react";

// class Lan extends React.Component{
//     constructor(){
//         super();
//         this.state={}
//     }
//     render(){
//         const {score} = this.props 
//         function incre(e){
//             let num = e.target.id
//             if (num === 'score1'){ 
//                 score.score1++  
//             }
//             if(num === 'score2'){ 
//                 score.score2++
//             }
//             if(num === 'score3'){   
//                 score.score3++
//             }
//             if(num === 'score4'){
//                 this.setState({score4:score.score4++})
//                 // console.log(score.score4);
//             }
//         }
//         return( 
//             <div>
//                 <h1>Vote Your Language</h1>
//                 <h2>{score.score1} PHP<button id='score1' onClick={incre}>Vote Here</button></h2>
//                 <h2>{score.score2} PYTHON<button id='score2' onClick={incre}>Vote Here</button></h2>
//                 <h2>{score.score3} JAVASCRIPT<button id='score3' onClick={incre}>Vote Here</button></h2>
//                 <h2>{score.score4} JAVA<button id='score4' onClick={incre}>Vote Here</button></h2>
//             </div>
//         )
//     }
// }

// export default Lan



// import { handle } from "express/lib/application";
import React from "react";

class Lan extends React.Component{
    constructor(){
        super();
this.state = {
    languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ]
}
handleClick = (lang) => {
    lang.vote++;
    console.log('vote');
    this.setState({languages:this.state.languages})
}

    }

    render(){
        return(
            <div>
                <h1>  Voting app </h1>
                {
                    this.state.languages.map((items,i)=>{
                        return(
                            <div key={i} style={{border:'1px solid #fff', padding:'20px', margin:'10px'}}>
                                {items.name} {items.votes}
                               <button onClick={this.handleClick(items)}>vote</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
export default Lan