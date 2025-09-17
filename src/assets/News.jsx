import './designs/news.css';


const newsData = [
  {
    id: 1,
    img: "https://picsum.photos/400/250?random=1",
    title: "Yangi loyiha ishga tushdi",
    description: "Bizning yangi platformamiz foydalanuvchilarga tezkor xizmatlarni taqdim etadi."
  },
  {
    id: 2,
    img: "https://picsum.photos/400/250?random=2",
    title: "Jamoamiz kengaydi",
    description: "Yangi mutaxassislar qo‘shilib, loyihalarimiz yanada samarali bo‘lmoqda."
  },
  {
    id: 3,
    img: "https://picsum.photos/400/250?random=3",
    title: "Hamkorlik bitimi",
    description: "Yetakchi kompaniya bilan yangi hamkorlik shartnomasi imzolandi."
  },
  {
    id: 4,
    img: "https://picsum.photos/400/250?random=4",
    title: "Yutuqlarimiz",
    description: "Oxirgi chorakda mijozlar soni ikki barobar ko‘paydi."
  }
];

const News = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <h3>Yangiliklar</h3>
        <a href="#">Barchasi →</a>
      </div>
      <div className="news-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.img} alt={news.title} />
            <div className="news-content">
              <h4>{news.title}</h4>
              <p>{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
