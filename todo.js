import React, { Component } from 'react'

export default class todo extends Component {


constructor(props)
{
 super(props);
  this.state={
      tasks:[{id:1,txt:'First task'},{id:2,txt:'second'},{id:3,txt:'third'}]
      ,currtask:''
  }
}

  onhandle=(e)=>{
  let cval=e.target.value;
  this.setState({currtask:cval});
  }

  Onsubmit=()=>{
let rta=[...this.state.tasks]
  this.setState({
      tasks:rta,
      currtask:''
  })  
}
    render() {
        return (
          <div>
               <div className='input-box'>
                <input onChange={this.onhandle} value={this.state.currtask} type='text'></input>
                <button   onChange={this.Onsubmit}> Add</button>
                </div>
                <div className="Delete">
                    <ul>
                        {
                            this.state.tasks.map(tasks=>(
                               <li key={tasks.id}>
                               <h1>{tasks.txt}</h1>
                               <button>Delete</button>
                            </li>
                                )) 

                        }
                    </ul>

                </div>
         </div>
        )
    }
}
