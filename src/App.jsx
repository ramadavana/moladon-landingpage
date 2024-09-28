import { Typography } from "@material-tailwind/react";
import NavbarForDropdownWithMultipleLanguages from "./components/Navbar/index.jsx";
import CarouselSlides from "./components/Carousel/index.jsx";
import Footer from "./components/Footer/index.jsx";
import ProductCard from "./components/Product/index.jsx";
import About from "./components/About/index.jsx";
import About2 from "./components/About2/index.jsx";

export default function App() {
  const images = {
    navLogo: "/logo/moladon-transparent.png",
    aboutPict: "/images/pictures/profilepict-ramadavana-zoom-square.JPG",
    aboutIcon1: "/icons/about-icon (1).png",
    aboutIcon2: "/icons/about-icon (2).png",
    aboutIcon3: "/icons/about-icon (3).png",
    aboutLogo: "/logo/moladon-top-white.png",
    aboutBg: "/images/47.jpg",
  };

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="font-medium">
        <a
          href="#"
          className="flex px-2 py-2 border rounded-lg lg:px-4 item-center hover:border-blue-600 hover:text-blue-600">
          Home
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="font-medium">
        <a
          href="#"
          className="flex px-2 py-2 border rounded-lg lg:px-4 item-center hover:border-blue-600 hover:text-blue-600">
          About
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="font-medium">
        <a
          href="#"
          className="flex px-2 py-2 border rounded-lg lg:px-4 item-center hover:border-blue-600 hover:text-blue-600">
          Products
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="font-medium">
        <a
          href="#"
          className="flex px-2 py-2 border rounded-lg lg:px-4 item-center hover:border-blue-600 hover:text-blue-600">
          Docs
        </a>
      </Typography>
    </ul>
  );

  const countries = [
    {
      flag: "🇺🇸",
      name: "English",
    },
    {
      flag: "🇪🇸",
      name: "Spain",
    },
    {
      flag: "🇫🇷",
      name: "France",
    },
    {
      flag: "🇩🇪",
      name: "Germany",
    },
  ];

  const carouselData = [
    {
      image: "/images/carousel/carousel1.webp",
      title: "Moladon Pinjam",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/carousel/carousel2.webp",
      title: "Moladon Kredit",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/carousel/carousel3.webp",
      title: "Moladon Sewa",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/carousel/carousel4.webp",
      title: "Mobil Baru",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/carousel/carousel5.webp",
      title: "Transaksi Digital",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
  ];

  const footMenu = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
      title: "Help Center",
      links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
      title: "Products",
      links: ["Templates", "UI Kits", "Icons", "Mockups"],
    },
  ];

  const productData = [
    {
      image: "/images/product/product1.webp",
      title: "Product Title 1",
      price: "$100.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/product/product2.webp",
      title: "Product Title 2",
      price: "$200.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/product/product3.webp",
      title: "Product Title 3",
      price: "$300.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/product/product4.webp",
      title: "Product Title 4",
      price: "$400.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/product/product5.webp",
      title: "Product Title 5",
      price: "$500.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
    {
      image: "/images/product/product6.webp",
      title: "Product Title 6",
      price: "$600.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in.",
    },
  ];

  const aboutInfo = {
    title: "COMPANY OBJECTIVES",
    headline: "Uncover the Universe of Financial Planners",
    text: (
      <p>
        Financial planning is more than just managing money; it&apos;s about creating a roadmap for
        your financial future. A financial planner is a qualified professional who helps individuals
        and families make informed decisions about their finances, frombudgeting and saving to
        investing and retirement planning.
        <br />
        <br />
        One of the key benefits of working with a financial planner is receiving
        personalizedfinancial advice tailored to your unique goals and circumstances. Whether
        you&apos;replanning for retirement, saving for a major purchase, or managing debt, a
        financialplanner can develop a comprehensive strategy designed to help you achieve
        yourobjectives.
      </p>
    ),
    awards: [
      {
        count: "20+",
        title: "Years of Experience",
      },
      {
        count: "200+",
        title: "Successful Projects",
      },
      {
        count: "96%",
        title: "Positive Reviews",
      },
    ],
  };

  return (
    <>
      <NavbarForDropdownWithMultipleLanguages
        navLogo={images.navLogo}
        navList={navList}
        countries={countries}
      />
      <main>
        <section>
          <CarouselSlides carouselData={carouselData} />
        </section>

        <section>
          <ProductCard productData={productData} />
        </section>

        <section>
          <About
            picture={images.aboutPict}
            aboutIcon1={images.aboutIcon1}
            aboutIcon2={images.aboutIcon2}
            aboutIcon3={images.aboutIcon3}
          />
        </section>

        <section>
          <About2
            aboutLogo={images.aboutLogo}
            aboutBg={images.aboutBg}
            title={aboutInfo.title}
            headline={aboutInfo.headline}
            text={aboutInfo.text}
            awards={aboutInfo.awards}
          />
        </section>
      </main>
      <Footer footMenu={footMenu} />
    </>
  );
}
