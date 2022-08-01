import type { GetServerSideProps, NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  keyframes,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "react-query";

import { Layout } from "@widgets/layout";
import { Search } from "@features/search";
import { Building } from "@entities/building";
import { Document } from "@entities/document";
import { Slider } from "@shared/ui/slider";
import { Card } from "@shared/ui/card";
import { ServiceCard } from "@shared/ui/service-card";
import { UsefulLink } from "@shared/ui/useful-link";

const cardData = [
  { name: "Записаться \nна прием", href: "https://id.medhub.uz/auth" },
  { name: "Единый номер \nтелефона", href: "tel:+998712336571" },
  { name: "Электронная \nполиклиника", href: "https://id.medhub.uz/auth" },
  {
    name: "Виртуальная \nприемная",
    href: "https://pm.gov.uz/uz#/authorities/1/8/_apply",
  },
  {
    name: "Контактные данные \nминистерства",
    href: "https://ssv.uz/ru/contacts",
  },
  { name: "Медицинский \nтуризм", href: "https://ssv.uz/ru/medical_tourism" },
];

const serviceData = [
  {
    name: "Предложение по улучшению системы здравоохранения",
    img: "/images/service.svg",
    href: "https://ssv.uz/ru/vacancy?vacancy_id=6287",
  },
  {
    name: "Платные услуги",
    img: "/images/service.svg",
    href: "https://ssv.uz/ru/menu/platnye-uslugi",
  },
  {
    name: "Репродуктивное здоровье",
    img: "/images/service.svg",
    href: "https://ssv.uz/ru/menu/reproduktivnoe-zdorove",
  },
  {
    name: "Медицинские и фармацевтические работники, прошедшие аттестацию",
    img: "/images/service.svg",
    href: "http://qr.toifareestr.uz/site/sertificate",
  },
  {
    name: "Подача заявления на государственную регистрацию лекарственного средства",
    img: "/images/service.svg",
    href: "https://my.gov.uz/ru/service/34",
  },
  {
    name: "Виртуальная приемная",
    img: "/images/service.svg",
    href: "https://pm.gov.uz/uz#/authorities/1/8/_apply",
  },
  {
    name: "Расписание приема врачей",
    img: "/images/service.svg",
    href: "https://id.medhub.uz",
  },
  {
    name: "Медицинские сестры высшей категории, средний медицинский и фармацевтический персонал, прошедший аттестацию",
    img: "/images/service.svg",
    href: "http://qr.toifareestr.uz/site/urtasertificate",
  },
];

const news = [
  {
    title:
      "Сколько пациентов обратилось в службу «Скорой помощи» в жаркие дни?",
    date: "20 Июля",
    href: "https://ssv.uz/ru/news/skolko-patsientov-obratilos-v-sluzhbu-skoroj-pomoschi-v-zharkie-dni",
    img: "url('images/news1.jpg')",
  },
  {
    title:
      "«Ковид никуда не исчезал». Чем новая волна коронавируса отличается от прошлых",
    date: "30 июня",
    href: "https://ssv.uz/ru/news/kovid-nikuda-ne-ischezal-chem-novaja-volna-koronavirusa-otlichaetsja-ot-proshlyh",
    img: "url('images/news2.jpeg')",
  },
  {
    title:
      "Министр здравоохранения Узбекистана пригласил генерального директора ВОЗ посетить нашу страну",
    date: "25 мая",
    href: "https://ssv.uz/ru/news/ministr-zdravoohranenija-uzbekistana-priglasil-generalnogo-direktora-voz-posetit-nashu-stranu",
    img: "url('images/news3.jpg')",
  },
  {
    title:
      "В Узбекистане запущен первый центр диализа на основе государственно-частного партнерства",
    date: "18 апреля",
    href: "https://ssv.uz/ru/news/ssv-jurtimizda-davlat-hususij-sheriklik-lojiasi-asosida-ilk-dializ-markazi-ish-boshladi",
    img: "url('images/news4.jpg')",
  },
  {
    title:
      "Минздрав: Вслед за Кашкадарьинской и Наманганской областями медицинские выездные приемы проводятся в Сурхандарье",
    date: "17 апреля",
    href: "https://ssv.uz/ru/news/minzdrav-vsled-za-kashkadarinskoj-i-namanganskoj-oblastjami-meditsinskie-vyezdnye-priemy-provodjatsja-v-surhandare",
    img: "url('images/news5.jpg')",
  },
];

const buildings = [
  {
    name: "Марказий кўптармоқли поликлиникаси",
    address: "Бектемир тумани, Водник дахаси, 75 уй.",
    tel: "+998 71 295 02 41",
    image: 'url("images/building1.png")',
  },
  {
    name: "Марказий кўптармоқли поликлиникаси",
    address: "Мирзо Улуғбек тумани, ТТЗ 2",
    tel: "+998 71 261 64 60",
    image: 'url("images/building2.png")',
  },
  {
    name: "Марказий кўптармоқли поликлиникаси",
    address: "Миробод тумани Яккачинор кўчаси, 8 уй.",
    tel: "+998 71 256 03 49",
    image: 'url("images/building3.png")',
  },
  {
    name: "Марказий кўптармоқли поликлиникаси",
    address: "Яккасарой тумани, Шота Руставели кўчаси, 84 уй",
    tel: "+998 71 253 28 36",
    image: 'url("images/building4.png")',
  },
  {
    name: "Марказий кўптармоқли поликлиникаси",
    address: "Учтепа тумани, 25 мавзе 47 уй",
    tel: "+998 71 271 30 43",
    image: 'url("images/building5.png")',
  },
  {
    name: "Марказий кўптармоқли поликлиникаси",
    address: "Янгихаёт тумани Йўлдош 5, 24 уй",
    tel: "+998 71 281 78 01",
    image: 'url("images/building6.png")',
  },
];

const usefulLinks = [
  {
    name: "Единый портал интерактивных государственных услуг",
    link: "https://my.gov.uz/ru",
    image: "images/link1.svg",
  },
  {
    name: "Сайт пресс-службы Президента Республики Узбекистан",
    link: "https://my.gov.uz/ru",
    image: "images/link2.svg",
  },
  {
    name: "Национальная база данных законодательства Республики Узбекистан",
    link: "https://lex.uz/uz/",
    image: "images/link2.svg",
  },
  {
    name: "Официальный веб-сайт президента Республики Узбекистан",
    link: "https://president.uz/ru",
    image: "images/link2.svg",
  },
];

const Home: NextPage = () => {
  const animation = keyframes`
  0% {
    transform: translateY(-200%); opacity: 0;
  },
  50% {
    transfrom: translateY(-100%); opacity: 1;
  },
  100% {
    transform: translateY(0%); opacity: 0;
  }
  `;

  const [t] = useTranslation("title");

  return (
    <Layout>
      <Box
        h={["449px", "550px", "600px", "700px", "650px", "750px"]}
        bg={[
          "url('./images/main-mobile.png') 0 / cover no-repeat",
          "url('./images/main-mobile.png') 0 / cover no-repeat",
          "url('./images/main-tablet.png') 0 / cover no-repeat",
          "url('./images/main-tablet.png') 0 / cover no-repeat",
          "url('./images/main.png') 0 / cover no-repeat",
        ]}
        pos="relative"
      >
        <Link
          href="#services"
          width="40px"
          h="20px"
          pos="absolute"
          bottom="35px"
          left="50%"
          transform="translateX(-50%)"
          bg="url('./images/arrow-down.svg') no-repeat"
          bgSize="contain"
          display={["none", "none", "none", "none", "block"]}
          animation={`${animation} infinite 1.5s`}
        />
        <Container h="100%" display="flex">
          <Flex
            flexDir={["row", "row", "column", "column", "row"]}
            w="100%"
            justify={["", "", "flex-start", "flex-start", "space-between"]}
            alignItems={[
              "center",
              "center",
              "flex-start",
              "flex-start",
              "center",
            ]}
            py="64px"
          >
            <Box mb={["", "", "75px", "75px", 0]}>
              <Box
                as="h1"
                color="#FFF"
                whiteSpace="pre-wrap"
                fontWeight="600"
                fontSize={["30px", "34px", "40px", "44px", "46px", "60px"]}
                lineHeight="110%"
                mb={["30px", "36px", "40px", "60px"]}
                w={["292px", "310px", "540px", "500px", "550px", "630px"]}
              >
                {t("main")}
              </Box>
              <Search />
            </Box>

            <Grid
              w="100%"
              templateColumns={[
                "",
                "",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(2, 260px)",
                "repeat(2, 297px)",
              ]}
              columnGap={["20px", "20px", "24px"]}
              rowGap={["19px", "20px", "21px"]}
              display={["none", "none", "grid"]}
              justifyContent={["", "", "start", "start", "end"]}
            >
              {cardData.map((data) => (
                <Box className="card" key={data.name}>
                  <Card name={data.name} href={data.href} />
                </Box>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Box>
      <Container display={["block", "block", "none"]}>
        <Grid templateColumns="repeat(2, 1fr)" gap={3} py="30px">
          {cardData.map((data) => (
            <Box className="card" key={data.name}>
              <Card name={data.name} href={data.href} />
            </Box>
          ))}
        </Grid>
      </Container>

      {/* Услуги */}

      <Box id="services">
        <Container>
          <Box py={["0", "0", "60px", "100px"]} mb={["40px", "40px", "0px"]}>
            <Flex
              justify="space-between"
              alignItems={["start", "start", "center"]}
              mb={10}
              flexDir={["column", "column", "row"]}
            >
              <Box as="h3" mb={["14px", "14px", 0]}>
                Интерактивные услуги
              </Box>
              <NextLink href="#" passHref>
                <Link
                  color="blue"
                  pr="27px"
                  bg="url('/images/arrow-right-blue.svg') right 0 top 50% / 14px 8px no-repeat"
                  fontSize={["18px", "18px", "20px", "20px", "24px"]}
                >
                  Все услуги
                </Link>
              </NextLink>
            </Flex>
            <Slider display={["block", "block", "none"]}>
              {serviceData.map((service) => (
                <SwiperSlide key={service.name}>
                  <ServiceCard
                    href={service.href}
                    name={service.name}
                    img={service.img}
                  />
                </SwiperSlide>
              ))}
            </Slider>
            <Grid
              templateColumns={[
                "",
                "",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={5}
              display={["none", "none", "grid"]}
            >
              {serviceData.map((service) => (
                <Box className="serviceCard" key={service.name}>
                  <ServiceCard
                    href={service.href}
                    name={service.name}
                    img={service.img}
                  />
                </Box>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Новости */}

      <Box bg="#F5F5F5">
        <Container>
          <Box py={["20px", "25px", "60px", "70px", "100px"]}>
            <Flex
              justify="space-between"
              alignItems={["start", "start", "center"]}
              mb={10}
              flexDir={["column", "column", "row"]}
            >
              <Box as="h3" mb={["14px", "14px", 0]}>
                Новости
              </Box>
              <NextLink href="#" passHref>
                <Link
                  color="blue"
                  pr="27px"
                  bg="url('/images/arrow-right-blue.svg') right 0 top 50% / 14px 8px no-repeat"
                  fontSize={["18px", "18px", "20px", "20px", "24px"]}
                >
                  Все новости
                </Link>
              </NextLink>
            </Flex>
            <Slider slidesPerView={1} display={["block", "block", "none"]}>
              {news.map((newsItem) => (
                <SwiperSlide>
                  <Flex
                    h="240px"
                    flexDir="column"
                    bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${newsItem.img}`}
                    bgPos="center"
                    bgSize="cover"
                    color="#FFF"
                    p="15px"
                    overflow="hidden"
                  >
                    <Text flex="1">{newsItem.date}</Text>
                    <Text>{newsItem.title}</Text>
                  </Flex>
                </SwiperSlide>
              ))}
            </Slider>

            <Grid
              gridTemplateColumns={[
                "",
                "",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              autoRows="160px"
              gap="20px"
              display={["none", "none", "grid"]}
              gridAutoRows={["", "", "160px", "170px", "195px", "250px"]}
            >
              {news.map((item) => (
                <Link
                  className="newsItem"
                  _first={{
                    gridColumn: ["", "", "span 2"],
                    gridRow: ["", "", "span 2"],
                    fontSize: ["", "", "20px", "24px", "32px"],
                    p: ["", "", "30px", "30px", "30px", "40px"],
                  }}
                  color="#FFF"
                  fontWeight="500"
                  fontSize={["", "", "14px", "16px", "18px", "20px"]}
                  lineHeight="120%"
                  p={["", "", "15px", "15px", "15px", "20px"]}
                  display="flex"
                  flexDir="column"
                  bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${item.img}`}
                  bgSize="cover"
                  bgPos="center"
                  href={item.href}
                  target="_blank"
                >
                  <Text flex="1">{item.date}</Text>
                  <Text>{item.title}</Text>
                </Link>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Региональные управления */}

      <Box>
        <Container>
          <Box py={["40px", "40px", "60px", "65px", "75px", "100px"]}>
            <Flex
              justify="space-between"
              alignItems={["start", "start", "center"]}
              mb={10}
              flexDir={["column", "column", "row"]}
            >
              <Box as="h3" mb={["14px", "14px", 0]}>
                Региональные управления
              </Box>
              <NextLink href="#" passHref>
                <Link
                  color="blue"
                  pr="27px"
                  bg="url('/images/arrow-right-blue.svg') right 0 top 50% / 14px 8px no-repeat"
                  fontSize={["18px", "18px", "20px", "20px", "24px"]}
                >
                  Все учреждения
                </Link>
              </NextLink>
            </Flex>
            <Slider
              slidesPerView={1}
              display={["block", "block", "none"]}
              mb="20"
            >
              {buildings.map((building) => (
                <SwiperSlide>
                  <Building
                    image={building.image}
                    location={building.address}
                    name={building.name}
                    phone={building.tel}
                  />
                </SwiperSlide>
              ))}
            </Slider>
            <Grid
              display={["none", "none", "grid"]}
              gridTemplateColumns={["", "", "", "repeat(2, 1fr)"]}
              gap="20px"
            >
              {buildings.map((building) => (
                <Building
                  location={building.address}
                  name={building.name}
                  phone={building.tel}
                  image={building.image}
                />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Документы */}

      {/* <Box bg="#F5F5F5">
        <Container>
          <Box py={["20px", "20px", "60px", "70px", "75px", "100px"]}>
            <Flex
              justify="space-between"
              alignItems={["start", "start", "center"]}
              mb={10}
              flexDir={["column", "column", "row"]}
            >
              <Box as="h3" mb={["14px", "14px", 0]}>
                Документы
              </Box>
              <NextLink href="#" passHref>
                <Link
                  color="blue"
                  pr="27px"
                  bg="url('/images/arrow-right-blue.svg') right 0 top 50% / 14px 8px no-repeat"
                  fontSize={["18px", "18px", "20px", "20px", "24px"]}
                >
                  Все документы
                </Link>
              </NextLink>
            </Flex>
            <Slider
              slidesPerView={1}
              display={["block", "block", "none"]}
              mb="20"
            >
              <SwiperSlide>
                <Document
                  title="Стационарная деятельность форма МЗ-2"
                  date="15.03.2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Document
                  title="Стационарная деятельность форма МЗ-2"
                  date="16.03.2022"
                />
              </SwiperSlide>
            </Slider>

            <Box
              display={["none", "none", "grid"]}
              gridTemplateColumns={[
                "",
                "",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap="20px"
            >
              <Document title="Новость 1" date="17.03.2022" />
              <Document title="Новость 2" date="18.03.2022" />
              <Document title="Новость 3" date="19.03.2022" />
              <Document title="Новость 4" date="20.03.2022" />
              <Document title="Новость 5" date="21.03.2022" />
              <Document title="Новость 6" date="22.03.2022" />
            </Box>
          </Box>
        </Container>
      </Box> */}

      {/* Полезные ссылки */}

      <Box bg="#F5F5F5">
        <Container>
          <Box py={["20px", "20px", "60px", "70px", "75px", "100px"]}>
            <Box
              as="h3"
              mb={["14px", "14px", "40px", "42px", "44px", "60px"]}
              w={["150px", "150px", "auto"]}
            >
              Полезные ссылки
            </Box>
            <Slider tablet={3} desktop={4}>
              {usefulLinks.map((usefulLink) => (
                <SwiperSlide>
                  <UsefulLink
                    href={usefulLink.link}
                    name={usefulLink.name}
                    image={usefulLink.image}
                  />
                </SwiperSlide>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  return {
    props: {
      ...(await serverSideTranslations(locale || "ru", [
        "title",
        "cards",
        "headers",
      ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
