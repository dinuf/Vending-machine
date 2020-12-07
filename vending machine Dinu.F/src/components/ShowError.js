import React from 'react'


class ShowError extends React.Component{
    constructor(props){
        super(props) 
        this.handleClick=this.handleClick.bind(this)
        this.errorMessage=this.errorMessage.bind(this)
        
    }
    handleClick(){

        this.props.showError(0)
    }

    errorMessage(message,errorComp){

      return  errorComp   =  <>  
                             <div className="mask-popup"></div>
                             <div className="error">
                             <div className="error-message">{message}</div>
                             <button className="error-button" onClick={this.handleClick}>OK</button>
                              </div>
                            </>
    }
    render(){
        if (this.props.Error==0){
            return null;
        }
        else if (this.props.Error==1){

            return this.errorMessage("Wrong code entered.");
        }
        else if (this.props.Error==2){

            return this.errorMessage("Not enough credit.");
        }
        else if (this.props.Error==3){

            return this.errorMessage("Empty stock , buy another product.");
        }
       
       
    }
}
export default ShowError