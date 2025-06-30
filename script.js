// script.js
const novelData = {
  "bumi": {
    judul: "Bumi",
    penulis: "Tere Liye",
    sinopsis: "Perjalanan Raib menjelajahi dunia paralel yang penuh rahasia dan petualangan.",
    rating: "4.7/5",
    cover: "assets/bumi.jpg",
    pdf: "pdf/bumi.pdf"
  },
  "bumi-manusia": {
    judul: "Bumi Manusia",
    penulis: "Pramoedya A. Toer",
    sinopsis: "Kisah Minke menghadapi kolonialisme dan percintaan di era Hindia Belanda.",
    rating: "4.8/5",
    cover: "assets/bumi-manusia.jpg",
    pdf: "pdf/bumi-manusia.pdf"
  }
};

const params = new URLSearchParams(window.location.search);
const judul = params.get('judul');
const novel = novelData[judul];

if (novel) {
  document.getElementById('novel-container').innerHTML = `
    <div class="novel-card-detail">
      <img src="${novel.cover}" alt="${novel.judul}">
      <div class="novel-info">
        <h2>${novel.judul}</h2>
        <p><strong>Penulis:</strong> ${novel.penulis}</p>
        <p><strong>Rating:</strong> ${novel.rating}</p>
        <p>${novel.sinopsis}</p>
        <a href="${novel.pdf}" class="btn" download>Download PDF</a>
      </div>
    </div>
  `;
} else {
  document.getElementById('novel-container').innerHTML = `<p>Novel tidak ditemukan.</p>`;
}
