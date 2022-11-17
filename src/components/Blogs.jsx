import React from "react";
import BlogsData from "../Data/Blogs.json";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsShieldFillMinus } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

const Blogs = () => {
  return (
    <section className="flex justify-center items-center min-h-screen flex-col bg-gray-800 gap-y-14 py-16 p-4">
      {BlogsData.map((data) => (
        <div
          key={data.id}
          className="max-w-5xl w-full bg-gray-900 min-h-30 rounded-md border-b border-l border-gray-700 hover:shadow-slate-600 shadow-2xl text-gray-400 flex flex-col md:flex-row justify-center items-center  duration-300 ease-in-out"
        >
          <div className="w-full md:w-4/6 flex flex-col p-6 cursor-pointer">
            {/* one  */}
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="w-[35px] h-[35px] rounded-full hover:scale-125 duration-300"
                  src={data.author}
                  alt="Author"
                />
              </div>
              <div>
                <h1 className="text-lg text-gray-200">{data.authorName}</h1>
              </div>
              <div>
                <p className="text-xs text-gray-400">{data.Date}</p>
              </div>
            </div>
            {/* two  */}
            <div>
              <h1 className="text-2xl md:text-4xl tracking-tighter my-4 md:font-semibold hover:text-teal-400  duration-500">
                {data.title}
              </h1>
            </div>
            <div>
              <article className="text-lg tracking-tighter pl-4 text-gray-500 hover:text-gray-400  duration-500">
                {data.textIsVisible}
              </article>
            </div>

            <div className="flex justify-between mt-14">
              <div className="flex items-center gap-4 ">
                <p
                  title="Show more this Tag Blogs"
                  className="bg-pink-300 inline p-2 rounded-2xl text-gray-600 text-xs hover:scale-110 duration-300"
                >
                  {data.tags}
                </p>
                <p className="text-sm">{data.lengthyTime}</p>
              </div>
              <div className="flex items-center gap-4 text-2xl ">
                <BsBookmarkCheckFill
                  title="Save it"
                  className="hover:text-green-300 duration-300 hover:scale-150 ease-in-out"
                />
                <BsShieldFillMinus
                  title="Don't show like this"
                  className="hover:text-red-500 duration-300 hover:scale-150 ease-in-out"
                />
                <BsThreeDots
                  title="Option"
                  className="hover:text-pink-300 duration-300 hover:scale-150 ease-in-out"
                />
              </div>
            </div>

            {/* first end  */}
          </div>

          <div className="md:w-2/6 flex justify-center items-center object-cover px-10">
            <img className="w-[200px]" src={data.bannerImage} alt="Banner" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blogs;
