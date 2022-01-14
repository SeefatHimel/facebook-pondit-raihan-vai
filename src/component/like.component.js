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

class Like extends Component {
    state = {
        Like: this.props.like,
        DisLike: this.props.dislike,
        firstTime: true,
        styleText: notLiked,
        styleText2: notLiked,
    };
    handleLikeButtonChange = () => {
        let templike = this.state.Like;
        console.log(templike, this.props.like);
        templike === true
            ? this.setState({ styleText: notLiked })
            : this.setState({ styleText: liked });
        templike = !templike;
        this.changeLike(this.props.id, templike);
        if (templike === true && this.state.DisLike === true) {
            this.handleDisLikeButtonChange();
        }
        this.setState({ Like: templike });
    };

    handleDisLikeButtonChange = () => {
        let tempDisLike = this.state.DisLike;
        tempDisLike === true
            ? this.setState({ styleText2: notLiked })
            : this.setState({ styleText2: liked });
        tempDisLike = !tempDisLike;
        this.changeDisLike(this.props.id, tempDisLike);
        if (tempDisLike === true && this.state.Like === true) {
            this.handleLikeButtonChange();
        }

        this.setState({ DisLike: tempDisLike });
    };

    handleDisLike = this.props.handleDisLike;
    handleLike = this.props.handleLike;
    changeLike = this.props.changeLike;
    changeDisLike = this.props.changeDisLike;

    render() {
        return (
            <>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <button
                            className={button1}
                            style={this.state.styleText}
                            onClick={this.handleLikeButtonChange}
                        ></button>
                    </div>
                    <div className="">
                        <button
                            style={this.state.styleText2}
                            onClick={this.handleDisLikeButtonChange}
                        >
                            <i className="fa fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Like;
