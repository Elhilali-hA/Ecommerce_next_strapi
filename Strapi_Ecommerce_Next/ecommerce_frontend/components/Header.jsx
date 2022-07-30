import React,  {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import EN from '../locale/en.json'
import AR from '../locale/ar.json'




const Header = () => {
  const router = useRouter()
  const {locale} = router

  const t = locale === 'en' ? EN : AR


  
  const handleLanguageToggle = () => {
    switch (locale){
      case 'en': 
      router.push("/", "/", {locale: 'ar'})
      break;
      case 'ar':
        router.push("/", "/", {locale: 'en'})
        break;
    }


  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
 
  return (
    <div>


          <header>
  {/* Header desktop */}
  <div className="container-menu-desktop">
    {/* Topbar */}
    <div className="top-bar">
      <div className="content-topbar flex-sb-m h-full container">
        <div className="left-top-bar">
          Free shipping for standard order over $100
        </div>
        <div className="right-top-bar flex-w h-full">
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            Help &amp; FAQs
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            My Account
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            EN
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            USD
          </a>
        </div>
      </div>
    </div>
    <div className={colorChange ? 'colorChange' : 'wrap-menu-desktop'}>
      <nav className="limiter-menu-desktop container">
        {/* Logo desktop */}		
        <a href="#" className="logo"> 
          <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
        </a>
        {/* Menu desktop */}
        <div className="menu-desktop">
          <ul className="main-menu">
            <li >
              <Link href="/">
              <a>{t.navHeader.Home}</a>
              </Link>
            
            </li>
            <li>
              <Link href="/product">
              <a >{t.navHeader.Shop}</a>
              </Link>
            </li>
            <li className="label1" data-label1="hot">
              <Link href="/shoping-cart">
              <a >{t.navHeader.Features}</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
              <a >{t.navHeader.Blog}</a>
              </Link>
            </li>
            <li>
            <Link  href="/about">
              <a >{t.navHeader.About}</a>
            </Link>

            </li>
            <li>
              <Link  href="/contact">
              <a>{t.navHeader.Contact}</a>
              </Link>

            </li>
          </ul>
        </div>	
        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search" />
          </div>
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
            <i className="zmdi zmdi-shopping-cart" />
          </div>
          <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
            <i className="zmdi zmdi-favorite-outline" />
          </a>
         { locale==='ar' && <button className="btn btn-outline-info ms-3" onClick={handleLanguageToggle}>EN</button>} 
        { locale==='en' && <button className="btn btn-outline-info ms-3" onClick={handleLanguageToggle}>AR</button>}
        </div>
      </nav>
    </div>	
  </div>
  {/* Header Mobile */}
  <div className="wrap-header-mobile">
    {/* Logo moblie */}		
    <div className="logo-mobile">
      <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
    </div>
    {/* Icon header */}
    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
      <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
        <i className="zmdi zmdi-search" />
      </div>
      <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={2}>
        <i className="zmdi zmdi-shopping-cart" />
      </div>
      <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify={0}>
        <i className="zmdi zmdi-favorite-outline" />
      </a>
    </div>
    {/* Button show menu */}
    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  </div>
  {/* Menu Mobile */}
  <div className="menu-mobile">
    <ul className="topbar-mobile">
      <li>
        <div className="left-top-bar">
          Free shipping for standard order over $100
        </div>
      </li>
      <li>
        <div className="right-top-bar flex-w h-full">
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            Help &amp; FAQs
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            My Account
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            EN
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            USD
          </a>
        </div>
      </li>
    </ul>
    <ul className="main-menu-m">
      <li>
        <Link href="/">
        <a>Home</a>
        </Link>

        <span className="arrow-main-menu-m">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
      </li>
      <li>
        <Link href="/product">
        <a >Shop</a>
        </Link>
      </li>
      <li>
        <Link href="/shoping-cart">
        <a  className="label1 rs1" data-label1="hot">Features</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
        <a >Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
        <a >About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
        <a >Contact</a>
        </Link>
      </li>
    </ul>
  </div>
  {/* Modal Search */}
  <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
    <div className="container-search-header">
      <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
        <img src="images/icons/icon-close2.png" alt="CLOSE" />
      </button>
      <form className="wrap-search-header flex-w p-l-15">
        <button className="flex-c-m trans-04">
          <i className="zmdi zmdi-search" />
        </button>
        <input className="plh3" type="text" name="search" placeholder="Search..." />
      </form>
    </div>
  </div>
</header>
      
    </div>
  )
}

export default Header
