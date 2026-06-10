// import { useState } from "react";
// import axios from "axios";

// function Referral() {
//   const [form, setForm] = useState({
//     doctorName: "",
//     clinicName: "",
//     referredPerson: "",
//     phone: "",
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
//     const res = await axios.post(
//       "http://localhost:5000/api/referrals",
//       form
//     );

//     alert(res.data.message);

//     setForm({
//       doctorName: "",
//       clinicName: "",
//       referredPerson: "",
//       phone: "",
//     });

//   } catch (error) {
//     console.error(error);
//     alert("Submission Failed");
//   }
// }

//   return (
//     <section className="section-padding bg-white">

//       <div className="container-custom">

//         <div className="max-w-4xl mx-auto glass-card rounded-3xl p-10">

//           <div className="text-center mb-10">

//             <span className="text-sky-600 font-semibold">
//               REFERRAL PROGRAM
//             </span>

//             <h2 className="text-4xl font-bold mt-4">
//               Refer Healthcare Professionals
//             </h2>

//             <p className="mt-4 text-slate-600">
//               Earn rewards by referring hospitals,
//               clinics, dentists and healthcare providers.
//             </p>

//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="grid md:grid-cols-2 gap-6"
//           >

//             <input
//               type="text"
//               name="doctorName"
//               placeholder="Doctor Name"
//               value={form.doctorName}
//               onChange={handleChange}
//               className="border p-4 rounded-xl"
//             />

//             <input
//               type="text"
//               name="clinicName"
//               placeholder="Clinic Name"
//               value={form.clinicName}
//               onChange={handleChange}
//               className="border p-4 rounded-xl"
//             />

//             <input
//               type="text"
//               name="referredPerson"
//               placeholder="Referred Person"
//               value={form.referredPerson}
//               onChange={handleChange}
//               className="border p-4 rounded-xl"
//             />

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               className="border p-4 rounded-xl"
//             />

//             <button
//               className="bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-xl md:col-span-2"
//             >
//               Submit Referral
//             </button>

//           </form>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Referral;