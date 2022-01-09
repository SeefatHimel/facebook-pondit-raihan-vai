import React, { Component } from "react";
import Post from "./post.component";

class Posts extends Component {
    state = {
        sPosts: [
            {
                id: 1,
                title: "Seefat Hossain Himel",
                date: "3 Jan 2022 | 2:10 PM",
                content: "sample content",
                comment: "sample comment",
                like: 1,
            },
            {
                id: 2,
                title: "Habibur Rahman",
                date: "31 Dec 2021 | 1:34 PM",
                content:
                    'আমাদের জাভাস্ক্রিপ্টে এক লোক আছে। তার নাম "ইভেন্ট লুপ"। তার কাজ হচ্ছে " কল স্ট্যাক" নামক লোকের কাছে কোনো কাজ না থাকলে, "হীপ" নামক এক ব্যক্তির কাছ থেকে কাজ এনে কাজ ধরায় দেয়া। বেচারা লুপ হোলের মধ্যে পরে গেসে। সারাজীবন এই কাজ করেই বেড়াবে। একই কাজ করতে করতে জীবন পার করে দিবে। ইভেন্ট লুপের জন্য আমার খুব মায়া হয়। আর তোমরা জুনিয়ররা যে জাস্ট ফ্রেন্ডশিপ করে সময় কাটাচ্ছো, ইউনিভার্সিটি শেষ করে যে ঠোঙা নিয়া ঘুরবা। এইটা ভেবে আমার যে তোমাদের জন্য কি মায়া হয়; সেইটা যদি বুঝতা গো!',
                comment: "sample comment 2",
                like: 1,
            },
            {
                id: 3,
                title: "Benedict Cumberbatch",
                date: "1 Jan 2022 | 5:10 PM",
                content:
                    "So different Doctor Strange content, it’s amazing! Have you watched all so far?",
                comment: "sample comment 3",
                like: 1,
            },
            {
                id: 4,
                title: "Astralis",
                date: "19 Dec 2021 | 08:00 PM",
                content:
                    "Goodbye. Thank you for everything, and see you later. Today,  we bid farewell to three Astralis legends. Best of luck, Peter, Emil and Danny. You will forever be a part of the Astralis Family. ",
                comment: "sample comment 4",
                like: 1,
            },
            {
                id: 5,
                title: "Prothom Alo",
                date: "2 Jan 2021 | 1:10 AM",
                content:
                    "মুসলিমদের বিরুদ্ধে গণহত্যার ডাক দেওয়ায় উদ্বেগ প্রকাশ করে দেশটির রাষ্ট্রপতি ও প্রধানমন্ত্রীকে চিঠি লিখলেন দেশের পাঁচ সাবেক প্রতিরক্ষাপ্রধান।",
                comment: "sample comment 5",
                like: 1,
            },
        ],
    };

    render() {
        return (
            <>
                <div style={{ margin: "auto" }}>
                    {this.state.sPosts.map((posts) => {
                        return (
                            <React.Fragment key={posts.id}>
                                <Post
                                    title={posts.title}
                                    date={posts.date}
                                    content={posts.content}
                                    cComment={posts.comment}
                                    like={posts.like}
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
