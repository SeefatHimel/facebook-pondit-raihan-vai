import React, { Component } from "react";

class Navbar extends Component {
    state ={
        like : this.props.like,
        dislike : this.props.dislike,
    }
    render() {
        return (
            <>
                <div
                    className="row"
                    style={{
                        margin: "5px",
                        marginLeft: "0px",
                        padding: "5px",
                        marginBottom: "20px",
                    }}
                >
                    <i
                        className="fa fa-facebook-square col"
                        style={{
                            fontSize: "55px",
                            color: "blue",
                            flex: "0 0",
                            background: "white",
                            padding : "0px",
                            margin : "auto",
                           // border : " 3px solid blue" ,
                            borderRadius : "10px"
                            
                        }}
                    ></i>
                    <h1
                        className="col"
                        style={{
                            margin: "5px",
                            marginRight: "-2px",
                            color: "white",
                            background: "blue",
                            borderRadius : "10px"

                           // width: "wrap-content",
                        }}
                    >
                        Facebook
                    </h1>
                    <div className="col row"
                    style={{mrginLeft : "20px"}}>
                        <h1 className="col" >Like {this.props.like}</h1>
                    <h1 className="col">Dislike {this.props.disLike}</h1>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default Navbar;
