// Örnek ürün verisi (gerçek hayatta localStorage veya backend ile alınır)
// const sepet = [
//   { ad: "Kablosuz Kulaklık", fiyat: 499, adet: 1 },
//   { ad: "Bluetooth Hoparlör", fiyat: 299, adet: 2 },
//   { ad: "Powerbank 10000mAh", fiyat: 199, adet: 1 },
// ];

// function sepetiGoster() {
//   const sepetDiv = document.getElementById("sepetListesi");
//   const toplamDiv = document.getElementById("toplamTutar");
//   sepetDiv.innerHTML = "";
//   let toplam = 0;

//   sepet.forEach((urun, index) => {
//     const urunToplam = urun.fiyat * urun.adet;
//     toplam += urunToplam;

//     const item = document.createElement("div");
//     item.className = "cart-item";
//     item.innerHTML = `
//       <div>
//         <strong>${urun.ad}</strong><br />
//         Fiyat: ₺${urun.fiyat} x ${urun.adet}
//       </div>
//       <div>
//         ₺${urunToplam}
//       </div>
//     `;
//     sepetDiv.appendChild(item);
//   });

//   toplamDiv.innerText = ₺${toplam};
// }

function odemeYap() {
  alert("Ödeme sayfasına yönlendiriliyorsunuz...");
}

const sepetListesi = document.getElementById("sepetListesi");
const bosMesaj = document.getElementById("bosMesaj");

// Sepeti yükleme fonksiyonu
 // Sepeti Yükle ve Göster
 function sepetiYukle() {
  const sepet = JSON.parse(localStorage.getItem("sepet")) || [];
  const sepetListesi = document.getElementById("sepetListesi");
  const bosMesaj = document.getElementById("bosMesaj");
  const toplamTutar = document.getElementById("toplamTutar");

  if (sepet.length === 0) {
    bosMesaj.style.display = "block";
    sepetListesi.innerHTML = "";
    toplamTutar.textContent = "0";
    return;
  }

  bosMesaj.style.display = "none";
  sepetListesi.innerHTML = "";

  let toplam = 0;

  sepet.forEach((urun, index) => {
    const li = document.createElement("li");
    li.textContent = `${urun.urunAdi} - ${urun.miktar} adet - ₺${urun.fiyat * urun.miktar}`;

    // Miktarı artırma butonu
    const artirBtn = document.createElement("button");
    artirBtn.textContent = "+";
    artirBtn.onclick = () => {
      urun.miktar++;
      localStorage.setItem("sepet", JSON.stringify(sepet));
      sepetiYukle();
    };

    // Miktarı azaltma butonu
    const azaltBtn = document.createElement("button");
    azaltBtn.textContent = "-";
    azaltBtn.onclick = () => {
      if (urun.miktar > 1) {
        urun.miktar--;
        localStorage.setItem("sepet", JSON.stringify(sepet));
        sepetiYukle();
      }
    };

    // Silme butonu
    const silBtn = document.createElement("button");
    silBtn.textContent = "Sil";
    silBtn.onclick = () => {
      sepet.splice(index, 1);
      localStorage.setItem("sepet", JSON.stringify(sepet));
      sepetiYukle();
    };

    li.appendChild(artirBtn);
    li.appendChild(azaltBtn);
    li.appendChild(silBtn);
    sepetListesi.appendChild(li);

    // Toplam tutarı hesapla
    toplam += urun.fiyat * urun.miktar;
  });

  toplamTutar.textContent = toplam.toFixed(2);
}

// Ödeme yapma fonksiyonu (simülasyon)
function odemeYap() {
  const sepet = JSON.parse(localStorage.getItem("sepet")) || [];

  if (sepet.length === 0) {
    alert("Sepetinizde ürün yok!");
    return;
  }

  // Burada gerçek ödeme API'si entegrasyonu yapılabilir.
  alert(`Ödemeniz ₺${document.getElementById("toplamTutar").textContent} olarak başarılı bir şekilde alındı!`);

  // Ödeme sonrası sepete ait verileri temizle
  localStorage.removeItem("sepet");
  sepetiYukle(); // Sepeti tekrar yükle (boş olacak)
}

// Sepeti temizleme fonksiyonu
function sepetiTemizle() {
  localStorage.removeItem("sepet");
  sepetiYukle(); // Sepeti yeniden yükle
}


// Sepete ürün eklerken benzersiz olmasını sağla
function urunEkle(urunAdi) {
  let sepet = JSON.parse(localStorage.getItem("sepet")) || [];

  // Aynı ürünü sepete eklememek için kontrol yapıyoruz
  if (sepet.includes(urunAdi)) {
    alert("Bu ürün zaten sepette.");
    return;
  }

  sepet.push(urunAdi);
  localStorage.setItem("sepet", JSON.stringify(sepet));

  // Sayfayı yenileyerek sepeti tekrar yükleyelim
  location.reload();
}

sepetiYukle();

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", sepetiGoster);


