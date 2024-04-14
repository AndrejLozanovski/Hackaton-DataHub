import FilterCategoryButton from "@/components/FilterCategoryButton";
import FilterComponent from "@/components/Filters";
import { ProductDetailsCard } from "@/components/ProductDetailsCard";
import { WishListPopUp } from "@/components/WishlistPopUp";

export default function ProductListing() {
  return (
    <>
      <FilterCategoryButton />
      <div className="row">
        <div className="col-3 border-right ">
          <FilterComponent />
        </div>
        <div className="col-8">
          <div className="d-flex flex-wrap">
            <ProductDetailsCard />
          </div>
        </div>
        <WishListPopUp />
      </div>
    </>
  );
}
