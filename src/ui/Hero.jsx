import LinkButton from './LinkButton';

function Hero() {
  return (
    <section className=" bg-hero-image-mobile bg-cover bg-bottom bg-no-repeat pt-6 sm:bg-hero-image-tablet sm:bg-center md:bg-hero-image-desktop">
      <div className="items-bottom m-auto flex w-[95%] flex-col justify-center py-24 text-center">
        <h3 className="mb-4 mt-2 uppercase tracking-[10px] text-gray-400">
          new product
        </h3>
        <h1 className="mb-5 text-5xl font-bold uppercase tracking-wide text-gray-200">
          XX99 Mark II Headphones
        </h1>
        <p className=" mb-7 text-lg font-semibold text-gray-300">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <div>
          <LinkButton to="/category/product/:xx99-mark-two-headphones">
            see product
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
