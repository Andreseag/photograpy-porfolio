import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <header className="bg-white w-full md:w-[300px] md:h-screen sticky top-0 px-4 md:px-10 py-4 md:py-16">
        <h1 className="text-2xl md:text-4xl uppercase mb-7 tracking-[0.133333em]">
          Laura Rodriguez
        </h1>
        <nav className="hidden md:block">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#about"
                className="py-1 text-xl uppercase tracking-[0.09em]"
              >
                Introducción
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="py-1 text-xl uppercase tracking-[0.09em]"
              >
                Bodas +
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="py-1 text-xl uppercase tracking-[0.09em]"
              >
                Newborn +
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="py-1 text-xl uppercase tracking-[0.09em]"
              >
                Familiares +
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="py-1 text-xl uppercase tracking-[0.09em]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/*  */}
      <section className="py-16 px-4 md:pr-20">
        {/* Images */}
        <div className="images flex gap-1">
          <Image
            src="/img/photos/7.jpg"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-1/2"
          />
          <Image
            src="/img/photos/21.jpg"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-1/2"
          />
        </div>
        {/* Pharagrap */}
        <p className="text-lg my-4">
          I approach photography with a romantic, impressionist sensibility.
          Over the past decade, I have had the pleasure of documenting some of
          the most iconic and exclusive celebrations for discerning patrons in
          over twenty countries and six continents. I have been named one of the
          top film photographers in the world and featured in numerous
          prestigious publications such as Harpers Bazaar, Elle, Town & Country
          and Martha Stewart Weddings.{" "}
        </p>
        <div className="carousel-images flex gap-1">
          <Image
            src="/img/photos/32.jpg"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
        {/* Pharagrap */}
        <p className="text-lg my-4">
          I approach photography with a romantic, impressionist sensibility.
          Over the past decade, I have had the pleasure of documenting some of
          the most iconic and exclusive celebrations for discerning patrons in
          over twenty countries and six continents. I have been named one of the
          top film photographers in the world and featured in numerous
          prestigious publications such as Harpers Bazaar, Elle, Town & Country
          and Martha Stewart Weddings.{" "}
        </p>
        {/* Images GIRD  */}
        <div className="grid-images grid grid-cols-2 md:grid-cols-4 gap-1">
          <Image
            src="/img/photos/17.jpg"
            alt="Laura Fotografía"
            className="w-full"
            width={1920}
            height={1080}
          />

          <Image
            src="/img/photos/18.jpg"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
          <Image
            src="/img/photos/15.jpg"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
          <Image
            src="/img/photos/20.jpg"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
        {/* Pharagrap */}
        <p className="text-lg my-4 border-l border-gray-600 pl-3">
          {`"Every romantic notion I’ve ever conjured up for a modern yet timeless
          sun-drenched wedding album is perfectly encapsulated in every image
          Jen creates — from delicate details and décor to tantalizing food
          shots and couture-clad, gorgeous brides, Jen’s images have it all, and
          then some."`}
        </p>
        {/*  */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-xl italic mb-8">
            Jacqueline Tobin, Editor-in-Chief,{" "}
            <span className="text-[#bc8f8f]">Rangefinder Magazine</span>
          </p>
          {/* Images GIRD  */}
          <div className="grid-images grid grid-cols-2 mb-2 gap-1 w-full">
            <Image
              src="/img/photos/22.jpg"
              alt="Laura Fotografía"
              width={1920}
              height={1080}
              className="w-full"
            />
            <Image
              src="/img/photos/24.jpg"
              alt="Laura Fotografía"
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
          {/* create full image */}
          <div className="flex flex-col gap-2">
            <Image
              src="/img/photos/28.jpg"
              alt="Laura Fotografía"
              width={1920}
              height={1080}
              className="w-full"
            />
            <Image
              src="/img/photos/30.jpg"
              alt="Laura Fotografía"
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
