import { ProductCard } from "@/components/Card";
import FilterCategoryButton from "@/components/FilterCategoryButton";
import FilterComponent from "@/components/Filters";
import { WishListPopUp } from "@/components/WishlistPopUp";

export default function BestDeals() {
  return (
    <>
      <h2>Најдобри Производи</h2>
      <div className="row">
        <div className="col-3 border-right ">
          <FilterComponent />
        </div>
        <div className="col-8">
          <div className="d-flex flex-wrap">
            <ProductCard />
          </div>
        </div>
        <WishListPopUp />
      </div>
    </>
  );
}
