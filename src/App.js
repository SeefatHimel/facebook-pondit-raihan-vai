import React, { Component } from "react";
import Posts from "./component/posts.component";
import Navbar from "./component/navbar.components";

class App extends Component {
    state = {
        like : 0,
        disLike : 0
    }

    setLike = (n) => {
        let like = this.state.like;
        like = n;
        this.setState({like});
    }
    setDisLike = (n) => {
        let disLike = this.state.disLike;
        disLike = n;
        this.setState({disLike});
    }

    handleLike = (work) => {
        let like = this.state.like ;
        work === 1 ? like++ : like--;
        this.setState({like});
    }
    handleDisLike = (work) => {
        let disLike = this.state.disLike ;
        work === 1 ? disLike++ : disLike--;   
        this.setState({disLike});

    }
    

    render() {
        return (
            <>
                <div style={{ background: "grey" }}>
                    <Navbar like={this.state.like} disLike={this.state.disLike} />
                    <Posts
                    handleDisLike={this.handleDisLike}
                    handleLike={this.handleLike} 
                    setLike = {this.setLike}
                    setDisLike = {this.setDisLike}
                    />
                    <br />
                </div>
            </>
        );
    }
}

export default App;
