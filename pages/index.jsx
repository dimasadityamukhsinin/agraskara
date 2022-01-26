import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination])

export default function Home() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const canonicalLink = `https://website.site${
    router.pathname
      ? `${router.pathname.startsWith('/') ? '' : '/'}${router.pathname}`
      : ''
  }`

  const navMobile = () => {
    setOpen(false)
  }

  const scrolltoview = (slug) => {
    window.scrollTo({
      top:
        document.querySelectorAll(`[data-slug*="${slug}"]`)[0].offsetTop - 60,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    navMobile()
    window.addEventListener('resize', navMobile)
    return () => {
      window.removeEventListener('resize', navMobile)
    }
  }, [])
  return (
    <div>
      <NextSeo
        title="Agraskara"
        description="Tes"
        canonical={canonicalLink}
        openGraph={{
          url: canonicalLink,
          title: 'Agraskara',
          description: 'tes',
          // images: [
          //   {
          //     url: image,
          //     alt: image_alt,
          //   },
          // ],
          site_name: 'Agraskara',
        }}
        twitter={{
          site: 'Agraskara',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name="keywords" content="tes" />
      </Head>
      <nav className="fixed z-10 w-full bg-hitam border-gray-200 px-10 max-lg:px-6 py-5 max-w-screen-2xl">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
              AGRASKARA
            </span>
          </a>
          <div className="max-md:flex items-center md:order-2 hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${
              open ? 'block' : 'hidden'
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row text-white md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  onClick={() => scrolltoview('home')}
                  className="block cursor-pointer py-2 pr-4 pl-3 hover:text-coklat md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrolltoview('about')}
                  className="block cursor-pointer py-2 pr-4 pl-3 hover:text-coklat md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrolltoview('service')}
                  className="block cursor-pointer py-2 pr-4 pl-3 hover:text-coklat md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrolltoview('product')}
                  className="block cursor-pointer py-2 pr-4 pl-3 hover:text-coklat md:p-0"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrolltoview('team')}
                  className="block cursor-pointer py-2 pr-4 pl-3 hover:text-coklat md:p-0"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrolltoview('gallery')}
                  className="block cursor-pointer py-2 pr-4 pl-3 hover:text-coklat md:p-0"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrolltoview('contact')}
                  className="block cursor-pointer py-2 pr-4 pl-3 hover:text-coklat md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        data-slug="home"
        className="max-w-screen-2xl space-x-6 max-lg:space-x-0 px-12 max-lg:px-6 pt-28 max-lg:pt-24 pb-12 w-full h-screen max-lg:h-auto flex max-lg:flex-col max-lg:space-y-10"
      >
        <div className="w-1/2 max-lg:w-full pt-8 max-lg:pt-0 max-w-xl max-lg:max-w-none h-full flex flex-col">
          <h1 className="text-5xl text-white font-bold">
            One stop solution for the finest coconut product from Indonesia
          </h1>
          <p className="mt-8 text-lg text-white">
            Akrasara is taken from the Sanskrit language derived from the word
            Askara which means Light, the State of Indonesia is known for having
            fertile soil and abundant natural resources from various sectors.
          </p>
          <div className="w-full flex space-x-4 mt-6">
            <a
              onClick={() => scrolltoview('about')}
              className="rounded-full cursor-pointer text-white py-2.5 px-10 bg-coklat"
            >
              About Us
            </a>
            <a
              onClick={() => scrolltoview('product')}
              className="rounded-full cursor-pointer text-white py-2.5 px-10 bg-coklat"
            >
              Our Product
            </a>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full h-full flex justify-center">
          <Swiper
            effect={'fade'}
            navigation={true}
            className="relative w-96 max-lg:w-full h-full max-lg:h-40rem max-lg:30rem rounded-2xl overflow-hidden"
          >
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                  alt="Delightful"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                  alt="Delightful"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                  alt="Delightful"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        data-slug="about"
        className="max-w-screen-2xl px-12 max-lg:px-6 pt-12 space-x-6 max-lg:space-x-0 pb-12 w-full h-screen max-lg:h-auto flex max-lg:flex-col max-lg:space-y-10"
      >
        <div className="w-1/2 max-lg:w-full h-full flex justify-center">
          <div className="relative w-96 max-lg:w-full h-full max-lg:h-40rem max-lg:30rem rounded-2xl overflow-hidden">
            <Image
              src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
              alt="Delightful"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full pt-8 max-lg:pt-0 max-w-xl max-lg:max-w-none h-full flex flex-col">
          <h2 className="text-5xl text-white font-bold">About Us</h2>
          <p className="mt-8 text-lg text-white">
            Akrasara is taken from the Sanskrit language derived from the word
            Askara which means Light, the State of Indonesia is known for having
            fertile soil and abundant natural resources from various sectors.
            Riau Province One of the areas that is part of the existing area and
            has potential which has been known to have a large area of ​​oil
            palm production. however we would like to introduce that Riau also
            has other sectors that have the same potential. our mission is to
            help local farmers to bring and expand their range of produce from
            agriculture to grade level We are committed to providing customers
            with the highest quality and value products. The agraskara team
            strives to continuously develop product results and maintain trust,
            transparency and communication with all business partners
          </p>
        </div>
      </div>
      <div
        data-slug="service"
        className="px-20 max-lg:px-6 pt-12 w-full h-full max-w-screen-2xl"
      >
        <h2 className="text-center text-white text-4xl">Our Key Feature</h2>
        <div className="text-white w-full mt-20 grid max-lg:flex max-lg:flex-col grid-cols-2 gap-20">
          <div className="w-full flex flex-col text-center items-center h-auto">
            <Image
              src="/integrity.png"
              alt="Delightful"
              layout="fixed"
              width={56}
              height={56}
            />
            <h4 className="text-white text-2xl mt-5">Innovation</h4>
            <p className="text-lg mt-2 max-w-md">
              For us, integrity is the quality of having a strong ethical
              principle, which followed at all times. Honesty and trust are at
              the core of integrity. Consistency in integrity is the key of our
              business.
            </p>
          </div>
          <div className="w-full flex flex-col text-center items-center h-auto">
            <Image
              src="/integrity.png"
              alt="Delightful"
              layout="fixed"
              width={56}
              height={56}
            />
            <h4 className="text-white text-2xl mt-5">COMMITMENT</h4>
            <p className="text-lg mt-2 max-w-md">
              Commitment is our promise or firm decision to do our business,
              where we will continue to provide the best to our customers as
              long as possible.
            </p>
          </div>
          <div className="w-full flex flex-col text-center items-center h-auto">
            <Image
              src="/integrity.png"
              alt="Delightful"
              layout="fixed"
              width={56}
              height={56}
            />
            <h4 className="text-white text-2xl mt-5">QUALITY</h4>
            <p className="text-lg mt-2 max-w-md">
              In our mutual thoughts, quality is not just about offering a
              product or service that exceeds the standard, but it’s also about
              the reputation we gain for consistently delivering a customer
              experience, that is “above and beyond”.
            </p>
          </div>
          <div className="w-full flex flex-col text-center items-center h-auto">
            <Image
              src="/integrity.png"
              alt="Delightful"
              layout="fixed"
              width={56}
              height={56}
            />
            <h4 className="text-white text-2xl mt-5">INNOVATION</h4>
            <p className="text-lg mt-2 max-w-md">
              Innovation means the creation, development and implementation of
              new products, processes or services with the aim of increasing
              efficiency and effectiveness to win the competition and gain
              customers satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div
        data-slug="product"
        className="max-w-screen-2xl px-16 max-lg:px-6 mt-16"
      >
        <h2 className="font-bold text-white text-5xl">Our Product</h2>
        <Swiper className="relative w-full h-full mt-20 flex">
          <SwiperSlide>
            <div className="w-full flex max-lg:flex-col max-lg:space-y-8 space-x-6 max-lg:space-x-0">
              <div className="w-1/2 max-lg:w-full pt-8 max-w-xl max-lg:max-w-none h-full max-lg:h-full flex flex-col">
                <h2 className="text-5xl text-white font-bold">
                  Semi Husked Coconut
                </h2>
                <p className="mt-8 text-lg">
                  We proudly present one of Indonesi's finest natural resources.
                  Freshly hand-picked within 60 days, almost entirely light
                  brown colored, enriched by the sweetness and thickness of
                  coconut flesh; are some of the portrayals of our superior
                  commodity, especially in Sumatra Island.
                </p>
                <div className="inline-flex mt-6">
                  <a
                    href="https://api.whatsapp.com/send/?phone=6281261544201&text&app_absent=0"
                    target="_blank"
                    className="w-36 h-10 bg-coklat rounded-full flex justify-center items-center"
                  >
                    <span className="flex text-white text-bold">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        color="white"
                        className="w-4 mr-2"
                      />
                      Contact Us
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-1/2 max-lg:w-full h-30rem max-lg:h-30rem">
                <div className="relative w-full h-full">
                  <Image
                    src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                    alt="Delightful"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex max-lg:flex-col max-lg:space-y-8 space-x-6 max-lg:space-x-0">
              <div className="w-1/2 max-lg:w-full pt-8 max-w-xl max-lg:max-w-none h-full max-lg:h-full flex flex-col">
                <h2 className="text-5xl text-white font-bold">
                  Semi Husked Coconut
                </h2>
                <p className="mt-8 text-lg">
                  We proudly present one of Indonesia's finest natural
                  resources. Freshly hand-picked within 60 days, almost entirely
                  light brown colored, enriched by the sweetness and thickness
                  of coconut flesh; are some of the portrayals of our superior
                  commodity, especially in Sumatra Island.
                </p>
                <div className="inline-flex mt-6">
                  <a
                    href="https://api.whatsapp.com/send/?phone=6281261544201&text&app_absent=0"
                    target="_blank"
                    className="w-36 h-10 bg-coklat rounded-full flex justify-center items-center"
                  >
                    <span className="flex text-white text-bold">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        color="white"
                        className="w-4 mr-2"
                      />
                      Contact Us
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-1/2 max-lg:w-full h-30rem max-lg:h-30rem">
                <div className="relative w-full h-full">
                  <Image
                    src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                    alt="Delightful"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex max-lg:flex-col max-lg:space-y-8 space-x-6 max-lg:space-x-0">
              <div className="w-1/2 max-lg:w-full pt-8 max-w-xl max-lg:max-w-none h-full max-lg:h-full flex flex-col">
                <h2 className="text-5xl text-white font-bold">
                  Semi Husked Coconut
                </h2>
                <p className="mt-8 text-lg">
                  We proudly present one of Indonesia's finest natural
                  resources. Freshly hand-picked within 60 days, almost entirely
                  light brown colored, enriched by the sweetness and thickness
                  of coconut flesh; are some of the portrayals of our superior
                  commodity, especially in Sumatra Island.
                </p>
                <div className="inline-flex mt-6">
                  <a
                    href="https://api.whatsapp.com/send/?phone=6281261544201&text&app_absent=0"
                    target="_blank"
                    className="w-36 h-10 bg-coklat rounded-full flex justify-center items-center"
                  >
                    <span className="flex text-white text-bold">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        color="white"
                        className="w-4 mr-2"
                      />
                      Contact Us
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-1/2 max-lg:w-full h-30rem max-lg:h-30rem">
                <div className="relative w-full h-full">
                  <Image
                    src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                    alt="Delightful"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        data-slug="team"
        className="px-20 max-lg:px-6 py-12 w-full h-full max-w-screen-2xl"
      >
        <h2 className="text-center text-white text-4xl">Our Teams</h2>
        <div className="flex max-lg:flex-col mt-16 justify-center space-x-12 max-lg:space-x-0 max-lg:space-y-12 w-full">
          <div className="flex flex-col items-center justify-center w-56 max-lg:w-full h-64">
            <div className="relative overflow-hidden w-36 h-36 rounded-full">
              <Image
                src="/placeholder/team1.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            <span className="font-bold mt-6 text-white text-lg">
              Muhammad Sartibi
            </span>
            <span>Founder</span>
            <a
              href="https://instagram.com/sartibimuhammad"
              target="_blank"
              className="rounded-full p-2 mt-3 bg-coklat"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className="w-4"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center w-56 max-lg:w-full h-64">
            <div className="relative overflow-hidden w-36 h-36 rounded-full">
              <Image
                src="/placeholder/team2.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            <span className="font-bold mt-6 text-white text-lg">
              Haikal Fikri
            </span>
            <span>Co Founder</span>
            <a
              href="https://instagram.com/haikall.fkr"
              target="_blank"
              className="rounded-full p-2 mt-3 bg-coklat"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className="w-4"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        data-slug="gallery"
        className="px-20 max-lg:px-6 pt-12 pb-24 w-full h-full max-w-screen-2xl"
      >
        <h2 className="text-center text-white text-4xl">Gallery</h2>
        <h3 className="text-center font-bold text-white text-4xl">
          Work Documentation
        </h3>
        <Swiper
          spaceBetween={useMediaQuery('(max-width: 900px)') ? 0 : 30}
          slidesPerView={useMediaQuery('(max-width: 900px)') ? 1 : 3}
          className="relative mt-12 w-full h-30rem max-lg:h-40rem max-md:h-30rem max-lg:rounded-2xl max-lg:overflow-hidden"
        >
          <SwiperSlide>
            <div className="relative w-full max-lg:w-full h-full rounded-2xl max-lg:rounded-none overflow-hidden">
              <Image
                src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full max-lg:w-full h-full rounded-2xl max-lg:rounded-none overflow-hidden">
              <Image
                src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full max-lg:w-full h-full rounded-2xl max-lg:rounded-none overflow-hidden">
              <Image
                src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full max-lg:w-full h-full rounded-2xl max-lg:rounded-none overflow-hidden">
              <Image
                src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="https://orfalandcoco.com/wp-content/uploads/2021/10/2-770x1024.jpg"
                alt="Delightful"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        data-slug="contact"
        className="max-w-screen-2xl px-12 py-9 bg-hitam text-white"
      >
        <span className="font-bold text-white text-2xl">Contacts</span>
        <div className="flex flex-col justify-start space-y-4 mt-5">
          <div className="">
            <span className="block max-w-sm">
              Jalan Moch Kahfi II No.23, Cipedak, Jagakarsa, Jakarta Selatan
              12630
            </span>
          </div>
          <div className="">
            <span>+62 812 7382 8537</span>
          </div>
          <div className="">
            <span>info@orfalandcoco.com</span>
          </div>
          <div className="flex space-x-4"></div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=6281261544201&text&app_absent=0"
        target="_blank"
        className="fixed bottom-0 right-0 mr-4 mb-4 z-10 w-36 h-10 bg-coklat rounded-sm flex justify-center items-center"
      >
        <span className="flex text-white text-bold">
          <FontAwesomeIcon
            icon={faWhatsapp}
            color="white"
            className="w-4 mr-2"
          />
          Contact Us
        </span>
      </a>
    </div>
  )
}
