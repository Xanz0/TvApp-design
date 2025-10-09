// import React, { useState } from "react";
// import { tvData } from "../data/tvData";

// const TvProgramsAdmin = () => {
//   const [tv, setTv] = useState(tvData);
//   const [form, setForm] = useState({ video: "", title: "", description: "" });
//   const [editing, setEditing] = useState(null);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAdd = () => {
//     if (!form.title || !form.description) return;
//     const newItem = { ...form, id: Date.now() };
//     setTv([...tv, newItem]);
//     setForm({ video: "", title: "", description: "" });
//   };

//   const handleEdit = (id) => {
//     const item = tv.find((t) => t.id === id);
//     setForm(item);
//     setEditing(id);
//   };

//   const handleUpdate = () => {
//     setTv(tv.map((t) => (t.id === editing ? form : t)));
//     setForm({ video: "", title: "", description: "" });
//     setEditing(null);
//   };

//   const handleDelete = (id) => {
//     setTv(tv.filter((t) => t.id !== id));
//   };

//   return (
//     <div>
//       <h2>TV Programs CRUD</h2>
//       <div className="form">
//         <input name="video" value={form.video} onChange={handleChange} placeholder="Video URL" />
//         <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
//         <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
//         {editing ? (
//           <button onClick={handleUpdate}>Update</button>
//         ) : (
//           <button onClick={handleAdd}>Add</button>
//         )}
//       </div>

//       <div className="list">
//         {tv.map((item) => (
//           <div key={item.id} className="card">
//             <video width="200" controls src={item.video}></video>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             <button onClick={() => handleEdit(item.id)}>Edit</button>
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TvProgramsAdmin;

// Oldingi kod...
const TvProgramsAdmin = () => {
  return (
    <div>
      <h1>Tv Programs Admin</h1>
      {/* Komponent mazmuni */}
    </div>
  );
};

export default TvProgramsAdmin; // ✅ Default export qo'shildi