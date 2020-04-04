import React, { Component } from 'react';

class Counters extends Component {
   
    formatcounter=() =>{
        const {value} = this.props.counter;
        return value === 0 ? "zero" : value ;
    }

    getclasses=()=>{
        let classes='badge m-2 col-md-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }
    
    render() { 
       
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 d-flex'>
                        <span className={this.getclasses()}  > {this.props.counter.value} </span>
                        <div className='col-md-10 d-flex'>
                            <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm m-1'>+</button>
                            <button onClick={()=> this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value===0 ? 'disabled' : ""} className='btn btn-secondary btn-sm m-1'>-</button>
                            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-1'>X</button>
                        </div>  
                    </div>    
                </div>
            </div>
         );
    }
}
 
export default Counters;
