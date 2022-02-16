import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlassDollar,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

class PriceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: "",
      maxPrice: "",
    }
    this.updateMinPrice = this.updateMinPrice.bind(this);
    this.updateMaxPrice = this.updateMaxPrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      minPrice: "",
      maxPrice: ""
    })
  }

  updateMinPrice(e) {
    let newMin = e.target.value;

    this.setState({
      minPrice: newMin
    })
  }

  updateMaxPrice(e) {
    let newMax = e.target.value;

    this.setState({
      maxPrice: newMax
    })
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.updateFilter({
  //       price_range: {
  //         min: this.state.minPrice,
  //         max: this.state.maxPrice
  //     }
  //   })
  // }

  handleSubmit(e) {
    e.preventDefault();
    const filter = 'price_range';
    const val = {
      min: this.state.minPrice,
      max: this.state.maxPrice
    }
    this.props.updateFilter(filter, val);
  }

  render() {

    return (
      <div className="price-dropdown-container">
        <form className="price-form" onSubmit={this.handleSubmit}>
          <div className="n">

          </div>
          <div className="pd-input-wrapper">
            <input
              className="home-price-input"
              placeholder="Min"
              name="minPrice"
              type="number"
              value={this.state.minPrice}
              onChange={this.updateMinPrice}
            />
            <div className="price-txt-mid">
              to
            </div>
            <input
              className="home-price-input"
              placeholder="Max"
              name="maxPrice"
              type="number"
              value={this.state.maxPrice}
              onChange={this.updateMaxPrice}
            />
          </div>

          <button className="sub-price-btn">
              <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
          </button>


          {/* <div className="price-btns-flex">
            <div className="price-btn" onClick={this.}>
              $500,000+
            </div>
          </div>
          <div className="price-btns-flex">
            <div className="price-btn" onClick={this.updateMinPrice(1000000)}>
              $1,000,000-
            </div>
          </div> */}
        </form>
      </div>
    )
  }
}

export default PriceDropdown;