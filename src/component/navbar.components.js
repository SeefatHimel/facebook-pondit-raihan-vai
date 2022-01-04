import React, { Component } from "react";

class Navbar extends Component {
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
                            padding: "0",
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
                </div>
            </>
        );
    }
}

export default Navbar;
