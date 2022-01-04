import React, { Component } from "react";
import Like from "./like.component";

class Post extends Component {
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
                        border : "2px solid "
                    }}
                >
                    <div className="card-body" >
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{date}</p>
                        <p className="card-text">{content}</p>
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
