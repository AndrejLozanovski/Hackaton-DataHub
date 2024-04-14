import Chart from "@/components/Chart";
import ExpertsCards from "@/components/ExpertsCards";
import GeoPopup from "@/components/GeoPopup";
import Productdetails from "@/components/ProductDetails";
import ProductMarketCard from "@/components/ProductMarketCard";
import ProductCarousel from "@/components/ProductsSlider";
import Review from "@/components/Reviews";
import { WishListPopUp } from "@/components/WishlistPopUp";

export default function ProductPage() {
  return (
    <>
      <Productdetails />
      <GeoPopup />
      <ProductMarketCard />
      <ProductCarousel title={"Слични Продукти"} />
      <Review />
      <ExpertsCards />
      <Chart />
      <WishListPopUp />
    </>
  );
}
