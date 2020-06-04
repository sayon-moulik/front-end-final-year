import React, { Component } from 'react'

class Product_info extends Component {
    state = {
        manfacturer: '',
        serial_number: '',
        type : '',
        date: '',
    }

    componentDidMount() {
        this.setState({ manfacturer: this.props.part_details[0] });
        this.setState({ serial_number: this.props.part_details[1] });
        this.setState({ type: this.props.part_details[2] });
        this.setState({ date:Date(this.props.part_details[3]*1000) });
    }

    render() {
        const { manfacturer, serial_number, type, date, is_used} = this.state;
        return (
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Manufacturer : {manfacturer}</h5>
                    <p className="card-text"><strong>Serial Number :</strong>{serial_number}</p>
                    <p className="card-text"><strong>Type : </strong>{type}</p>
                    <p className="card-text"><strong>Date : </strong>{date}</p>
                    
                </div>
            </div>
        )
    }
}

export default Product_info;
