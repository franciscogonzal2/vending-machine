import React, { Component } from "react";
import axios from 'axios';
import Loader from "../Loader/Loader";
import "./products.scss"

class Products extends Component {
    constructor(props) {
        super(props);
        this.preparedProduct = [];
        this.state = {
            food: {},
            showInfo: false,
        };
    }
    componentDidMount() {
        axios.get(`https://private-25a4a0-franciscogonzal2.apiary-mock.com/vending-machine`)
            .then(res => {
                const food = res.data;
                this.setState({ food });
            })
    }

    componentDidUpdate(prevState) {
        if (prevState.food != this.state.food && this.state.showInfo === false) {
            this.setState({
                showInfo: true,
            })
        }
    }

    itemSelected(item) {
        this.preparedProduct.push(item);
        this.setState({
            dummyProduct:!this.state.dummyProduct,
        })
    }

    countDown(minutes){
        let time = minutes*60;
        const minute = Math.floor(time/60);
        let seconds = time % 60;
        return(
        <div className={"timer"}>{`${minute}:${seconds}`}</div>
        )
     
    }
    renderPreparedProduct() {
        let prepared = this.preparedProduct && this.preparedProduct.map((item, key) => {
            return (
                <div key={key}  className ="onPrepare">
                    <div  className ="itemBock">
                        <div className ={"nameProduct"}> {item.name} </div>
                        <div className={"classOfProdcuts"}> {item.Price} </div>
                        <div className={"timeProduct"}> {`${item.PrepareTime}:00 Minutes`}</div>
                        {this.countDown(item.PrepareTime)}
                    </div>
                </div>
            );
        }
        )
        return (
            <div className="onPrepareproduct">
                {prepared}
            </div >
        )
    }
    renderProductList() {
        const { food } = this.state;
      
        let Item = food && food.Prodcuts.map((item, key) => {
            return (
                <div key={key} className="containerProduct">
                    <div><img src={item.ImageUrl} alt={"image food"} /></div>
                    <div className="itemDescription">
                        <div> {`Name:${item.name}`} </div>
                        <div> {`Pric: $${item.Price}.00`} </div>
                        <div> {`Time:${item.PrepareTime}:00M`}</div>
                        <div>
                            <button onClick={() => { this.itemSelected(item) }}>Select</button>
                        </div>
                    </div>
                </div>
            );
        }
        )
        return (
            <div className="productList">
                {Item}
            </div >
        )

    }

    render() {
        return (
            this.state.showInfo ?
                <div className="wrapper">
                    <div className="title">
                        {this.state.food.ProductsMachineTitle}
                    </div>
                    {this.renderProductList()}
                    {this.preparedProduct.length > 0 && this.renderPreparedProduct()}
                </div>
                :
                <Loader />
        );
    }
}

export default Products;