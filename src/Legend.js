import React from "react";
import "./App.css";
import "./App.js"

class Legend extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render() {
        var name = this.props.name;
        var illness = this.props.illness;
        return (
           
        
         
            <div className="Legend">
                <h4>{name}</h4>
                <p>Causes: {illness}</p>
            </div>
            
        )
    }
   
}

export default Legend;