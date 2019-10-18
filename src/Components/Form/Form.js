import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            img: "",
            name: "",
            price: 0
        }
        this.clearFields = this.clearFields.bind(this);
    }

    addImg = e => {
        this.setState({ img: e.target.value })
    }

    addName = e => {
        this.setState({ name: e.target.value })
    }

    addPrice = e => {
        this.setState({ price: e.target.value })
    }

    clearFields() {
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("input3").value = "";
    }

    //POST REQUEST

    addToInventory = () => {
        const { name, img, price } = this.state;
        axios.post('/api/product', {
            name,
            img,
            price
        })
            .then(response => {
                console.log(response.data);
            })
    }

    handleClick = () => {
        this.addToInventory();
        this.clearFields();
    }

    //PUT REQUEST

    editProductPrice = () => {
        axios.put(`/api/inventory/${this.props.id}`, )
    }

    componentDidUpdate() {
        this.editProductPrice();
    }

    render() {
        return (
            <>
                <div>Form</div>
                <input type="text" id="input1" onChange={this.addImg} />
                <input type="text" id="input2" onChange={this.addName} />
                <input type="text" id="input3" onChange={this.addPrice} />
                <button onClick={this.clearFields}>Clear</button>
                <Link to='/add' ><button onClick={this.handleClick}>Add to Inventory</button></Link>
            </>
        )
    }
}