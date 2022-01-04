import React, { Component } from "react";

const button1 = "fa fa-thumbs-up ";
const notLiked = {
    color: "grey",
    background: "#b3ffff",
    border: "none",
    fontSize: "40px",
};
const liked = {
    color: "blue",
    background: "#b3ffff",
    border: "none",
    fontSize: "40px",
};
let styleText = notLiked;

class Like extends Component {
    state = {
        Like: 1,
    };
    handleLikeButtonChange = () => {
        const templike = this.state.Like;
        const newLike = templike * -1;
        newLike === 1 ? (styleText = notLiked) : (styleText = liked);
        this.setState({ Like: newLike });
    };

    render() {
        return (
            <>
                <button
                    className={button1}
                    style={styleText}
                    onClick={this.handleLikeButtonChange}
                ></button>
            </>
        );
    }
}

export default Like;
