import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';

class EditListing extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      listing: {
        id: props.listing.id,
        user_id: props.currentUser.id,
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

    }

    this.handleInput = this.handleInput.bind(this)
  }



  handleInput(e) {
    let listing = {...this.state.listing}
    listing[e.target.name] = e.target.value;
    this.setState({
      listing
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('listing[user_id]', this.props.listing.user_id);
    formData.append('listing[price]', this.state.listing.price);
    formData.append('listing[address]', this.state.listing.address);
    formData.append('listing[city]', this.state.listing.city);
    formData.append('listing[state]', this.state.listing.state);
    formData.append('listing[zip_code]', this.state.listing.zip_code);
    formData.append('listing[bedrooms]', this.state.listing.bedrooms);
    formData.append('listing[bathrooms]', this.state.listing.bathrooms);
    formData.append('listing[lot_size]', this.state.listing.lot_size);
    formData.append('listing[property_type]', this.state.listing.property_type);
    formData.append('listing[year_built]', this.state.listing.year_built);
    formData.append('listing[description]', this.state.listing.description);
    formData.append('listing[parking]', this.state.listing.parking);
    formData.append('listing[heating]', this.state.listing.heating);
    formData.append('listing[cooling]', this.state.listing.cooling);
    formData.append('listing[sqft]', this.state.listing.sqft);
    formData.append('listing[saves]', this.state.listing.saves);
    formData.append('listing[views]', this.state.listing.views);

    if (this.state.listing.photoFile) {
      formData.append('listing[photo]', this.state.listing.photoFile);
    }


    console.log(this.state.listing);

    this.props.editListing(this.state.listing);
    this.props.handleClick("selling");
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
    const preview = this.state.listing.photoUrl ? <img src={this.state.listing.photoUrl} /> : null

    return (

      <div>

        <div className="edit-form">
          <div className="sell-form-banner">
            <div className="sell-form-picture">
              <form className="edit-listing-form" onSubmit={this.handleSubmit.bind(this)}>

                <div className="input-label-wrapper">

                  <div className="input-label-div">
                    <label>Price</label>
                    <input
                      name="price"
                      type="number"
                      value={this.state.listing.price}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="input-label-div">
                    <label>Street address</label>
                    <input
                      name="address"
                      type="text"
                      value={this.state.listing.address}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="input-label-div">
                    <label>City</label>
                    <input
                      name="city"
                      type="text"
                      value={this.state.listing.city}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="input-label-div">
                    <label>State</label>
                    <input
                      name="state"
                      type="text"
                      value={this.state.listing.state}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="input-label-div">
                    <label>Zip code</label>
                    <input
                      name="zip_code"
                      type="text"
                      value={this.state.listing.zip_code}
                      onChange={this.handleInput}
                    />
                  </div>

                </div>



                <div className="input-label-div">
                  <label>Bedrooms</label>
                  <input
                    name="bedrooms"
                    type="number"
                    value={this.state.listing.bedrooms}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Bathrooms</label>
                  <input
                    name="bathrooms"
                    type="number"
                    value={this.state.listing.bathrooms}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Property type</label>
                  <input
                    name="property_type"
                    type="text"
                    value={this.state.listing.property_type}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Year built</label>
                  <input
                    name="year_built"
                    type="number"
                    value={this.state.listing.year_built}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Lot size</label>
                  <input
                    name="lot_size"
                    type="text"
                    value={this.state.listing.lot_size}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Heating</label>
                  <input
                    name="heating"
                    type="text"
                    value={this.state.listing.heating}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Cooling</label>
                  <input
                    name="cooling"
                    type="text"
                    value={this.state.listing.cooling}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Parking</label>
                  <input
                    name="parking"
                    type="text"
                    value={this.state.listing.parking}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Sqft</label>
                  <input
                    name="sqft"
                    type="number"
                    value={this.state.listing.sqft}
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-label-div">
                  <label>Description</label>
                  <input
                    name="description"
                    type="text"
                    value={this.state.listing.description}
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

export default EditListing;