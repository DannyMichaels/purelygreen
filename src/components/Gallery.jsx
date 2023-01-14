import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import useMediaQuery from "../hooks/useMediaQuery"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import required modules
import { EffectCoverflow, Pagination } from "swiper"

const query = graphql`
  query GetAirtableGalleryImages {
    allAirtable(filter: { table: { eq: "GalleryImages" } }) {
      nodes {
        id
        data {
          image {
            localFiles {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED, height: 364, width: 364)
              }
            }
          }
        }
      }
    }
  }
`

const WrapperComponent = ({ children, isSmScreen }) =>
  isSmScreen ? (
    <Swiper
      grabCursor={true}
      effect={"coverflow"}
      spaceBetween={5}
      slidesPerView={"2"}
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
      pagination={{
        el: ".swiper-pagination",
      }}
      modules={[EffectCoverflow, Pagination]}
    >
      {children}
    </Swiper>
  ) : (
    <Grid>{children}</Grid>
  )

function Gallery({ children }) {
  const [currentImageIdx, setCurrentImageIdx] = React.useState(0)

  const isSmScreen = useMediaQuery("(max-width: 768px)")

  const data = useStaticQuery(query)
  // const nodes = data.allFile.nodes;
  const nodes = data.allAirtable.nodes

  return (
    <div style={{ padding: "32px" }}>
      <Title>Gallery</Title>

      <WrapperComponent isSmScreen={isSmScreen}>
        {nodes.map((node, idx, arr) => {
          const {
            id,
            data: { image },
          } = node

          const imageSrc = getImage(image?.localFiles[0].childrenImageSharp[0])

          if (isSmScreen) {
            return (
              <SwiperSlide key={id}>
                <GatsbyImage
                  style={{
                    borderRadius: "16px",
                  }}
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
                }}
                image={imageSrc}
                className="gallery__image"
                alt={`Purely Green gallery image ${idx} of ${arr.length}`}
              />
            </div>
          )
        })}
      </WrapperComponent>
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
