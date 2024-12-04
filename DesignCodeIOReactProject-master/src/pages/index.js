import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import staticdata from '../../staticdata.json'


const IndexPage = () => (
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Testing React <br /> for starters</h1>
      <p>Welcome to React and the great world fo beautiful designs..</p>
      <Link to="/page-2/">Go to page 2</Link>

      <Link to="/video">Watch the video</Link>
      <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <path fill="white">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
        </path>
      </svg>
    </div>
    <div className="Logos">   
    </div>

    <div className="CardGroup">
      <Card 
        title="DesignSystem"
        text="10 sections"
      // image={require('../images/wallpaper.jpg')} 
      />
      <Card 
        title="React for Designers"
        text="11 sections"
      // image={require('../images/wallpaper2.jpg')} 
      />
      <Card 
        title="Sound Design"
        text="5 sections"
      // image={require('../images/wallpaper3.jpg')} 
      />
      <Card 
        title="ARKit 2"
        text="10 sections"
      // image={require('../images/wallpaper4.jpg')} 
      />
    </div>
    <Section
      // image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default IndexPage

