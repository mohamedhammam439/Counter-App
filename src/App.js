import React, { Component , Fragment } from 'react';
import Counters from './component/Counters';
import Navbar from './component/Navbar';
import './App.css';


class App extends Component {
  state = { 
    counters :[
      {id:1 , value:0},
      {id:2 , value:4},
      {id:3 , value:0},
      {id:4 , value:0}
    ]
   }
   handelIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter)
    counters[index]={...counter}
    counters[index].value++;
    this.setState({ counters })
   }
   handelDecrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter)
    counters[index]={...counter}
    counters[index].value--;
    this.setState({ counters })
   }
   handelDelete=(id)=>{
    let counters=this.state.counters.filter(c => c.id !== id);
    this.setState({counters})
   }
   handelReset=()=>{
     let counters=this.state.counters.map(c=> {
       c.value=0;
       return c;
     })
     this.setState({ counters })
   }
  render() { 
    return ( 
      <section className='App'>
        <Navbar  totalcounter={this.state.counters.filter(c=>c.value>0).length} />
        <div className='container'>
          <div className='row'>
              <button onClick={this.handelReset} className='btn btn-success m-3 ml-4'>Reset</button>
          </div>
        </div>
        {this.state.counters.map(counter=>
          <Counters key={counter.id}
           counter={counter} 
           onDelete={this.handelDelete} 
           onIncrement={this.handelIncrement}
           onDecrement={this.handelDecrement}          
           />
          )}
       

      </section>
     );
  }
}
 
export default App;
