// Örnek ürün verisi (gerçek hayatta localStorage veya backend ile alınır)
const sepet = [
  { ad: "Kablosuz Kulaklık", fiyat: 499, adet: 1 },
  { ad: "Bluetooth Hoparlör", fiyat: 299, adet: 2 },
  { ad: "Powerbank 10000mAh", fiyat: 199, adet: 1 },
];

function sepetiGoster() {
  const sepetDiv = document.getElementById("sepetListesi");
  const toplamDiv = document.getElementById("toplamTutar");
  sepetDiv.innerHTML = "";
  let toplam = 0;

  sepet.forEach((urun, index) => {
    const urunToplam = urun.fiyat * urun.adet;
    toplam += urunToplam;

    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <div>
        <strong>${urun.ad}</strong><br />
        Fiyat: ₺${urun.fiyat} x ${urun.adet}
      </div>
      <div>
        ₺${urunToplam}
      </div>
    `;
    sepetDiv.appendChild(item);
  });

  toplamDiv.innerText = ₺${toplam};
}

function odemeYap() {
  alert("Ödeme sayfasına yönlendiriliyorsunuz...");
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", sepetiGoster);