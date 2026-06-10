// function BlogPreview() {
//   const blogs = [
//     {
//       title: "Importance of Proper Sterilization Packaging",
//       image: "/src/assets/sterilitymark1.png",
//     },
//     {
//       title: "Best Practices For CSSD Departments",
//       image: "/src/assets/sterilitymark2.png",
//     },
//     {
//       title: "Choosing The Right Sterilization Roll",
//       image: "/src/assets/sterilitymark3.png",
//     },
//   ];

//   return (
//     <section className="section-padding bg-white">

//       <div className="container-custom">

//         <div className="flex justify-between items-center mb-14">

//           <div>
//             <span className="text-sky-600 font-semibold">
//               BLOGS & ARTICLES
//             </span>

//             <h2 className="text-4xl font-bold mt-3">
//               Latest Insights
//             </h2>
//           </div>

//           <button className="hidden md:block border border-sky-600 text-sky-600 px-6 py-3 rounded-xl">
//             View All
//           </button>

//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">

//           {blogs.map((blog) => (
//             <div
//               key={blog.title}
//               className="overflow-hidden rounded-3xl shadow-lg bg-white"
//             >
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-64 object-cover"
//               />

//               <div className="p-6">

//                 <h3 className="font-bold text-xl">
//                   {blog.title}
//                 </h3>

//                 <button className="mt-5 text-sky-600 font-semibold">
//                   Read More →
//                 </button>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

export default BlogPreview;