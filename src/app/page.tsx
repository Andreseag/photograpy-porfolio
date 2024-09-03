import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <header className="w-[300px] h-screen sticky top-0 px-10 py-16">
        <h1 className="text-4xl uppercase mb-7 tracking-[0.133333em]">
          Laura Rodriguez
        </h1>
        <nav>
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
      <section className="py-16 pr-20">
        {/* Images */}
        <div className="images flex gap-1">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1552236807068-28QIXSPTKK64EWMFW89Q/161-004496-R1-006-JenHuang-ChialiMeng_Retouch_v01_vis01.jpg?format=750w"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-1/2"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1552237194818-3O5E8DX15UCYYGVXU83N/Mondine-NineCakes-33-Jen_Huang-000486-R1-031-14.jpg?format=750w"
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
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1561133281957-UEU0Q2AAN7NXGPAZ3A24/Santorini-Wedding-Photography-Jen-Huang4-007956-R1-013.jpg?format=1500w"
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
        <div className="grid-images grid grid-cols-4 gap-1">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1710108997826-NKJOR3NA002N6P31AC77/Refined-Film-Jen-Huang-Photo-49-398477_024.jpg?format=500w"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1710108881785-MRCZHDH8VOXCOIWSZT8W/JenHuang-2015.05-ElboPortrait-3-003371-R1-013.jpg?format=500w"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1557725453607-6QPULGRQC00XLNRPOR3Q/KS-Editorial-15-Jen-Huang-006976-R2-015.jpg?format=500w"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1710108980932-WOJ8QKXYO0DRSEQ0UYF9/CCC-76-Jen-Huang-000010340007.jpg?format=500w"
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
              src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1552237382977-AYVQGX8OJ9TKUWRWS3JH/KM-Selects-159-Jen-Huang-43006_03.jpg?format=750w"
              alt="Laura Fotografía"
              width={1920}
              height={1080}
              className="w-full"
            />
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1710108800496-2SN7M33IA11F06BL5O9Y/Pellerin-Family-101-Jen_Huang-368575_002.jpg?format=750w"
              alt="Laura Fotografía"
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
          {/* create full image */}
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1620167440343-4RG406A1ZUVLX1RYSB5V/Filoli-Garden-Wedding-Photographer-Jen-Huang-Photo-58-410097_009.jpg?format=2500w"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1633385703942-GLPZ4TAIFRB184CQ4A40/YB-Ed-Jen-Huang-Photo-231-468082_0001.jpg?format=2500w"
            alt="Laura Fotografía"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
