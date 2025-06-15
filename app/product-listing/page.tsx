import { ProductCard } from "@/components/cards/product-card";
import Footer from "@/components/headersAndFooters/footer";
import BigScreenHeader from "@/components/headersAndFooters/large-screen-header";
import SmallScreenHeader from "@/components/headersAndFooters/small-screen-header";
import { productData } from "@/lib/MockData/productsInterface";

export default function ProductListingPage() {
  return (
    <>
      <SmallScreenHeader />
      <BigScreenHeader />
      <div className="grid grid-cols-2 gap-2 mt-1.5 px-3 sm:gap-3 sm:grid-cols-2 md:grid-cols-3 md:px-30 ">
        {productData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imgLink={item.imgLink}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
