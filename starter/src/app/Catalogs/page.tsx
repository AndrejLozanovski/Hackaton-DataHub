import { ProductCard } from "@/components/Card";
import FilterCategoryButton from "@/components/FilterCategoryButton";
import FilterComponent from "@/components/Filters";
import PartnersCarousel from "@/components/PartnersSlider";
import ProductCarousel from "@/components/ProductsSlider";
import { WishListPopUp } from "@/components/WishlistPopUp";
import CatalogueCarousel from "@/components/catalogueSlider";

export default function Catalogs() {
  return (
    <>
      <FilterCategoryButton />
      <CatalogueCarousel />
      <PartnersCarousel />
      <ProductCarousel title={"Популарни продукти"} />
      <WishListPopUp />
    </>
  );
}
