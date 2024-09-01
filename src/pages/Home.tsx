import React from 'react'
import BlogCards from '../components/BlogCards'

function Home() {
   const blogs = [
    {
        "image": "https://placehold.co/600x400",
        "title" : "blog1",
        "note" : "note1"
    },
    {
        "image": "https://placehold.co/600x400",
        "title" : "blog2",
        "note" : "note2"
    },
    {
        "image": "https://placehold.co/600x400",
        "title" : "blog3",
        "note" : "note3"
    }
  ]
  
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
  {
    blogs.map((blog, index) => (
      <BlogCards 
        key={index}
        image={blog.image} 
        title={blog.title} 
        note={blog.note} 
      />
    ))
  }
</div>
    </>
  )
}

export default Home
