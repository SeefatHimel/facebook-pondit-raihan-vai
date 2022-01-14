import React, { Component } from "react";
import Post from "./post.component";
let nId = 6;

const stylep = {
    width: "100%",
    padding: "5px",
    margin: "5px",
    background: "##ccffff",
    borderRadius: "15px",
};
class Posts extends Component {
    state = {
        sPosts: [
            {
                id: 1,
                title: "Seefat Hossain Himel",
                date: "3 Jan 2022 | 2:10 PM",
                content: "sample content",
                comment: "sample comment",
                like: false,
                dislike: false,
            },
            {
                id: 2,
                title: "Habibur Rahman",
                date: "31 Dec 2021 | 1:34 PM",
                content:
                    'আমাদের জাভাস্ক্রিপ্টে এক লোক আছে। তার নাম "ইভেন্ট লুপ"। তার কাজ হচ্ছে " কল স্ট্যাক" নামক লোকের কাছে কোনো কাজ না থাকলে, "হীপ" নামক এক ব্যক্তির কাছ থেকে কাজ এনে কাজ ধরায় দেয়া। বেচারা লুপ হোলের মধ্যে পরে গেসে। সারাজীবন এই কাজ করেই বেড়াবে। একই কাজ করতে করতে জীবন পার করে দিবে। ইভেন্ট লুপের জন্য আমার খুব মায়া হয়। আর তোমরা জুনিয়ররা যে জাস্ট ফ্রেন্ডশিপ করে সময় কাটাচ্ছো, ইউনিভার্সিটি শেষ করে যে ঠোঙা নিয়া ঘুরবা। এইটা ভেবে আমার যে তোমাদের জন্য কি মায়া হয়; সেইটা যদি বুঝতা গো!',
                comment: "sample comment 2",
                like: false,
                dislike: false,
            },
            {
                id: 3,
                title: "Benedict Cumberbatch",
                date: "1 Jan 2022 | 5:10 PM",
                content:
                    "So different Doctor Strange content, it’s amazing! Have you watched all so far?",
                comment: "sample comment 3",
                like: false,
                dislike: false,
            },
            {
                id: 4,
                title: "Astralis",
                date: "19 Dec 2021 | 08:00 PM",
                content:
                    "Goodbye. Thank you for everything, and see you later. Today,  we bid farewell to three Astralis legends. Best of luck, Peter, Emil and Danny. You will forever be a part of the Astralis Family. ",
                comment: "sample comment 4",
                like: false,
                dislike: false,
            },
            {
                id: 5,
                title: "Prothom Alo",
                date: "2 Jan 2021 | 1:10 AM",
                content:
                    "মুসলিমদের বিরুদ্ধে গণহত্যার ডাক দেওয়ায় উদ্বেগ প্রকাশ করে দেশটির রাষ্ট্রপতি ও প্রধানমন্ত্রীকে চিঠি লিখলেন দেশের পাঁচ সাবেক প্রতিরক্ষাপ্রধান।",
                comment: "sample comment 5",
                like: false,
                dislike: false,
            },
        ],
        idNo: 6,
        likeN: 0,
    };
    changeLike = (id, value) => {
        const sPosts = this.state.sPosts.map((post) =>
            post.id === id ? { ...post, like: value } : post
        );
        // console.log(sPosts);
        this.sendLike(sPosts);
        this.setState({ sPosts });
    };

    changeDisLike = (id, value) => {
        const sPosts = this.state.sPosts.map((post) =>
            post.id === id ? { ...post, dislike: value } : post
        );
        // console.log(sPosts);
        this.sendDisLike(sPosts);
        this.setState({ sPosts });
    };

    handleAddNew = () => {
        console.log("Post Added");
        const sPosts = [...this.state.sPosts];
        nId ++;
        console.log(nId , npost);
        let nnpost = npost;
        npost.id = nId;
        sPosts.push(nnpost);
        //console.log(sPosts);

        // nId = this.state.idNo;
        // const idNo = this.state.idNo + 1;
        // this.setState({ idNo });


        this.setState({ sPosts });
    };

    sendLike = (temp) => {
        let likeN = temp.filter((post) => post.like === true);
        // console.log(likeN);
        this.props.setLike(likeN.length);
    };
    sendDisLike = (temp) => {
        let dislikeN = temp.filter((post) => post.dislike === true);
        // console.log(dislikeN);
        this.props.setDisLike(dislikeN.length);
    };

    handleRemove = (id) => {
        const sPosts = this.state.sPosts.filter((post) => post.id !== id);
        let like = false;
        let dislike = false;
        this.state.sPosts.map((post) =>
            post.id === id ? ((like = post.like), (dislike = post.dislike)) : ""
        );
        if (like === true) {
            this.props.handleLike(0);
        }
        if (dislike === true) {
            this.props.handleDisLike(0);
        }
        this.setState({ sPosts });
    };

    render() {
        return (
            <>
                <div style={{ margin: "auto" }}>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.handleAddNew}
                        style={{
                            margin: "Auto",
                            marginLeft: "30%",
                            display: "block",
                        }}
                    >
                        Add New Post
                    </button>
                    <div className="card" style={{
                        width: "28rem",
                        margin: "10px auto",
                        padding: "10px",
                        background: "#b3ffff",
                        borderRadius: "15px",
                        border: "2px solid ",
                    }} >
                        <input type="text" placeholder="Title" style={stylep}/>
                        <input type="text" placeholder="Time" style={stylep} />
                        <input type="text" placeholder="Picture" style={stylep}/>
                        <input type="text" placeholder="Description" style={stylep}/>
                        <input type="text" placeholder="Content" style={stylep}/>
                        <button className="btn btn-primary" style={stylep}>Save</button>

                    </div>



                    {this.state.sPosts.map((posts , index) => {
                        return (
                            <React.Fragment key={index}>
                                <Post
                                    id={posts.id}
                                    title={posts.title}
                                    date={posts.date}
                                    content={posts.content}
                                    cComment={posts.comment}
                                    like={posts.like}
                                    dislike={posts.dislike}
                                    changeLike={this.changeLike}
                                    changeDisLike={this.changeDisLike}
                                    handleDisLike={this.props.handleDisLike}
                                    handleLike={this.props.handleLike}
                                    handleRemove={this.handleRemove}
                                />
                            </React.Fragment>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default Posts;

const npost = {
    id: nId,
    title: "Dummy " + nId,
    date: "3 Jan 2022 | 2:10 PM",
    content: "Dummy content" + nId,
    comment: "sample comment" + nId,
    like: false,
    dislike: false,
};
