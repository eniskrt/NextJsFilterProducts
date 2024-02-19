import React from "react";
import "@/helpers/style/card-style.scss"

const ProductCard = ({ data }) => {
  const [
    id,
    ad,
    marka,
    model,
    renk,
    cozunurluk,
    video_kapasitesi,
    price,
    baglantı,
    pil_suresi,
    islemci,
    uyumlu_cihazlar,
    guc_tuketimi,
    uyumlu_piller,
    kapasite,
    uyumlu_kapilar,
  ] = data;

  return (
    <>
      {data.map((item) => (
        <div className="col" key={item.id}>
          <div className="card">
            <div className="card-body">
                <div className="card-title">{item.ad}</div>
                <p>Model : {item.model}</p>
                <p>Fiyat : {item.price} $</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
