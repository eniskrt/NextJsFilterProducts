"use client";
import "@/helpers/style/price-style.scss";
import data from "@/helpers/data/data.json"

const PriceInput = ({ setMaxPrice, setMinPrice, setColor, color }) => {
  const handleMax = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleMin = (e) => {
    setMinPrice(e.target.value);
  };

  const handleSelect = (e) => { 
    console.log(e.target.innerText);
    setColor(e.target.innerText)
   }

  const uniqueColors = [...new Set(data.flatMap(item => item.renk))];



  return (
    <div className="container price-container">
      <input
        type="number"
        className="price max"
        placeholder="Min price..."
        onChange={(e) => handleMin(e)}
      />
      <input
        type="number"
        className="price min"
        placeholder="Max price..."
        onChange={(e) => handleMax(e)}
      />
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {color ? color : "Choose a color"}
        </button>
        <ul className="dropdown-menu">
            {
               uniqueColors.map((color, index) => (
                <li key={index}>
                  <span className="dropdown-item"  onClick={(e)=>handleSelect(e)}>
                    {color}
                  </span>
                </li>
              ))
            }
          
        </ul>
      </div>
    </div>
  );
};

export default PriceInput;
