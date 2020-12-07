import React from 'react';
import ReactDOM from 'react-dom';
import Product from './components/Product'
import AddCash from './components/addCash'
import AddCode from './components/addCode'
import './index.css';
import reportWebVitals from './reportWebVitals';





class App extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                {  price: 12, quantity: 0, code: "111" },
                {  price: 15, quantity: 8, code: "222" },
                {  price: 11, quantity: 9, code: "333" },
                {  price: 6, quantity: 7, code: "444"  },
                {  price: 1, quantity: 3, code: "555"  },
                {  price: 1, quantity: 4,  code: "666" },
            ],
            currentBalance: 20,
            updated: -1
        };

        this.setBalance = this.setBalance.bind(this)
        this.setStock = this.setStock.bind(this)
    }


    setBalance(newValue) {
        this.setState({ currentBalance: this.state.currentBalance + Number(newValue) })
    }

    setStock(index) {
        
        const product = [...this.state.products];
        product[index].quantity = product[index].quantity - 1;
        this.setState(product);
        this.updateAnimation(index);
    }


    updateAnimation(index){
        this.setState({
            updated : index
        });
        setTimeout(() => {
            this.setState({ 
                updated : -1 
            });
        }, 1000);
    }
        
    render() {
      let productsList = this.state.products.map((elem, index)=>{
   
       return <Product animate = {this.state.updated == index ? ' play-anim' : ''} key={elem.code}  price={elem.price} pieces={elem.quantity} code={elem.code}/>
        
      })
      
     
        return (
            <div className="wrapper">
                <div className="products-container">
                {productsList}
                </div>
                <p className="current-balance">Current Balance : {this.state.currentBalance} $</p>
                <div className="validation-forms">
                <AddCash
                    setBalance={this.setBalance} 
                />
                <AddCode
                    setBalance={this.setBalance}
                    currentBalance={this.state.currentBalance} 
                    products={this.state.products}
                    setStock={this.setStock} 
                />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();