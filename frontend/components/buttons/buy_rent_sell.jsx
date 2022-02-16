import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimneyUser,
         faCommentsDollar } from '@fortawesome/free-solid-svg-icons'

class BuyRentSell extends React.Component {
    constructor(props) {
        super(props);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    isLoggedIn() {
        
        if (this.props.currentUser) {
            if (this.props.currentUser.id) {
                return "/sell"
            }
        } else {
            return "/"
        }
    }

    render() {

        let isLoggedRoute = this.isLoggedIn();

        return (
            <div className="container-all--col">
                <div className="container-rectangle--col">
                    <div className="title--medium">Title and slogan,</div>
                    <div className="title--medium">for these buttons:</div>
                </div>
                <div id="buy-rent-sell">

                    <div className="big-box">

                        <Link className="big-box-inner" to="/homes">
                            <div className="big-box-col">
                                <FontAwesomeIcon icon={faHouseChimneyUser} />
                                <div className="bold-blk-txt">Buy a home</div>
                                <div className="p-wrap">
                                    <p className="para-txt">
                                        Browse Dillow's home listings.
                                    </p>
                                    <p className="para-txt">
                                        Dillow has the most listings and
                                    </p>
                                    <p className="para-txt">
                                        lowest prices in the industry.
                                    </p>
                                </div>
                                <div className="box--bottom-btn">Search homes</div>
                            </div>


                        </Link>
                    </div>
                    <div className="big-box">

                        <Link className="big-box-inner" to={isLoggedRoute}>
                            <div className="big-box-col">
                                <FontAwesomeIcon icon={faCommentsDollar} />
                                <div className="bold-blk-txt">Sell a home</div>
                                <div className="p-wrap">
                                    <p className="para-txt">
                                        No matter what path you take to sell
                                    </p>
                                    <p className="para-txt">
                                        your home, Dillow can help you navigate
                                    </p>
                                    <p className="para-txt">
                                        a successful sale.
                                    </p>
                                </div>
                                <div className="box--bottom-btn">See your options</div>
                            </div>


                        </Link>
                    </div>
                </div>

            </div>



        )
    }
}

export default BuyRentSell;