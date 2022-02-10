import React from "react";

class PriceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 0,
      maxPrice: 100000,
    }
    this.updateMinPrice = this.updateMinPrice.bind(this);
    this.updateMaxPrice = this.updateMaxPrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      minPrice: 0,
      maxPrice: 10000
    })
  }

  updateMinPrice(e) {
    let newMin = e.target.value;
    console.log(newMin);
    this.setState({
      minPrice: newMin
    })
  }

  updateMaxPrice(e) {
    let newMax = e.target.value;
    console.log(newMax);
    this.setState({
      maxPrice: newMax
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchListings({
      filter: {
        price_range: {
          min: this.state.minPrice,
          max: this.state.maxPrice
      } 
    }
    })
  }

  render() {
    
    return(
      <div className="price-dropdown-container">
        <form className="price-form" onSubmit={this.handleSubmit}>

          <div className="pd-input-wrapper">
            <input
              name="minPrice"
              type="number"
              value={this.state.minPrice}
              onChange={this.updateMinPrice}
            />
            <input
              name="maxPrice"
              type="number"
              value={this.state.maxPrice}
              onChange={this.updateMaxPrice}
            />
            <button className="sub-price-btn">Done</button>
          </div>
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