import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // instead of getting rid of all null: false
        // in the database, just use this and only have
        // a required user_id, photo.  actually one
        // string and one int so make sure you get those
        // correctly at this point.
        // this.state = {
        //     user_id: null,
        //     price: 999999,
        //     state: "AA",
        //     city: "aa",
        //     zip_code: 99999,
        //     address: "9999 Rode Lane Drive",
        //     bedrooms: 9,
        //     bathrooms: 9,
        //     year_buit: 9999,
        //     description: "Test description.",
        //     photoFile: null
        // }

        this.state = {
            user_id: null,
            price: 999999,
            photoFile: null
        }

        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount() {
        
        if(this.state.user_id === null) {
            this.setState({ user_id: this.props.currentUser.id })
        }
    }

    handleInput(type) {
        
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        

        const formData = new FormData();

        formData.append('listing[user_id]', this.state.user_id);
        formData.append('listing[description]', this.state.description);
        if (this.state.photoFile) {
            formData.append('listing[photo]', this.state.photoFile);
        }
        console.log(formData.keys);
        console.log(formData.values);
        $.ajax({
            url: '/api/listings',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        })
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
        // this.setState({photoFile: e.currentTarget.files[0]});
    }



    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null
        return (

            <div>
                {/* <div>
                    <NavBarContainer />
                </div> */}
                <div className="all-form">
                    <NavBarContainer />
                    <div className="sell-form-banner">
                        <div className="sell-form-picture">
                            <form className="new-listing-form" onSubmit={this.handleSubmit.bind(this)}>

                                <div className="input-label-wrapper">
                                    <div className="input-label-div">
                                        <label>Street address</label>
                                        <input
                                            type="text"
                                            value={this.state.address}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            value={this.state.city}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>State</label>
                                        <input
                                            type="text"
                                            value={this.state.state}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>Zip code</label>
                                        <input
                                            type="text"
                                            value={this.state.zipcode}
                                            onChange={this.handleInput}
                                        />
                                    </div>

                                    <div className="input-label-div">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            value={this.state.description}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                </div>


                                <div className="img-upload">
                                    <input type="file" onChange={this.handleFile.bind(this)} />

                                    {preview}

                                </div>

                                <button>List your house!</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>



        );
    }
};

export default Profile;