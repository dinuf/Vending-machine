import React from 'react'
import ShowEror from './ShowError'

class AddCode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            inputCode: 0,
            Error: 0,
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showError = this.showError.bind(this);
       
        

    }

    handleClick(event) {
        event.preventDefault();
        if (this.state.currentBalance == 0) {

            // "Not enough credit.";
            return;
        }
        const result = this.validateCode()
        if (result > -1) {
            //succes
            this.props.setStock(result)
            this.props.setBalance(-this.props.products[result].price);
        }
        this.setState({inputCode:""});
    }

    validateCode() {

        let codeindex = -1;

        this.props.products.map((elem, index) => {
            if (elem.code == this.state.inputCode) {
                codeindex = index
            }
        })

        if (codeindex < 0) {
            // "Wrong code entered.";   
            this.showError(1)    
            return -1;
        }

        if (this.props.products[codeindex].price > this.props.currentBalance) {
            // "Not enough credit.";
            this.showError(2)
            return -1;
        }

        if (this.props.products[codeindex].quantity <= 0) {
            //"Empty stock , buy another product.";
            this.showError(3)
            return -1;
        }

        return codeindex;
    }


    showError(num) {

      this.setState({Error: num})

    }

    handleChange(event) {

        if (event.target.value < 0){
           event.target.value = 0 
           return
        }
        if (event.target.value > 999){
            event.target.value = 0 
            return
        }
        this.setState({
            inputCode: event.target.value,
        })
    }

    render() {
        return (
            <>
            <form className="add-code-form">
                <input className="inputs" onChange={this.handleChange} value={this.state.inputCode} type="number" />
                <input className="submit-button" value="ADD CODE" onClick={this.handleClick} type="submit" />
            </form>
            <ShowEror 
            showError={this.showError}
            Error={this.state.Error}/>
            </>
        )
    }
}

export default AddCode