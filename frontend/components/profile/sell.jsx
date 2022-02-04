import React from 'react';
import { createListing } from '../../actions/listing_actions';
import NavBarContainer from '../navbar/nav_bar_container';

class Sell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: null,
            price: "",
            description: "",
            city: "",
            state: "",
            zip_code: "",
            address: "",
            bedrooms: "",
            bathrooms: "",
            lot_size: "",
            sqft: "",
            heating: "",
            cooling: "",
            parking: "",
            saves: 0,
            views: 0,
            property_type: "",


            photoFile: null,
        }

        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount() {


        this.setState({ user_id: this.props.currentUser.id })

    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('listing[user_id]', this.state.user_id);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[address]', this.state.address);
        formData.append('listing[city]', this.state.city);
        formData.append('listing[state]', this.state.state);
        formData.append('listing[zip_code]', this.state.zip_code);
        formData.append('listing[bedrooms]', this.state.bedrooms);
        formData.append('listing[bathrooms]', this.state.bathrooms);
        formData.append('listing[lot_size]', this.state.lot_size);
        formData.append('listing[property_type]', this.state.property_type);
        formData.append('listing[year_built]', this.state.year_built);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[parking]', this.state.parking);
        formData.append('listing[heating]', this.state.heating);
        formData.append('listing[cooling]', this.state.cooling);
        formData.append('listing[sqft]', this.state.sqft);
        formData.append('listing[saves]', this.state.saves);
        formData.append('listing[views]', this.state.views);

        if (this.state.photoFile) {
            formData.append('listing[photo]', this.state.photoFile);
        }

        this.props.createListing(formData);

        // $.ajax({
        //     url: '/api/listings',
        //     method: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // })
    }

    handleFile(e) {
        // debugger
        // const file = e.currentTarget.files[0]
        // const fileReader = new FileReader();
        // fileReader.onloadend = () => {
        //     this.setState({photoFile: file, photoUrl: fileReader.result})
        // }
        // if (file) {
        //     fileReader.readAsDataURL(file);
        // }
        this.setState({ photoFile: e.currentTarget.files[0] });
    }



    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null

        return (

            <div>

                <div className="edit-form">
                    <NavBarContainer />
                    <div className="sell-form-banner">
                        <div className="sell-form-picture">
                            <form className="edit-listing-form" onSubmit={this.handleSubmit.bind(this)}>

                                <div className="input-label-wrapper">

                                    <div className="input-label-div">
                                        <label>Price</label>
                                        <input
                                            name="price"
                                            type="number"
                                            value={this.state.price}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>Street address</label>
                                        <input
                                            name="address"
                                            type="text"
                                            value={this.state.address}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>City</label>
                                        <input
                                            name="city"
                                            type="text"
                                            value={this.state.city}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>State</label>
                                        <input
                                            name="state"
                                            type="text"
                                            value={this.state.state}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>Zip code</label>
                                        <input
                                            name="zip_code"
                                            type="text"
                                            value={this.state.zip_code}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                </div>



                                <div className="input-label-div">
                                    <label>Bedrooms</label>
                                    <input
                                        name="bedrooms"
                                        type="number"
                                        value={this.state.bedrooms}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Bathrooms</label>
                                    <input
                                        name="bathrooms"
                                        type="number"
                                        value={this.state.bathrooms}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Property type</label>
                                    <input
                                        name="property_type"
                                        type="text"
                                        value={this.state.property_type}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Year built</label>
                                    <input
                                        name="year_built"
                                        type="number"
                                        value={this.state.year_built}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Lot size</label>
                                    <input
                                        name="lot_size"
                                        type="text"
                                        value={this.state.lot_size}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Heating</label>
                                    <input
                                        name="heating"
                                        type="text"
                                        value={this.state.heating}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Cooling</label>
                                    <input
                                        name="cooling"
                                        type="text"
                                        value={this.state.cooling}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Parking</label>
                                    <input
                                        name="parking"
                                        type="text"
                                        value={this.state.parking}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Sqft</label>
                                    <input
                                        name="sqft"
                                        type="number"
                                        value={this.state.sqft}
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="input-label-div">
                                    <label>Description</label>
                                    <input
                                        name="description"
                                        type="text"
                                        value={this.state.description}
                                        onChange={this.handleInput}
                                    />
                                </div>


                                <div className="img-upload">
                                    <input type="file" onChange={this.handleFile.bind(this)} />

                                    {preview}

                                </div>

                                <button>List your house!</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>



        );
    }
};

export default Sell;