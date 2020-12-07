import React from 'react'

class AddCash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.setBalance(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }

    handleChange(event) {

        if (event.target.value < 0){
            return event.target.value=0;
        }

        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <form className="add-cash-form">
                <input className="inputs" onChange={this.handleChange} value={this.state.inputValue} type="number" />
                <input className="submit-button" value="ADD CREDIT" onClick={this.handleClick} type="submit" />
            </form>
        )
    }
}

export default AddCash