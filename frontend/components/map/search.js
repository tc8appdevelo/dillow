import React from "react";
import DillowMap from "./dillow_map";
import NavBarContainer from "../navbar/nav_bar_container";
class Search extends React.Component {
  constructor() {
    super(props);

  }

  render() {
    return (
      <div>
        <DillowMap />
      </div>
    )
  }
}

export default Search;