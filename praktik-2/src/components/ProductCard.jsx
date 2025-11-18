import React from "react";

const ProductCard = ({ name, price, isAvailable }) => {
  // Format harga jadi "Rp. 1.000.000"
  const formatHarga = (angka) => {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  return (
    <>
      <div
        className="product-card"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "16px",
          width: "250px",
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          
        }}
      >
        <h3>{name}</h3>
        {isAvailable ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            {formatHarga(price)}
          </p>
        ) : (
          <p style={{ color: "gray", fontStyle: "italic" }}>Stok Habis</p>
        )}
      </div>
    </>
  );
};

export default ProductCard;
