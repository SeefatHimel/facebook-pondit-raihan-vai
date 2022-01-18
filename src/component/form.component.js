import React, { Component, useState } from "react";

const stylep = {
    width: "100%",
    padding: "5px",
    margin: "5px",
    background: "##ccffff",
    borderRadius: "15px",
};

const Formm = ({ handleSave }) => {
    const [picture, setPicture] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [comment, setComment] = useState("");
    const [description, setDescription] = useState("");
    const [like, setLike] = useState("");
    const [dislike, setDislike] = useState("");
    

    const handlSubmit = () => {
        //alert(`Name ${title}`);

        const obj = {
            id: 10,
            title: title,
            date: date,
            content: content,
            comment: comment,
            like: like,
            dislike: dislike,
        };
        console.log(obj);
        handleSave(obj);
    };

    return (
        <>
            <h1>Hello</h1>
            <form action="" onSubmit={handlSubmit}>
                {/* <label htmlFor="">Enter your Name</label>
            <br />
            <input
                type="text"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            /> */}
                <input
                    type="text"
                    placeholder="Title"
                    style={stylep}
                    value={title}
                    required="required"
                    onChange={(event) => {
                        console.log(handleSave);
                        setTitle(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Date"
                    value={date}
                    required="required"
                    onChange={(event) => {
                        setDate(event.target.value);
                    }}
                    style={stylep}
                />
                <input type="text" placeholder="Picture" style={stylep} />
                <input
                    type="text"
                    placeholder="Description"
                    style={stylep}
                    required="required"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Content"
                    style={stylep}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Comment"
                    style={stylep}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <div className="row">
                    <label className="col" htmlFor="">
                        Liked{" "}
                    </label>
                    <input
                        className="col"
                        type="checkbox"
                        //style={stylep}
                        value="Liked"
                        name="Liked"
                        // checked={setDislike(false)}
                        onChange={(event) => {
                            console.log(event.target.checked);
                            setLike(event.target.checked);
                        }}
                    />
                </div>
                <div className="row">
                    <label className="col" htmlFor="">
                        Disliked{" "}
                    </label>
                    <input
                        className="col"
                        type="checkbox"
                        //style={stylep}
                        value="Disliked"
                        name="Disliked"
                        // checked={setDislike(false)}
                        onChange={(event) => {
                            console.log(event.target.checked);
                            setDislike(event.target.checked);
                        }}
                    />
                </div>

                <button className="btn btn-primary" style={stylep}>
                    Save
                </button>
            </form>
        </>
    );
};

export default Formm;
