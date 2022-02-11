import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBarContainer from '../navbar/nav_bar_container';

class Sell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {
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
        year_built: "",
        saves: 0,
        views: 0,
        property_type: "",
        mainPhotoFile: null,
        photoFiles: [],
      },
      mainPhotoUrl: "",
      photoUrls: [],
    }

    this.handleInput = this.handleInput.bind(this);
    this.setDemoListing = this.setDemoListing.bind(this);
    this.resetFormValues = this.resetFormValues.bind(this);
  }

  setDemoListing() {
    const demoListing = {
      user_id: this.props.currentUser.id,
      price: 640000,
      description: "This is the demo listing to save you time filling out forms during testing.",
      city: "Dallas",
      state: "TX",
      zip_code: "75201",
      address: "920 S Harwood St",
      bedrooms: "6",
      bathrooms: "4",
      lot_size: "2200",
      sqft: "5500",
      heating: "Natural gas",
      cooling: "Central air",
      parking: "2 car garage",
      year_built: 1999,
      saves: 0,
      views: 0,
      property_type: "House",
      mainPhotoFile: null,
      photoFiles: [],
    }
    this.setState({
      listing: demoListing
    })
  }

  resetFormValues() {
    this.setState({
      listing: {
        user_id: this.props.currentUser.id,
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
        year_built: "",
        saves: 0,
        views: 0,
        property_type: "",
        mainPhotoFile: null,
        photoFiles: [],
      },
    })
  }


  componentDidMount() {
    this.setState({ user_id: this.props.currentUser.id })
    
  }

  handleInput(e) {
    let listing = { ...this.state.listing }
    listing[e.target.name] = e.target.value;
    this.setState({
      listing
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('listing[user_id]', this.state.listing.user_id);
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

    if (this.state.listing.mainPhotoFile) {
      const mainPhoto = this.state.listing.mainPhotoFile;

      formData.append('listing[large_photo]', mainPhoto);
    }

    if (this.state.listing.photoFiles[0]) {
      const photos = this.state.listing.photoFiles

      for (let i = 0; i < photos.length; i++) {
        formData.append('listing[photos][]', photos[i]);
      }
    }

    this.props.createListing(formData).then(() => this.props.history.push("/profile/selling"));
  }

  handleFiles(e) {
    const files = e.currentTarget.files;

    for (let i = 0; i < files.length; i++) {
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        const newPhotoUrls = this.state.photoUrls.slice();
        newPhotoUrls.push(fileReader.result);
        const newListing = {...this.state.listing}
        newListing.photoFiles.push(files[i]);

        this.setState({
          photoUrls: newPhotoUrls,
          listing: newListing,
        })
      }

      if (files[i]) {
        fileReader.readAsDataURL(files[i]);
      } else {
        this.setState({
          photoUrls: ""
        })
      }
    }

  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        mainPhotoUrl: fileReader.result,
        listing: {
          ...this.state.listing,
          mainPhotoFile: file,
        }
      })
    }

    if (file) {
      fileReader.readAsDataURL(file)
    } else {
      this.setState({ mainPhotoUrl: "" })
    }

  }

  render() {
    const mainPhotoPreview = this.state.mainPhotoUrl ? <img className="photo-preview" src={this.state.mainPhotoUrl} alt="" /> : null
    let previewUrls = this.state.photoUrls;
    
    return (

      <div>
        <NavBarContainer />
        <div className="btn-bar">
          <button onClick={this.setDemoListing} className="white-btn">
            Demo Listing
          </button>
          <button onClick={this.resetFormValues} className="white-btn">
            Reset form
          </button>
        </div>
        <div className="edit-form">
          <div className="home--wrapper">
            <div className='big--title'>Sell your home</div>
          </div>
          <div className='home--wrapper'>
            <div className='big--title'>Home Facts</div>
            <form className="edit-listing-form" onSubmit={this.handleSubmit.bind(this)}>
              <div className="facts-flex">

                <div className="facts-flex-inner">
                  <div className="facts-title">
                    Enter these home facts
                  </div>
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
              </div>


              <input
                type="file"
                onChange={this.handleFile.bind(this)} />

              <div className='main-photo-upload'>
                {mainPhotoPreview}
              </div>

              <input
                type="file"
                onChange={this.handleFiles.bind(this)}
                multiple />

              <div className="small-photos-wrapper">
                {
                  previewUrls.map((previewUrl, idx) => (
                    <div className="small-photos-upload" key={idx}>
                      <img className="photo-preview" src={previewUrl} key={previewUrl} alt="" />
                    </div>
                  ))
                }
              </div>

              <button>List your house!</button>

            </form>

          </div>
        </div>
      </div>




    );
  }
};

export default Sell;