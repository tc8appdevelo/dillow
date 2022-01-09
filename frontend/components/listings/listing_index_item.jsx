import React from "react"

class ListingIndexItem extends React.Component {
    
    render() {
        const purl = this.props.listing.photoUrl
        return (
            <div id="listing-box" style={{ backgroundImage: `url(${purl})` }}>

                {this.props.listing.price}

            </div>
        )
    }
}

export default ListingIndexItem;