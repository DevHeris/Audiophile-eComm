import LinkButton from './LinkButton';

function Hero() {
  return (
    <section
      className=" flex h-[80dvh] items-center bg-hero-image-mobile bg-cover bg-bottom bg-no-repeat pt-6 sm:h-3/4 sm:bg-hero-image-tablet sm:bg-center md:h-[85dvh] md:justify-start md:bg-hero-image-desktop"
      style={{ backgroundPosition: 'bottom 25% ' }}
    >
      <div className=" sm:m-auto md:w-[85%]">
        <div className=" m-auto w-[95%] text-center sm:w-[27rem]  md:m-0  md:w-[40%]  md:text-left">
          <h3 className="mb-4 mt-2 uppercase tracking-[10px] text-gray-400 sm:text-xl md:mb-5 md:text-base">
            new product
          </h3>
          <h1 className="mb-5 text-5xl font-bold uppercase tracking-wide text-gray-200 sm:text-6xl md:mb-6 md:text-5xl">
            XX99 Mark II Headphones
          </h1>
          <p className=" mb-9 text-lg font-semibold text-gray-300 sm:text-xl md:mb-10 md:text-base">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div>
            <LinkButton to="/category/product/:xx99-mark-two-headphones">
              see product
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
