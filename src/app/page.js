"use client"
import PriceInput from "@/components/PriceInput";
import ProductPage from "@/components/ProductPage";
import SearchBar from "@/components/SearchBar";
import Spacer from "@/components/Spacer";
import "@/helpers/style/style.scss"
import { useState } from "react";


export default function Home() {

  const [filtered, setFiltered] = useState("")
  const [maxPrice, setMaxPrice] = useState()
  const [minPrice, setMinPrice] = useState()
  const [color, setColor] = useState("")
  const [sorted, setSorted] = useState("")

  return (
    <main>
      <Spacer height="25px"/>
      <SearchBar setFiltered={setFiltered}/>
      <Spacer height="20px"/>
      <PriceInput setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} setColor={setColor} color={color} setSorted={setSorted}/>
      <Spacer height="50px"/>
      <ProductPage filtered={filtered} maxPrice={maxPrice} minPrice={minPrice} color={color} sorted={sorted}/>
      <Spacer/>
    </main>
  );
}
