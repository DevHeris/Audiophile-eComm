import { Link } from 'react-router-dom';

function CategoryDisplayItem({ category, imgSrc }) {
  return (
    <li className="flex flex-col items-center uppercase">
      <img
        src={imgSrc}
        alt={`${category} image`}
        className="z-10 max-w-[80%] md:max-w-[60%]"
      />
      <div className="md:pt-26 flex w-full -translate-y-[65%] flex-col items-center rounded-lg bg-gray-100 pb-7 pt-24  md:-translate-y-[60%]">
        <h4 className="pb-1.5 font-bold text-zinc-950">{category}</h4>
        <Link
          to={`/category/${category}`}
          className="flex items-center gap-2 text-xs font-bold text-zinc-500"
        >
          shop
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="arrow-icon"
          />
        </Link>
      </div>
    </li>
  );
}

export default CategoryDisplayItem;
