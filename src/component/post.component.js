import React, { Component } from "react";
import Like from "./like.component";
let commentValue = "";
class Post extends Component {
    state = {
        comments: [],
    };

    testFunction = () => {
        console.log("hello");
    };
    onChange(eve) {
        commentValue = eve.target.value;
        //console.log(commentValue);
    }

    _handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log("do validate");

            if (commentValue.length > 1) {
                const comments = [...this.state.comments];
                comments.push(commentValue);
                e.target.value = "";
                console.log(e.target.value);

                this.setState({ comments });
            }
        }
    };

    render() {
        const { title, date, content, cComment, like } = this.props;

        return (
            <>
                <div
                    className="card"
                    style={{
                        width: "28rem",
                        margin: "10px auto",
                        padding: "10px",
                        background: "#b3ffff",
                        borderRadius: "15px",
                        border: "2px solid ",
                    }}
                >
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{date}</p>
                        <p className="card-text">{content}</p>

                        {this.state.comments.map((comment, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        width: "90%",
                                        padding: "5px",
                                        margin: "5px",
                                        background: "##ccffff",
                                        border: "2px solid ",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <p className="card-text">Himel : {comment}</p>
                                </div>
                            );
                        })}

                        <div className="row" style={{ padding: "5px" }}>
                            <input
                                style={{
                                    width: "90%",
                                    padding: "5px",
                                    background: "##ccffff",
                                    borderRadius: "15px",
                                }}
                                className="col-sm-9"
                                type="text"
                                placeholder="Write a comment..."
                                onChange={this.onChange}
                                onKeyDown={this._handleKeyDown}
                                // defaultValue={cComment}
                            />
                            <div
                                className="col-sm-1"
                                style={{
                                    margin: "auto",
                                    padding: "5px",
                                    fontSize: "25px",
                                }}
                            >
                                <Like like={like} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Post;
