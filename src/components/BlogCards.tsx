import React from "react";

interface BlogI {
    image: string;
    title: string;
    note: string;
}

const BlogCards:React.FC<BlogI> = ({image,title,note}) => {
  return (
    <div className="">
        <img src={image} alt="" />
        <h1>${title}</h1>
        <p>${note}</p>
    </div>
  )
}

export default BlogCards