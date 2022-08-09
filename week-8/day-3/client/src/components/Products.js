import React from 'react';
import './product.css'

class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            Products: []
        }
    }

    componentDidMount(){
        fetch('')
        .then(res => res.json())
        .then(data => {
            this.setState({})
        })
    }
    render(){
        return(
            <div>
                <h1>shop</h1>
             {
                 this.state.products.map(item =>{
                     return(
                         <div className='product' key={item.id}>
                             <h2>{item.name}</h2>
                             <h4>{item.name}</h4>
                         </div>
                     )
                 })
             }
            </div>
        )
    }
}

export default Products