import React from "react";
import { formatPrice, reverseFormatPrice } from "../../utils/format_price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlassDollar,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

class LocationDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      city: "",
      zip_code: "",
      currentDropdown: props.currentDropdown,
    }
    this.updateZipCode = this.updateZipCode.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateStateAbr = this.updateStateAbr.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderFormType = this.renderFormType.bind(this);
  }

  updateZipCode(e) {
    let new_zip = e.target.value;
    this.setState({
      zip_code: new_zip,
    })
  }

  updateCity(e) {
    let new_city = e.target.value;
    this.setState({
      city: new_city,
    })
  }

  updateStateAbr(e) {
    let new_state_abr = e.target.value;
    this.setState({
      state: new_state_abr,
    })
  }


  componentDidMount() {
    this.setState({
      state: "",
      city: "",
      zip_code: "",
      currentDropdown: this.props.currentDropdown,
    })
  }



  handleSubmit(e) {
    e.preventDefault();
    if (this.state.currentDropdown === "zip_code") {
      const filter = "zip_code";
      let val = this.state.zip_code;
      if (val === "") {
        val = "none"
      }
      this.props.updateFilter(filter, val).then(this.props.exitModal(""));
    } else if (this.state.currentDropdown === "state") {
      const filter = "state"
      let val = this.state.state;
      if (val === "") {
        val = "none"
      }
      this.props.updateFilter(filter, val).then(this.props.exitModal(""));
    } else if (this.state.currentDropdown === "city") {
      const filter = "city"
      let val = this.state.city;
      if (val === "") {
        val = "none"
      }
      this.props.updateFilter(filter, val).then(this.props.exitModal(""));
    }

  }

  renderFormType() {

    let type = this.state.currentDropdown;

    let searchInput;


  
    switch (type) {
      case "city":
        searchInput =
          <input
            className="home-price-input"
            placeholder="city"
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.updateCity}
          />
        break;
      case "state":
        searchInput = <input
          className="home-price-input"
          placeholder="state"
          name="state"
          type="text"
          value={this.state.state}
          onChange={this.updateStateAbr}
        />
        break;
      case "zip_code":
        searchInput = <input
          className="home-price-input"
          placeholder="zip code"
          name="zip_code"
          type="text"
          value={this.state.zip_code}
          onChange={this.updateZipCode}
        />
        break;
      default:
        searchInput = <div></div>
        break;
    }
    return searchInput;
  }

  render() {

    
    let inputDiv = this.renderFormType();

    return (
      <div className="price-dropdown-container">
        
        <form className="price-form-outer" onSubmit={this.handleSubmit} autoComplete="off">
        {/* <div className="price-desc">ZIP code</div> */}
          <div className="price-form-inner">
          
            <div className="pd-input-wrapper">
              <div className="min-flex">
                {/* <input
                  className="home-price-input"
                  placeholder="zip code"
                  name="zip_code"
                  type="text"
                  value={this.state.zip_code}
                  onChange={this.updateZipCode}
                /> */}
                {inputDiv}
                <div className="min-prices-wrap">

                </div>
              </div>



            </div>
          </div>

          <div className="sub-price-flex">
            <button className="sub-price-btn" type="submit">
              Done
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LocationDropdown;