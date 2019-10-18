import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//Components
import Product from './../Product/Product';


export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            inventory: []
        }
    }

    getInventory = () => {
        axios.get('/api/inventory').then(response => {
            this.setState({ inventory: response.data })
        })

    }

    componentDidMount() {
        this.getInventory();
    }

    updateInventory = arr => {
        this.setState({ inventory: arr })
    }

    deleteProduct = () => {
        axios.delete(`/api/inventory/${this.props.id}`).then(response => {
            console.log(response.data)
        this.updateInventory(response.data)
    })
    }

    render() {
        let myInventory = this.state.inventory.map((element) => {
            return (
                <Product element={element} updateInventory={this.updateInventory} deleteInventory={this.deleteInventory} />
            )
        })
        return (
            <>
                <Link to='/' ><div>Dashboard</div></Link>
                {myInventory}
            </>
        )
    }
}