import React from "react";

class HometypeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home_types: props.homeTypesFilter,
      showDeselectAll: true,
    }

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deselectAll = this.deSelectAll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.setModalRef = this.setModalRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
    this.setState({
      home_types: this.props.homeTypesFilter,
    })
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  setModalRef(modal) {
    this.modalRef = modal;
  }

  handleOutsideClick(e) {
    if (this.modalRef && !this.modalRef.contains(e.target) && !(e.target.className === "hometype-search-btn")) {
      const filter = 'home_types';
      const homeTypes = {...this.state.home_types}
      this.props.updateFilter(filter, homeTypes).then(this.props.exitModal(""));
    }
  }

  toggleCheckbox(e) {
    let state = {...this.state}
    state.home_types[e.target.value] = e.target.checked;
    this.setState({
      state
    })
  }

  selectAll() {
    this.setState({
      home_types: {
        house: true,
        town_home: true,
        multi_family: true,
        condo: true,
        land: true,
        apartment: true,
        manufactured: true
      }
    })
  }

  deSelectAll() {
    this.setState({
      home_types: {
        house: false,
        town_home: false,
        multi_family: false,
        condo: false,
        land: false,
        apartment: false,
        manufactured: false
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const filter = 'home_types';
    const homeTypes = {...this.state.home_types}
    
    this.props.updateFilter(filter, homeTypes).then(this.props.exitModal(""));
  }

  render() {
    let selectOrDeselectAll;
    let deselectAll = Object.values(this.state.home_types).every(houseType => houseType)
    return (
      <div ref={this.setModalRef} className="hometype-dropdown-container">
        <form className="hometype-form-outer" onSubmit={this.handleSubmit}>


          <div className="hometype-form-inner">
            <div className="ht-title">Home Type</div>
            <div className="select-all-row">
              {deselectAll ? <div className="ht-toggle-all" onClick={this.deselectAll} >Deselect all</div> : <div className="ht-toggle-all" onClick={this.selectAll} >Select all</div>}
              
            </div>
            <div className="checkbox-row">
              <input className="home-check" value="house" checked={this.state.home_types.house} type="checkbox" onChange={this.toggleCheckbox} /><label className="ht-text">Houses</label> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="town_home" onChange={this.toggleCheckbox} checked={this.state.home_types.town_home}/><span className="ht-text">Townhomes</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="multi_family" onChange={this.toggleCheckbox} checked={this.state.home_types.multi_family}/><span className="ht-text">Multi-family</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="condo" onChange={this.toggleCheckbox} checked={this.state.home_types.condo}/><span className="ht-text">Condos/Co-ops</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="land" onChange={this.toggleCheckbox} checked={this.state.home_types.land}/><span className="ht-text">Lots/Land</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="apartment" onChange={this.toggleCheckbox} checked={this.state.home_types.apartment}/><span className="ht-text">Apartments</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="manufactured" onChange={this.toggleCheckbox} checked={this.state.home_types.manufactured}/><span className="ht-text">Manufactured</span> <br />
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

export default HometypeDropdown;