import { useSearchParams } from "react-router-dom";
import { categories } from "../../../../constants/category";
import CategoryBox from "./CategoryBox/CategoryBox";

function Category() {
  const [params] = useSearchParams();
  
  
  const category = params.get('category');
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
