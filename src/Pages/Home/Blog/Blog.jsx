import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div>
            <p className="font-[teko] text-center text-4xl mt-7">LATEST BLOG</p>
            <span className=""></span>
            <div className="grid md:grid-cols-3 lg:grid-cols-3">
                <div>
                    <div className="img">
                        <img src="https://i.postimg.cc/9XyS0g7g/blog-1.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="flex gap-2 p-3 ">
                            <div className="postDate">
                                <p>Dec -12 -2023</p>
                            </div>
                            <div className="tag text-orange-500">
                                <span>#Gym</span>
                            </div>
                        </div>
                        <div className="title">
                            <Link to="" className="text-3xl font-bold font-[teko]">10 States At Risk of Rural Hospital Closures</Link>
                        </div>
                    </div>
              </div>
                <div>
                    <div className="img">
                        <img src="https://i.postimg.cc/5086ZWRM/blog-3.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="flex gap-2 p-3 ">
                            <div className="postDate">
                                <p>Dec -12 -2023</p>
                            </div>
                            <div className="tag text-orange-500">
                                <span>#Gym</span>
                            </div>
                        </div>
                        <div className="title">
                            <Link to="" className="text-3xl font-bold font-[teko]">10 States At Risk of Rural Hospital Closures</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="img">
                        <img src="https://i.postimg.cc/RVSBBxDL/blog-6.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="flex gap-2 p-3 ">
                            <div className="postDate">
                                <p>Dec -12 -2023</p>
                            </div>
                            <div className="tag text-orange-500">
                                <span>#Gym</span>
                            </div>
                        </div>
                        <div className="title">
                            <Link to="" className="text-3xl font-bold font-[teko]">10 States At Risk of Rural Hospital Closures</Link>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Blog;