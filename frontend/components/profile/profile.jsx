import React from 'react';

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


    }

    componentDidMount() {
        console.log("component did mount ran")
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
        console.log("handle submit ran");

        const formData = new FormData();

        formData.append('listing[user_id]', this.state.user_id);
        formData.append('listing[description]', this.state.description);
        if (this.state.photoFile) {
            formData.append('listing[photo]', this.state.photoFile);
        }
        
        $.ajax({
            url: '/api/listings',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then((response) => console.log(response.message), (response) => console.log(response.responseJSON))
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            debugger
            fileReader.readAsDataURL(file);
        }
        // this.setState({photoFile: e.currentTarget.files[0]});
    }



    render() {
        console.log(this.state)
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null
        return (

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>Title</div>
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.handleInput.bind(this)}
                    />
                    <input type="file" onChange={this.handleFile.bind(this)} />
                    <h3>Image preview</h3>
                    {preview}
                    <button>List your house!</button>
                </form>

        );
    }
};

export default Profile;