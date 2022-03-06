import React from "react";

class BedsBathDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: "any",
      bathrooms: "any",
    }

    this.spawnButtons = this.spawnButtons.bind(this);
  }

  spawnButtons(isBeds) {
    let btn_array = [];
    if (isBeds) {
      for (let i = 0; i < 6; i++) {
        if (i > 0) {
          btn_array.push(<button key={i} className="beds-btn">{i}</button>)
        } else {
          btn_array.push(<button key={i} className="beds-btn">Any</button>)
        }
      }
    } else {
      for (let i = 0; i < 6; i++) {
        if (i > 0) {
          let num;
          if (i === 2) {
            num = 1.5;
          } else if (i === 1) {
            num = 1;
          } else {
            num = i - 1;
          }
          btn_array.push(<button key={i} className="beds-btn">{num}</button>)
        } else {
          btn_array.push(<button key={i} className="beds-btn">Any</button>)
        }
      }
    }

    return btn_array;
  }

  render() {

    let beds_btns = this.spawnButtons(true);
    let baths_btns = this.spawnButtons(false);

    return (
      <div className="beds-dropdown-container">
        <form className="beds-form-outer">
          
          <div className="beds-form-inner">
            <div className="price-desc">Bedrooms</div>
            <div className="beds-btn-row">
              {beds_btns.map(btn => btn)}
            </div>
          </div>

          <div className="beds-form-inner">
            <div className="price-desc">Bathrooms</div>
            <div className="baths-btn-row">
              {baths_btns.map(btn => btn)}
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

export default BedsBathDropdown;