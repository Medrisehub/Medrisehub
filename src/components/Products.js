import React from "react";
import "./Products.css";

import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "CALCIVEX XT",
      description:
        "Elemental calcium 500mg+L -methylfolate 1 mg+methylcobalamin 1500mcg+pyridoxal phosphate 20mg+vitamin D3 200 IU",
      image: image1,
    },
    {
      id: 2,
      title: "ETOLENE MR",
      description: "Etodolac 400mg+thiocolchicoside 4mg",
      image: image2,
    },
    {
      id: 3,
      title: "JOINTMEND C2",
      description:
        "Glucosamine 750mg+chondroitin 50mg+collage type ll 150mg+vitamins and minerals",
      image: image3,
    },
    {
      id: 4,
      title: "NEUROZEN FORTE",
      description:
        "Methylcobalamin 1500mcg+alpha lipoic acid 200mg+calcium panthothenate 50mcg+elemental chromium 200mg+elemental selenium 55mcg+folic acid 1.5mg+inositol 100mg+niacinamide 45mg+pyridoxine 10mg+riboflavine 10mg",
      image: image4,
    },
    {
      id: 5,
      title: "Neurozen injection",
      description:
        "Methylcobalamin 1500mcg+niacinamide 100mg+pyridoxine 100mg+folic acid 1.5mg",
      image: image5,
    },
    {
      id: 6,
      title: "MOXYZYME 625",
      description: "Amoxicillin 500mg+potassium calvanate 125 mg.",
      image: image6,
    },
  ];
  return (
    <div>
      <main>
        <h2>OUR PRODUCTS</h2>
        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img
                className="card-img"
                src={product.image}
                alt={product.title}
              />
              <div className="content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Products;
