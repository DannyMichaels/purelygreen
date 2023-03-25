import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import useMediaQuery from "../hooks/useMediaQuery"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import required modules
import { EffectCoverflow, Scrollbar } from "swiper"
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs"
import SocialLinks from "./SocialLinks"

const query = graphql`
  query GetAirtableGalleryImages {
    allAirtable(filter: { table: { eq: "GalleryImages" } }) {
      nodes {
        id
        data {
          image {
            localFiles {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED, sizes: "364x364, 500x500")
              }
            }
          }
        }
      }
    }
  }
`

const WrapperComponent = ({
  children,
  isSmScreen,
  onSwiper,
  onSlideChange,
  // swiper,
}) => (
  <div style={{ marginTop: "20px" }}>
    {isSmScreen ? (
      <Swiper
        // initialSlide={activeIndex}
        slideActiveClass="swiper-slide-active"
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        grabCursor={true}
        effect={"coverflow"}
        spaceBetween={5}
        slidesPerView={"auto"}
        loop={true}
        lazyOptions={{
          loadingClass: "loading-carousel",
        }}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        scrollbar={{
          el: ".swiper-scrollbar",
        }}
        modules={[EffectCoverflow, Scrollbar]}
      >
        {children}
      </Swiper>
    ) : (
      <Grid>{children}</Grid>
    )}
  </div>
)

function Gallery() {
  const [swiper, setSwiper] = useState(null)

  const isSmScreen = useMediaQuery("(max-width: 768px)")

  const data = useStaticQuery(query)
  // const nodes = data.allFile.nodes;
  const nodes = data.allAirtable.nodes

  return (
    <div style={{ paddingBottom: "32px", paddingTop: "32px" }} id="gallery">
      <Title>Gallery</Title>

      <div className="gallery__meta">
        <SocialLinks color="#1f2937" />

        <div>|</div>

        <div className="gallery__text">@purelygreenband</div>
      </div>

      <WrapperComponent isSmScreen={isSmScreen} onSwiper={setSwiper}>
        {nodes.map((node, idx, arr) => {
          const {
            id,
            data: { image },
          } = node

          const imageSrc = getImage(image?.localFiles[0].childrenImageSharp[0])

          if (isSmScreen) {
            return (
              <SwiperSlide
                key={id}
                style={{ height: "364px", width: "364px" }}
                className={idx === 0 && "swiper-slide-active"}
              >
                <GatsbyImage
                  style={{
                    borderRadius: "16px",
                    height: "100%",
                    width: "100%",
                  }}
                  objectPosition={"15% 15%"}
                  objectFit="cover"
                  image={imageSrc}
                  className="gallery__image"
                  alt={`Purely Green gallery image ${idx} of ${arr.length}`}
                />
              </SwiperSlide>
            )
          }

          return (
            <div key={id}>
              <GatsbyImage
                style={{
                  borderRadius: "16px",
                  width: "364px",
                  height: "364px",
                }}
                objectFit="cover"
                objectPosition={"15% 15%"}
                image={imageSrc}
                className="gallery__image"
                alt={`Purely Green gallery image ${idx} of ${arr.length}`}
              />
            </div>
          )
        })}
      </WrapperComponent>

      {isSmScreen && (
        <div className="gallery__carousel__pagination">
          <BsArrowLeftCircle
            fontSize={42}
            cursor="pointer"
            color="#62C980"
            onClick={() => swiper.slidePrev()}
          />
          <BsArrowRightCircle
            fontSize={42}
            color="#62C980"
            cursor="pointer"
            onClick={() => swiper.slideNext()}
          />
        </div>
      )}
    </div>
  )
}

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* max-width: 364px; */
  gap: 10px;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: #000;
  text-align: center;
`

export default Gallery
