import React from "react";

class HometypeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home_types: {
        houses: true,
        townHomes: true,
        multiFam: true,
        condos: true,
        land: true,
        apartments: true,
        manufactured: true
      },
      showDeselectAll: true
    }

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deselectAll = this.deSelectAll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        houses: true,
        townHomes: true,
        multiFam: true,
        condos: true,
        land: true,
        apartments: true,
        manufactured: true
      }
    })
  }

  deSelectAll() {
    this.setState({
      home_types: {
        houses: false,
        townHomes: false,
        multiFam: false,
        condos: false,
        land: false,
        apartments: false,
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
      <div className="hometype-dropdown-container">
        <form className="hometype-form-outer" onSubmit={this.handleSubmit}>


          <div className="hometype-form-inner">
            <div className="ht-title">Home Type</div>
            <div className="select-all-row">
              {deselectAll ? <div className="ht-toggle-all" onClick={this.deselectAll} >Deselect all</div> : <div className="ht-toggle-all" onClick={this.selectAll} >Select all</div>}
              
            </div>
            <div className="checkbox-row">
              <input className="home-check" value="houses" checked={this.state.home_types.houses} type="checkbox" onChange={this.toggleCheckbox} /><label className="ht-text">Houses</label> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="townHomes" onChange={this.toggleCheckbox} checked={this.state.home_types.townHomes}/><span className="ht-text">Townhomes</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="multiFam" onChange={this.toggleCheckbox} checked={this.state.home_types.multiFam}/><span className="ht-text">Multi-family</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="condos" onChange={this.toggleCheckbox} checked={this.state.home_types.condos}/><span className="ht-text">Condos/Co-ops</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="land" onChange={this.toggleCheckbox} checked={this.state.home_types.land}/><span className="ht-text">Lots/Land</span> <br />
            </div>
            <div className="checkbox-row">
              <input className="home-check" type="checkbox" onChange={this.toggleCheckbox} value="apartments" onChange={this.toggleCheckbox} checked={this.state.home_types.apartments}/><span className="ht-text">Apartments</span> <br />
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