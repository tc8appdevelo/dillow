import React from "react";

class BedsBathDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beds_baths: {
        bedrooms: "any",
        bathrooms: "any",
      },
      beds_btn_clicked: "",
      baths_btn_clicked: ""
    }

    this.spawnButtons = this.spawnButtons.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let val = e.target.innerHTML;
    let beds_baths = {...this.state.beds_baths}

    let beds = beds_baths.bedrooms;
    let baths = beds_baths.bathrooms;

    if (e.target.className === "beds-btn" || e.target.className === "beds-btn-chosen") {
      
      this.setState({
        beds_baths: {
          bedrooms: val,
          bathrooms: baths
        },
        beds_btn_clicked: val
      })
    } else {
      this.setState({
        beds_baths: { 
          bedrooms: beds,
          bathrooms: val
        },
        baths_btn_clicked: val
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let state = {...this.state}
    let beds_baths = state.beds_baths;
    this.props.updateFilter("beds_baths", beds_baths).then(this.props.exitModal(""));
  }


  spawnButtons(isBeds) {
    let btnArray = [];
    if (isBeds) {
      let clickedBed = this.state.beds_btn_clicked;
      for (let i = 0; i < 6; i++) {
        let className;

        if (i > 0) {
          if (clickedBed === i.toString()) {
            className = "beds-btn-chosen"
          } else {
            className = "beds-btn"
          }
          btnArray.push(<button key={i} onClick={this.handleClick} className={className}>{i}</button>)
        } else {
          if (clickedBed === "Any") {
            className = "beds-btn-chosen"
          } else {
            className = "beds-btn"
          }
          btnArray.push(<button key={i} onClick={this.handleClick} className={className}>Any</button>)
        }
      }
    } else {
      let clickedBath = this.state.baths_btn_clicked;
      for (let i = 0; i < 6; i++) {
        let className;
        if (i > 0) {
          let num;
          if (i === 2) {
            num = 1.5;
          } else if (i === 1) {
            num = 1;
          } else {
            num = i - 1;
          }
          if (clickedBath === num.toString()) {
            className = "baths-btn-chosen"
          } else {
            className = "baths-btn"
          }

          btnArray.push(<button key={i} onClick={this.handleClick} className={className}>{num}</button>)
        } else {
          if (clickedBath === "Any") {
            className = "baths-btn-chosen"
          } else {
            className = "baths-btn"
          }
          btnArray.push(<button key={i} onClick={this.handleClick} className={className}>Any</button>)
        }
      }
    }

    return btnArray;
  }

  render() {

    let beds_btns = this.spawnButtons(true);
    let baths_btns = this.spawnButtons(false);

    return (
      <div className="beds-dropdown-container">
        <form className="beds-form-outer" onSubmit={this.handleSubmit}>
          
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