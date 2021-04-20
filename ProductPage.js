import React, { Component } from 'react';
import ApiService from '../services/ApiService';


class ProductPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            image: '',
            name: '',
            description: '',
            price: '',
        }
    }
    

	  componentDidMount() {
		const jewellryId = +this.props.match.params.id;
		console.log(jewellryId);
		ApiService.fetchJewellryById(jewellryId)
		    .then((res) => {console.log(res.data);
		        let jewellry = res.data;
		        this.setState({
		            id: jewellry.id,
		            image: jewellry.image,
		            imageurl: jewellry.imageurl,
		            name: jewellry.name,
		            description: jewellry.description,
		            price: jewellry.price,
		        })
		    });
	    }
	 onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });


    render(){
            return(
                <div>
                    <div>
                        <img src={this.state.image} onChange={this.onChange} alt="jewel"/>
                    </div>
                    <div>
                        <h5> {this.state.name} </h5>
                        <p> <b>${this.state.price}.00</b></p>
                        <p> {this.state.description} </p>
                        <br/>
                    </div>
                </div>
            )
        }
    }




export default ProductPage;
