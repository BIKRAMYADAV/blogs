import React from "react";

interface BlogI {
    image: string;
    title: string;
    note: string;
}

const BlogCards:React.FC<BlogI> = ({image,title,note}) => {
  return (
    <div className=" max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:-translate-y-1">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="mt-2 text-gray-600">{note}</p>
    </div>
</div>
  )
}

export default BlogCards