// import { useState } from "react";

// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch(
//       "http://localhost:5000/api/contact",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       }
//     );

//     const data = await response.json();

//     if (data.success) {
//       alert("Message Submitted Successfully");

//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         message: "",
//       });
//     } else {
//       alert("Failed to submit form");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("Server Error");
//   }
// };

//   return (
//     <section className="section-padding bg-slate-50">

//       <div className="container-custom">

//         <div className="max-w-5xl mx-auto">

//           <div className="text-center mb-12">

//             <span className="text-sky-600 font-semibold">
//               CONTACT US
//             </span>

//             <h2 className="text-5xl font-bold mt-4">
//               Request A Quote
//             </h2>

//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-3xl p-10 shadow-xl"
//           >

//             <div className="grid md:grid-cols-2 gap-6">

//               <input
//   type="text"
//   name="name"
//   value={form.name}
//   onChange={handleChange}
//   placeholder="Full Name"
//   className="border p-4 rounded-xl"
// />

//               <input
//                 type="email"
//                 name="email"
//                  value={form.email}
//                 placeholder="Email Address"
//                 onChange={handleChange}
//                 className="border p-4 rounded-xl"
//               />

//               <input
//                 type="text"
//                 name="phone"
//                  value={form.phone}
//                 placeholder="Phone Number"
//                 onChange={handleChange}
//                 className="border p-4 rounded-xl"
//               />

//               <input
//                 type="text"
//                 name="company"
//                  value={form.comapny}
//                 placeholder="Company Name"
//                 onChange={handleChange}
//                 className="border p-4 rounded-xl"
//               />

//             </div>

//             <textarea
//               rows="6"
//               name="message"
//                value={form.message}
//               placeholder="Your Message"
//               onChange={handleChange}
//               className="border p-4 rounded-xl mt-6 w-full"
//             />

//             <button className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl">
//               Send Inquiry
//             </button>

//           </form>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Contact;