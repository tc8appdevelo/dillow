import React from "react"


class ListingIndexItem extends React.Component {




    render() {
        const purl = this.props.listing.photoUrl
        const idx = this.props.listing.id
        return (
        
            <div className="l-wrap" onClick={() => this.props.handleClick(idx)}>
                <button onClick={() => this.props.saveListing(idx)}>Save</button>
                <div className="listing-box" style={{ backgroundImage: `url(${purl})` }}>
                    {/* <div>Who</div>
                    <div>Heart</div>
                    <div id="price-text">{this.props.listing.price}</div>
                    <div>3 bds 3 bath 1111 sqft - House for sale</div>
                    <div>4444 triple street Charlston, SC 3323</div> */}
                </div>
                <div className="listing-box--bottom-bar">
                    <div className="price-text">{this.props.listing.price}</div>
                    {/* <div>3 bds 3 bath 1111 sqft - House for sale</div> 
                    <div>4444 triple street Charlston, SC 3323</div> */}
                    
                </div>

            </div>
        )
    }
}

export default ListingIndexItem;