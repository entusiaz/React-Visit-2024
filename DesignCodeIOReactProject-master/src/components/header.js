import React from 'react'
import Link from 'gatsby-link'
// import logo from './src/';
import './Header.css'


// const Header = ({ siteTitle }) => (
//   <div className="Header">
//     <div className="HeaderGroup">
//       <Link to="/">
//         {/* <img width="30" src={require('../images/logo-designcode.svg')} /> */}
//       </Link>
//       <Link to="/courses">Courses</Link>
//       <Link to="/downloads">Downloads</Link>
//       <Link to="/workshops">Workshops</Link>
//       <Link to="/buy"><button>Buy</button></Link>
//     </div>
//   </div>

  
// )



class Header extends React.Component{
  constructor(props)
  {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) =>
  {
    const scrollTop = window.pageYOffset 

    if (scrollTop > 50){
      this.setState({hasScrolled: true})
    } else{
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
    <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
     <div className="HeaderGroup">
       <Link to="/">
       </Link>
       <Link to="/courses">Courses</Link>
       <Link to="/downloads">Downloads</Link>
       <Link to="/workshops">Workshops</Link>
       <Link to="/buy"><button>Buy</button></Link>
     </div>
   </div>
    )
  }
}

export default Header
