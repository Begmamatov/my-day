import Banner from "./components/Banner";
import Category from "./components/Category";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo/productInfo";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "10vh" }}>
        <Banner />
        <Category />
        <ProductList />
        <ProductInfo />
      </div>
    </div>
  )
}
