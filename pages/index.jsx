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
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import client from '@/helpers/sanity/client'
import BlockContent from '@sanity/block-content-to-react'
import urlFor from '@/helpers/sanity/urlFor'
import getYoutube from '@/helpers/functional/getYoutube'

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination])

export default function Home({
  homeAPI,
  aboutAPI,
  serviceAPI,
  productAPI,
  teamAPI,
  galleryAPI,
  contactAPI,
  settingAPI,
}) {
  const [home] = homeAPI
  const [about] = aboutAPI
  const [contact] = contactAPI
  const [setting] = settingAPI
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
    <div className="flex flex-col items-center">
      <NextSeo
        title={setting.title}
        description={setting.seo && setting.seo.seo_description}
        canonical={canonicalLink}
        openGraph={{
          url: canonicalLink,
          title: setting.title,
          description: setting.seo && setting.seo.seo_description,
          images: [
            {
              url: setting.seo && setting.seo.seo_image,
              alt: setting.title,
            },
          ],
          site_name: setting.title,
        }}
        twitter={{
          site: setting.title,
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta
          name="keywords"
          content={setting.seo && setting.seo.seo_keywords}
        />
      </Head>
      <nav className="fixed z-20 w-full bg-hitam border-gray-200 px-10 max-lg:px-6 py-5">
        <div className="container max-w-screen-2xl flex flex-wrap justify-between items-center mx-auto">
          <div className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
              AGRASKARA
            </span>
          </div>
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
        id="home"
        data-slug="home"
        className="flex w-full justify-center items-center"
      >
        <div className="relative z-10 max-w-xl w-full text-center">
          <h1 className="text-5xl leading-snug text-white font-bold">
            <BlockContent blocks={home.description} />
          </h1>
          <div className="flex justify-center space-x-6 mt-3">
            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full inline-block p-2 bg-coklat"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="white"
                  className="w-6"
                />
              </a>
            )}
            {contact.facebook && (
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full inline-block p-2 bg-coklat"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="white"
                  className="w-6"
                />
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full inline-block p-2 bg-coklat"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="white"
                  className="w-6"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        data-slug="about"
        className="max-w-screen-2xl px-12 max-lg:px-6 pt-12 space-x-6 max-lg:space-x-0 pb-12 w-full h-screen max-lg:h-auto flex max-lg:flex-col max-lg:space-y-10"
      >
        <div className="w-1/2 max-lg:w-full h-full flex justify-center items-center bg-hitam rounded-2xl">
          <img
            className="w-full"
            src={urlFor(setting.logo).url()}
            alt={setting.title}
          />
        </div>
        <div className="w-1/2 max-lg:w-full pt-8 max-lg:pt-0 max-w-xl max-lg:max-w-none h-full flex flex-col">
          <h2 className="text-5xl text-white font-bold">About Us</h2>
          <p className="mt-8 text-lg text-white">
            <BlockContent blocks={about.description} />
          </p>
        </div>
      </div>
      <div
        data-slug="service"
        className="px-20 max-lg:px-6 pt-12 w-full h-full max-w-screen-2xl"
      >
        <h2 className="text-center text-white text-4xl">Our Key Feature</h2>
        <div className="text-white w-full mt-20 grid max-lg:flex max-lg:flex-col grid-cols-2 gap-20">
          {serviceAPI.map((data, id) => (
            <div
              key={id}
              className="w-full flex flex-col text-center items-center h-auto"
            >
              <Image
                src={urlFor(data.image).url()}
                alt="Delightful"
                layout="fixed"
                width={56}
                height={56}
              />
              <h4 className="text-white text-2xl mt-5">{data.title}</h4>
              <p className="text-lg mt-2 max-w-md">
                <BlockContent blocks={data.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        data-slug="product"
        className="max-w-screen-2xl w-full px-16 pt-12 max-lg:px-6 mt-16"
      >
        <h2 className="font-bold text-white text-5xl">Our Product</h2>
        <div className="grid grid-cols-3 gap-12 mt-10">
          {productAPI.map((data, id) => (
            <div
              className="w-full flex items-center flex-col space-y-4"
              key={id}
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <Image
                  src={urlFor(data.image).url()}
                  alt="Delightful"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h2 className="text-3xl text-center  text-white font-bold">
                {data.title}
              </h2>
              <p className="text-lg text-justify ">
                <BlockContent blocks={data.description} />
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-36 h-10 mt-6 bg-coklat rounded-full flex justify-center items-center"
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
          ))}
        </div>
      </div>
      <div
        data-slug="team"
        className="px-20 max-lg:px-6 py-12 w-full h-full max-w-screen-2xl"
      >
        <h2 className="text-center text-white text-4xl">Our Teams</h2>
        <div className="flex flex-wrap max-lg:flex-col mt-16 justify-center space-x-12 max-lg:space-x-0 max-lg:space-y-12 w-full">
          {teamAPI.map((data, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center w-56 max-lg:w-full h-64"
            >
              <div className="relative overflow-hidden w-36 h-36 rounded-full">
                <Image
                  src={urlFor(data.image).url()}
                  alt={setting.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <span className="font-bold mt-6 text-white text-lg">
                {data.name}
              </span>
              <span>{data.position}</span>
              <div className="flex space-x-4">
                {data.instagram && (
                  <a
                    href={data.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-2 mt-3 bg-coklat"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="white"
                      className="w-4"
                    />
                  </a>
                )}
                {data.linkedin && (
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-2 mt-3 bg-coklat"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color="white"
                      className="w-4"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
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
          {galleryAPI.map((data, id) => (
            <SwiperSlide key={id}>
              <div className="relative w-full max-lg:w-full h-full rounded-2xl max-lg:rounded-none overflow-hidden">
                <Image
                  src={urlFor(data.image).url()}
                  alt="Agraaskara"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        data-slug="contact"
        id="contact"
        className="w-full px-12 bg-hitam text-white"
      >
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6 w-full max-w-screen-2xl">
          <div className="flex flex-col py-9 max-lg:pb-0">
            <span className="font-bold text-white text-2xl">Contacts</span>
            <div className="flex flex-col justify-start space-y-4 mt-5">
              <div className="">
                <span className="block max-w-sm">
                  <BlockContent blocks={contact.alamat} />
                </span>
              </div>
              <div className="">
                <span>{contact.notelpon}</span>
              </div>
              <div className="">
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
          <iframe
            className="w-full h-full max-lg:h-96 py-9 max-lg:py-0 max-lg:bg-hitam bg-biru"
            src={
              'https://www.youtube.com/embed/' +
              getYoutube(contact.youtube) +
              '?rel=0&modestbranding=1'
            }
          ></iframe>
          <div className="w-full py-9 max-lg:py-0 flex justify-end max-lg:justify-center">
            <img
              className="w-44 max-lg:w-full max-lg:max-w-xs"
              src={urlFor(setting.logo).url()}
              alt={setting.title}
            />
          </div>
        </div>
      </div>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
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

export async function getStaticProps() {
  const homeAPI = await client.fetch(`
  *[_type == "home"]
  `)
  const aboutAPI = await client.fetch(`
  *[_type == "about"]
  `)
  const serviceAPI = await client.fetch(`
                    *[_type == "service"]
                    `)
  const productAPI = await client.fetch(`
                    *[_type == "product"]
                    `)
  const teamAPI = await client.fetch(`
                    *[_type == "team"]
                    `)
  const galleryAPI = await client.fetch(`
                    *[_type == "gallery"]
                    `)
  const contactAPI = await client.fetch(`
                    *[_type == "contact"]
                    `)
  const settingAPI = await client.fetch(`
                    *[_type == "setting"]
                    `)
  return {
    props: {
      homeAPI,
      aboutAPI,
      serviceAPI,
      productAPI,
      teamAPI,
      galleryAPI,
      contactAPI,
      settingAPI,
    },
  }
}
