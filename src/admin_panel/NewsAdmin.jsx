// import React, { useEffect, useState } from "react";
// import "./admin_panel_all_jsx/admin_css/NewsAdmin.css";

// const API_URL = `${import.meta.env.VITE_ROOT_URL}/api/Image/`;
// const NEWS_API = "https://api.nyotv.uz/api/News";
// const ITEMS_PER_PAGE = 10;

// const NewsAdmin = () => {
//   const [images, setImages] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedImageId, setSelectedImageId] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [newsData, setNewsData] = useState({
//     titleUz: "",
//     titleRu: "",
//     titleEn: "",
//     contentUz: "",
//     contentRu: "",
//     contentEn: "",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   // === Barcha rasmlarni olish ===
//   const fetchImages = async () => {
//     try {
//       const response = await fetch(`${API_URL}all`);
//       const data = await response.json();
//       setImages(data);
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//   };

//   // === Fayl tanlash ===
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   // === Fayl yuklash ===
//   const uploadImage = async () => {
//     if (!selectedFile) return alert("Iltimos, fayl tanlang!");
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await fetch(`${API_URL}upload`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//       setSelectedFile(null);
//       fetchImages();
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   // === Rasm o‘chirish ===
//   const deleteImage = async (id) => {
//     if (!window.confirm("Rostdan ham o‘chirmoqchimisiz?")) return;
//     try {
//       const response = await fetch(`${API_URL}${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//       fetchImages();
//     } catch (error) {
//       console.error("Error deleting image:", error);
//     }
//   };

//   // === News POST ===
//   const handleNewsSubmit = async () => {
//     if (!selectedImageId) return alert("Iltimos, rasm tanlang!");
//     try {
//       const response = await fetch(NEWS_API, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...newsData,
//           newsImageId: selectedImageId,
//           newsBackTVId: 0,
//         }),
//       });

//       if (response.ok) {
//         alert("✅ Yangilik muvaffaqiyatli qo‘shildi!");
//         setNewsData({
//           titleUz: "",
//           titleRu: "",
//           titleEn: "",
//           contentUz: "",
//           contentRu: "",
//           contentEn: "",
//         });
//         setSelectedImageId(null);
//       } else {
//         console.error(await response.text());
//         alert("❌ Xatolik: yangilik qo‘shilmadi!");
//       }
//     } catch (error) {
//       console.error("Error adding news:", error);
//     }
//   };

//   const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
//   const paginatedImages = images.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <div className="admin-container">
//       {/* ======= IMAGE CRUD ======= */}
//       <div className="image-crud-container">
//         <h2>🖼 Image CRUD</h2>

//         <div className="upload-section">
//           <label className="file-label">
//             <input type="file" onChange={handleFileChange} />
//             <span className="file-button">Choose File</span>
//             <span className="file-name">
//               {selectedFile ? selectedFile.name : "No file chosen"}
//             </span>
//           </label>
//           <button className="upload-btn" onClick={uploadImage}>
//             Upload
//           </button>
//         </div>

//         <table className="image-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Image Id</th>
//               <th>Name</th>
//               <th>Created</th>
//               <th>Preview</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedImages.map((image, i) => (
//               <tr key={image.id}>
//                 <td>{(currentPage - 1) * ITEMS_PER_PAGE + i + 1}</td>
//                 <td>{image.id}</td>
//                 <td>{image.imageName}</td>
//                 <td>{new Date(image.createTime).toLocaleString()}</td>
//                 <td>
//                   <img
//                     src={`${API_URL}${image.id}`}
//                     alt={image.imageName}
//                     className="thumbnail"
//                   />
//                 </td>
//                 <td>
//                   <button
//                     className="view-btn"
//                     onClick={() => window.open(`${API_URL}${image.id}`, "_blank")}
//                   >
//                     View
//                   </button>
//                   <button
//                     className="delete-btn"
//                     onClick={() => deleteImage(image.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="pagination">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               className={currentPage === i + 1 ? "active" : ""}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ======= NEWS FORM ======= */}
//       <div className="news-form">
//         <h2>📰 Yangilik qo‘shish</h2>

//         <div className="form-group">
//           <label>Title (Uz)</label>
//           <input
//             type="text"
//             value={newsData.titleUz}
//             onChange={(e) => setNewsData({ ...newsData, titleUz: e.target.value })}
//           />
//         </div>

//         <div className="form-group">
//           <label>Title (Ru)</label>
//           <input
//             type="text"
//             value={newsData.titleRu}
//             onChange={(e) => setNewsData({ ...newsData, titleRu: e.target.value })}
//           />
//         </div>

//         <div className="form-group">
//           <label>Title (En)</label>
//           <input
//             type="text"
//             value={newsData.titleEn}
//             onChange={(e) => setNewsData({ ...newsData, titleEn: e.target.value })}
//           />
//         </div>

//         <div className="form-group">
//           <label>Content (Uz)</label>
//           <textarea
//             value={newsData.contentUz}
//             onChange={(e) =>
//               setNewsData({ ...newsData, contentUz: e.target.value })
//             }
//           />
//         </div>

//         <div className="form-group">
//           <label>Content (Ru)</label>
//           <textarea
//             value={newsData.contentRu}
//             onChange={(e) =>
//               setNewsData({ ...newsData, contentRu: e.target.value })
//             }
//           />
//         </div>

//         <div className="form-group">
//           <label>Content (En)</label>
//           <textarea
//             value={newsData.contentEn}
//             onChange={(e) =>
//               setNewsData({ ...newsData, contentEn: e.target.value })
//             }
//           />
//         </div>

//         {/* === Rasm tanlash === */}
//         <div className="image-select-section">
//           <h3>Rasm tanlang</h3>
//           <div className="image-grid">
//             {images.map((img) => (
//               <div
//                 key={img.id}
//                 className={`image-box ${
//                   selectedImageId === img.id ? "selected-image" : ""
//                 }`}
//                 onClick={() => setSelectedImageId(img.id)}
//               >
//                 <img src={`${API_URL}${img.id}`} alt={img.imageName} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="upload-btn" onClick={handleNewsSubmit}>
//           Yangilikni saqlash
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsAdmin;













// import React, { useEffect, useState } from "react";
// import "./admin_panel_all_jsx/admin_css/NewsAdmin.css";

// const API_URL = `${import.meta.env.VITE_ROOT_URL}/api/Image/`;
// const NEWS_API = `${import.meta.env.VITE_ROOT_URL}/api/News`;
// const ITEMS_PER_PAGE = 10;

// const NewsAdmin = () => {
//   const [images, setImages] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedImageId, setSelectedImageId] = useState(null);
//   const [newsList, setNewsList] = useState([]);
//   const [formData, setFormData] = useState({
//     titleUz: "",
//     titleRu: "",
//     titleEn: "",
//     contentUz: "",
//     contentRu: "",
//     contentEn: "",
//   });
//   const [editId, setEditId] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchImages();
//     fetchNews();
//   }, []);

//   const fetchImages = async () => {
//     try {
//       const res = await fetch(`${API_URL}all`);
//       const data = await res.json();
//       setImages(data);
//     } catch (e) {
//       console.error("Error fetching images:", e);
//     }
//   };

//   const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

//   const uploadImage = async () => {
//     if (!selectedFile) return alert("Iltimos, fayl tanlang!");
//     const formData = new FormData();
//     formData.append("file", selectedFile);
//     try {
//       const res = await fetch(`${API_URL}upload`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });
//       if (!res.ok) throw new Error("Upload error");
//       setSelectedFile(null);
//       fetchImages();
//     } catch (err) {
//       console.error("Image upload failed:", err);
//     }
//   };

//   const fetchNews = async () => {
//     try {
//       const res = await fetch(NEWS_API);
//       const data = await res.json();
//       setNewsList(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error("Error fetching news:", e);
//     }
//   };

//   const handleInput = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedImageId) return alert("Rasmni tanlang!");
//     const payload = { ...formData, newsImageId: selectedImageId, newsBackTVId: 0 };

//     try {
//       const res = await fetch(editId ? `${NEWS_API}/${editId}` : NEWS_API, {
//         method: editId ? "PUT" : "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });
//       if (!res.ok) throw new Error("Failed to save news");
//       setFormData({
//         titleUz: "",
//         titleRu: "",
//         titleEn: "",
//         contentUz: "",
//         contentRu: "",
//         contentEn: "",
//       });
//       setSelectedImageId(null);
//       setEditId(null);
//       fetchNews();
//     } catch (err) {
//       console.error("Error saving news:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Bu yangilikni o‘chirmoqchimisiz?")) return;
//     try {
//       await fetch(`${NEWS_API}/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchNews();
//     } catch (err) {
//       console.error("Error deleting news:", err);
//     }
//   };

//   const handleEdit = (item) => {
//     setFormData({
//       titleUz: item.titleUz,
//       titleRu: item.titleRu,
//       titleEn: item.titleEn,
//       contentUz: item.contentUz,
//       contentRu: item.contentRu,
//       contentEn: item.contentEn,
//     });
//     setSelectedImageId(item.newsImageId);
//     setEditId(item.id);
//   };

//   return (
//     <div className="admin-news-container">
//       <h2 className="admin-page-title">📰 News Management Panel</h2>

//       {/* IMAGE UPLOAD */}
//       <div className="admin-upload-section">
//         <input type="file" onChange={handleFileChange} />
//         {selectedFile && <span className="admin-file-name">{selectedFile.name}</span>}
//         <button className="admin-upload-btn" onClick={uploadImage}>
//           Upload
//         </button>
//       </div>

//       {/* IMAGE SELECTION */}
//       <div className="admin-image-select">
//         <h3>📸 Bazadagi rasmlar</h3>
//         <div className="admin-image-grid">
//           {images.map((img) => (
//             <div
//               key={img.id}
//               className={`admin-image-card ${
//                 selectedImageId === img.id ? "selected" : ""
//               }`}
//               onClick={() => setSelectedImageId(img.id)}
//             >
//               <img src={`${API_URL}${img.id}`} alt={img.imageName} />
//               <span>{img.imageName}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* NEWS FORM */}
//       <form className="admin-news-form" onSubmit={handleSubmit}>
//         <h3>{editId ? "✏️ Yangilikni tahrirlash" : "🆕 Yangilik qo‘shish"}</h3>

//         <div className="admin-form-grid">
//           <input
//             type="text"
//             name="titleUz"
//             placeholder="Title (UZ)"
//             value={formData.titleUz}
//             onChange={handleInput}
//           />
//           <input
//             type="text"
//             name="titleRu"
//             placeholder="Title (RU)"
//             value={formData.titleRu}
//             onChange={handleInput}
//           />
//           <input
//             type="text"
//             name="titleEn"
//             placeholder="Title (EN)"
//             value={formData.titleEn}
//             onChange={handleInput}
//           />
//           <textarea
//             name="contentUz"
//             placeholder="Content (UZ)"
//             value={formData.contentUz}
//             onChange={handleInput}
//           ></textarea>
//           <textarea
//             name="contentRu"
//             placeholder="Content (RU)"
//             value={formData.contentRu}
//             onChange={handleInput}
//           ></textarea>
//           <textarea
//             name="contentEn"
//             placeholder="Content (EN)"
//             value={formData.contentEn}
//             onChange={handleInput}
//           ></textarea>
//         </div>

//         <button type="submit" className="admin-save-btn">
//           {editId ? "Yangilikni yangilash" : "Qo‘shish"}
//         </button>
//       </form>

//       {/* NEWS LIST */}
//       <div className="admin-news-list">
//         <h3>🗂️ Mavjud yangiliklar</h3>
//         <div className="admin-news-grid">
//           {newsList.map((item) => (
//             <div className="admin-news-card" key={item.id}>
//               <img
//                 src={`${API_URL}${item.newsImageId}`}
//                 alt={item.titleUz}
//                 className="admin-news-thumb"
//               />
//               <div className="admin-news-info">
//                 <h4>{item.titleUz}</h4>
//                 <p>{item.contentUz?.slice(0, 100)}...</p>
//                 <div className="admin-card-actions">
//                   <button className="admin-edit-btn" onClick={() => handleEdit(item)}>
//                     Edit
//                   </button>
//                   <button
//                     className="admin-delete-btn"
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsAdmin;






















































import React, { useEffect, useState } from "react";
import "./admin_panel_all_jsx/admin_css/NewsAdmin.css";

const API_URL = `${import.meta.env.VITE_ROOT_URL}/api/Image/`;
const NEWS_API = "https://api.nyotv.uz/api/News";
const ITEMS_PER_PAGE = 10;

const NewsAdmin = () => {
  const [images, setImages] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingNews, setEditingNews] = useState(null);

  const [newsData, setNewsData] = useState({
    titleUz: "",
    titleRu: "",
    titleEn: "",
    contentUz: "",
    contentRu: "",
    contentEn: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchImages();
    fetchNews();
  }, []);

  // === Rasmlarni olish ===
  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_URL}all`);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // === Yangiliklarni olish ===
  const fetchNews = async () => {
    try {
      const res = await fetch(NEWS_API);
      const data = await res.json();
      setNewsList(Array.isArray(data) ? data : data.data || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // === Fayl tanlash ===
  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  // === Fayl yuklash ===
  const uploadImage = async () => {
    if (!selectedFile) return alert("Fayl tanlanmagan!");
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(`${API_URL}upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!response.ok) throw new Error("Upload xatosi!");
      setSelectedFile(null);
      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // === Rasm o‘chirish ===
  const deleteImage = async (id) => {
    if (!window.confirm("Rostdan ham o‘chirmoqchimisiz?")) return;
    try {
      await fetch(`${API_URL}${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  // === Yangilik qo‘shish ===
  const handleNewsSubmit = async () => {
    if (!selectedImageId) return alert("Rasm tanlang!");
    try {
      const response = await fetch(NEWS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newsData,
          newsImageId: selectedImageId,
          newsBackTVId: 0,
        }),
      });

      if (response.ok) {
        alert("✅ Yangilik qo‘shildi!");
        setNewsData({
          titleUz: "",
          titleRu: "",
          titleEn: "",
          contentUz: "",
          contentRu: "",
          contentEn: "",
        });
        setSelectedImageId(null);
        fetchNews();
      } else {
        alert("❌ Xatolik: qo‘shilmadi!");
      }
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  // === Yangilikni o‘chirish ===
  const deleteNews = async (id) => {
    if (!window.confirm("Bu yangilikni o‘chirmoqchimisiz?")) return;
    try {
      await fetch(`${NEWS_API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  // === Yangilikni tahrirlash ===
  const handleEdit = (news) => {
    setEditingNews(news);
    setNewsData({
      titleUz: news.titleUz,
      titleRu: news.titleRu,
      titleEn: news.titleEn,
      contentUz: news.contentUz,
      contentRu: news.contentRu,
      contentEn: news.contentEn,
    });
    setSelectedImageId(news.newsImageId);
  };

  const handleUpdate = async () => {
    if (!editingNews) return;
    try {
      const response = await fetch(`${NEWS_API}/${editingNews.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newsData,
          newsImageId: selectedImageId,
        }),
      });
      if (response.ok) {
        alert("✅ Yangilik yangilandi!");
        setEditingNews(null);
        setNewsData({
          titleUz: "",
          titleRu: "",
          titleEn: "",
          contentUz: "",
          contentRu: "",
          contentEn: "",
        });
        fetchNews();
      } else {
        alert("❌ Yangilashda xatolik!");
      }
    } catch (error) {
      console.error("Error updating news:", error);
    }
  };

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const paginatedImages = images.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="admin-container">
      {/* === IMAGE CRUD === */}
      <div className="image-crud-container">
        <h2>🖼 Image CRUD</h2>

        <div className="upload-section">
          <label className="file-label">
            <input type="file" onChange={handleFileChange} />
            <span className="file-button">Choose File</span>
            <span className="file-name">
              {selectedFile ? selectedFile.name : "No file chosen"}
            </span>
          </label>
          <button className="upload-btn" onClick={uploadImage}>
            Upload
          </button>
        </div>

        <table className="image-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image Id</th>
              <th>Name</th>
              <th>Preview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedImages.map((image, i) => (
              <tr key={image.id}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + i + 1}</td>
                <td>{image.id}</td>
                <td>{image.imageName}</td>
                <td>
                  <img
                    src={`${API_URL}${image.id}`}
                    alt={image.imageName}
                    className="thumbnail"
                  />
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => window.open(`${API_URL}${image.id}`, "_blank")}
                  >
                    View
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteImage(image.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* === NEWS FORM === */}
      <div className="news-form">
        <h2>{editingNews ? "✏️ Yangilikni tahrirlash" : "📰 Yangilik qo‘shish"}</h2>

        {["Uz", "Ru", "En"].map((lang) => (
          <div key={lang} className="form-group">
            <label>Title ({lang})</label>
            <input
              type="text"
              value={newsData[`title${lang}`]}
              onChange={(e) =>
                setNewsData({ ...newsData, [`title${lang}`]: e.target.value })
              }
            />
          </div>
        ))}

        {["Uz", "Ru", "En"].map((lang) => (
          <div key={lang} className="form-group">
            <label>Content ({lang})</label>
            <textarea
              value={newsData[`content${lang}`]}
              onChange={(e) =>
                setNewsData({ ...newsData, [`content${lang}`]: e.target.value })
              }
            />
          </div>
        ))}

        <div className="image-select-section">
          <h3>🖼 Rasm tanlang</h3>
          <div className="image-grid">
            {images.map((img) => (
              <div
                key={img.id}
                className={`image-box ${
                  selectedImageId === img.id ? "selected-image" : ""
                }`}
                onClick={() => setSelectedImageId(img.id)}
              >
                <img src={`${API_URL}${img.id}`} alt={img.imageName} />
              </div>
            ))}
          </div>
        </div>

        <button
          className="upload-btn"
          onClick={editingNews ? handleUpdate : handleNewsSubmit}
        >
          {editingNews ? "Yangilash" : "Yangilikni saqlash"}
        </button>
      </div>

      {/* === NEWS CARDLAR === */}
      <div className="news-cardds-container">
        <h2>🗞 Yangiliklar ro‘yxati</h2>
        <div className="news-cardds-grid">
          {newsList.length === 0 ? (
            <p className="no-news">Yangiliklar topilmadi</p>
          ) : (
            newsList.map((n) => (
              <div key={n.id} className="news-cardd-admin">
                <img
                  src={`${API_URL}${n.newsImageId}`}
                  alt={n.titleUz}
                  className="news-img-admin"
                />
                <div className="news-info-admin">
                  <h4>{n.titleUz}</h4>
                  <p>{n.contentUz?.slice(0, 100)}...</p>
                </div>
                <div className="news-actions-admin">
                  <button className="edit-btn" onClick={() => handleEdit(n)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => deleteNews(n.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAdmin;
