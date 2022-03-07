import React from "react";
import { formatPrice, reverseFormatPrice } from "../../utils/format_price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlassDollar,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

class PriceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: "",
      maxPrice: "",
      currentButtons: "min",
      priceFilter: props.priceFilter,
    }
    this.updateMinPrice = this.updateMinPrice.bind(this);
    this.updateMaxPrice = this.updateMaxPrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMinPriceClick = this.handleMinPriceClick.bind(this);
    this.handleMaxPriceClick = this.handleMaxPriceClick.bind(this);
    this.minPrices = this.minPrices.bind(this);
    this.maxPrices = this.maxPrices.bind(this);
    this.toggleMinButtons = this.toggleMinButtons.bind(this);
    this.toggleMaxButtons = this.toggleMaxButtons.bind(this);
    this.setWrapRef = this.setWrapRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleMaxButtons() {
    this.setState({
      currentButtons: "max",
    })
  }

  toggleMinButtons() {
    this.setState({
      currentButtons: "min",
    })
  }

  setWrapRef(ele) {
    this.wrapRef = ele;
  }

  handleOutsideClick(e) {
    if (this.wrapRef && !this.wrapRef.contains(e.target)) {
      const filter = 'price_range';
      const val = {
        min: this.state.minPrice,
        max: this.state.maxPrice
      }
      this.props.updateFilter(filter, val).then(this.props.exitModal(""));
    }
  }

  handleMinPriceClick(e) {
    let min = parseInt(reverseFormatPrice(e.target.innerHTML));
    // let min = parseInt(e.target.innerHTML);
    this.setState({
      minPrice: min,
      currentButtons: 'max'
    })
  }

  handleMaxPriceClick(e) {
    let max = parseInt(reverseFormatPrice(e.target.innerHTML));
    this.setState({
      maxPrice: max,
      currentButtons: "min",
    })
  }

  componentDidMount() {
    let filter = this.props.priceFilter;

    document.addEventListener("mousedown", this.handleOutsideClick);

    this.setState({
      minPrice: "",
      maxPrice: "",
      currentButtons: 'min',
      priceFilter: filter
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

  handleSubmit(e) {
    e.preventDefault();
    const filter = 'price_range';
    const val = {
      min: this.state.minPrice,
      max: this.state.maxPrice
    }
    this.props.updateFilter(filter, val).then(this.props.exitModal(""));
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  minPrices(lowPrice = 0) {
    let prices = [];
    let maxPrice;
    if (this.state.maxPrice === "") {
      maxPrice = "any"
    } else {
      maxPrice = this.state.maxPrice;
    }
    if (maxPrice === "any") {
      for (let i = 0; i < 10; i++) {
        prices.push(lowPrice + (100000 * i));
      }
    } else {
      for (let i = 0; i < 10; i++) {
        if (i === 0) {
          if (maxPrice >= 1250000) {
            prices.unshift(maxPrice - 250000);
          } else if (maxPrice >= 100000) {
            prices.unshift(maxPrice - 100000);
          } else {
            prices.unshift(0);
          }
        } else {
          if (prices[0] >= 1250000) {
            prices.unshift(prices[0] - 250000);
          } else if (prices[0] >= 100000) {
            prices.unshift(prices[0] - 100000);
          } else if (prices[0] > 0) {
            prices.unshift(0);
          }
        }

      }

    }
    return prices;
  }

  maxPrices() {
    let prices = [];
    let minPrice;
    if (this.state.minPrice === "") {
      minPrice = 500000;
    } else if (this.state.minPrice >= 1000000) {
      minPrice = this.state.minPrice + 2500000;
    } else {
      minPrice = this.state.minPrice + 100000;
    }
    for (let i = 0; i < 10; i++) {
      let price = minPrice + (100000 * i);
      if (price <= 1000000) {
        prices.push(price);
      } else if (i > 0) {
        prices.push(prices[i-1] + 250000);
      } else if (prices.length < 1) {
        prices.push(minPrice);
      }
    }
    return prices;
  }

  render() {
    let btnColor = (this.props.buttonColor === "blue");

    let isMin;
    if (this.state.currentButtons === "max") {
      isMin = false;
    } else {
      isMin = true;
    }

    // let minStart;
    // if (this.state.minPrice === "") {
    //   minStart = 0;
    // } else {
    //   minStart = this.state.minPrice;
    // }



    let minPrices = this.minPrices(0);
    let maxPrices = this.maxPrices();


    return (
      <div  ref={this.setWrapRef} className="price-dropdown-container">
        
        <form className="price-form-outer" onSubmit={this.handleSubmit} autoComplete="off">
        <div className="price-desc">Price Range</div>
          <div className="price-form-inner">
          
            <div className="pd-input-wrapper">
              <div className="min-flex">
                <input
                  className="home-price-input"
                  placeholder="Min"
                  name="minPrice"
                  type="text"
                  value={this.state.minPrice}
                  onChange={this.updateMinPrice}
                  onFocus={this.toggleMinButtons}
                />
                <div className="min-prices-wrap">
                  {
                    isMin ? 
                      minPrices.map(price => (<div className="preset-price--btn" onClick={this.handleMinPriceClick} key={price}>{formatPrice(price)}</div>))
                      : <div></div>
                  }
                </div>
              </div>

              <div className="price-txt-mid">
                -
              </div>

              <div className="max-flex">
                <input
                  className="home-price-input"
                  placeholder="Max"
                  name="maxPrice"
                  type="number"
                  value={this.state.maxPrice}
                  onChange={this.updateMaxPrice}
                  onFocus={this.toggleMaxButtons}
                />
                <div className="max-prices-wrap">
                  {
                    !isMin ? 
                      maxPrices.map(price => (<div className="preset-price--btn" onClick={this.handleMaxPriceClick} key={price}>{formatPrice(price)}</div>))
                      : <div></div>
                  }
                </div>
              </div>


            </div>
          </div>

          <div className="sub-price-flex">
            <button className="sub-price-btn" type="submit">
              Done
              {/* {btnColor ?
                <FontAwesomeIcon icon={faMagnifyingGlass} /> :
                <FontAwesomeIcon icon={faMagnifyingGlassDollar} />} */}
            </button>
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