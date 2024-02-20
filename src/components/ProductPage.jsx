import React from 'react'
import data from "@/helpers/data/data.json"
import ProductCard from './ProductCard'

const ProductPage = ({filtered, maxPrice, minPrice, color, sorted}) => {

    let filteredData;

    if(!filtered){
        filteredData = data
    }else {
        filteredData=  data.filter((item)=>item.ad.toLowerCase().includes(filtered.toLowerCase()))
    }

    if (maxPrice || minPrice) {
        filteredData = filteredData.filter((item) => {
          if (minPrice && maxPrice) {
            return item.price <= Number(maxPrice) && item.price >= Number(minPrice);
          } else if (minPrice) {
            return item.price >= Number(minPrice);
          } else if (maxPrice) {
            return item.price <= Number(maxPrice);
          }
          return true; // Eğer herhangi bir fiyat sınırlaması yapılmamışsa, tüm ürünleri geçir
        });
    }
    if(sorted === "desc"){
      filteredData = filteredData.sort((a,b)=> b.price - a.price)
    }else if(sorted === "asc"){
      filteredData = filteredData.sort((a,b)=> a.price - b.price)
    }
    

    if(color){
        filteredData=  filteredData.filter((item)=>item?.renk?.join(",").toLowerCase().includes(color.toLowerCase()))
    }
      

    

  return (
    <div className='container'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <ProductCard data={filteredData}/>
        </div>
    </div>
  )
}

export default ProductPage