import CategoryDisplayItem from './CategoryDisplayItem';

function CategoriesListDisplay() {
  return (
    <section className="px-10 py-14 sm:p-6 sm:pt-14 md:px-32">
      <ul className="flex flex-col items-end  sm:flex-row sm:gap-3 md:gap-6">
        <CategoryDisplayItem
          category="headphones"
          imgSrc="/src/assets/shared/desktop/image-category-thumbnail-headphones.png"
        />
        <CategoryDisplayItem
          category="speakers"
          imgSrc="/src/assets/shared/desktop/image-category-thumbnail-speakers.png"
        />
        <CategoryDisplayItem
          category="earphones"
          imgSrc="/src/assets/shared/desktop/image-category-thumbnail-earphones.png"
        />
      </ul>
    </section>
  );
}

export default CategoriesListDisplay;
