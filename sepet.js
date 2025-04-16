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

    function sepetiYukle() {
      const sepet = JSON.parse(localStorage.getItem("sepet")) || [];

      if (sepet.length === 0) {
        bosMesaj.style.display = "block";
        return;
      }

      bosMesaj.style.display = "none";

      sepet.forEach((urun, index) => {
        const li = document.createElement("li");
        li.textContent = urun;

        const silBtn = document.createElement("button");
        silBtn.textContent = "Sil";
        silBtn.onclick = () => {
          sepet.splice(index, 1);
          localStorage.setItem("sepet", JSON.stringify(sepet));
          location.reload();
        };

        li.appendChild(silBtn);
        sepetListesi.appendChild(li);
      });
    }

    function sepetiTemizle() {
      localStorage.removeItem("sepet");
      location.reload();
    }

    sepetiYukle();
// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", sepetiGoster);


