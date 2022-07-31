import React from 'react'
import EN from '../locale/en.json'
import AR from '../locale/ar.json'
import {useRouter} from 'next/router'

const Footer = () => {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? EN : AR
  return (
    <div>
        <footer className="bg3 p-t-75 p-b-32">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-lg-3 p-b-50">
        <h4 className="stext-301 cl0 p-b-30">
         {t.footerContent.Categories}
        </h4>
        <ul>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.footerContent.Women}

            </a>
          </li>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.footerContent.Men}

            </a>
          </li>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.footerContent.Shoes}

            </a>
          </li>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.footerContent.Watches}

            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-3 p-b-50">
        <h4 className="stext-301 cl0 p-b-30">
        {t.HelpContent.Help}

        </h4>
        <ul>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.HelpContent['Track Order']}

            </a>
          </li>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.HelpContent.Returns}

            </a>
          </li>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.HelpContent.Shipping}

            </a>
          </li>
          <li className="p-b-10">
            <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
            {t.HelpContent.FAQs}

            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-3 p-b-50">
        <h4 className="stext-301 cl0 p-b-30">
        {t.GetonTouch.title}

        </h4>
        <p className="stext-107 cl7 size-201">
        {t.GetonTouch.content}

        </p>
        <div className="p-t-27">
          <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
            <i className="fa fa-facebook" />
          </a>
          <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
            <i className="fa fa-instagram" />
          </a>
          <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
            <i className="fa fa-pinterest-p" />
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 p-b-50">
        <h4 className="stext-301 cl0 p-b-30">
        {t.Newsletter.title}

        </h4>
        <form>
          <div className="wrap-input1 w-full p-b-4">
            <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com" />
            <div className="focus-input1 trans-04" />
          </div>
          <div className="p-t-18">
            <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
            {t.Newsletter.subscribeButton}

            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="p-t-40">
      <div className="flex-c-m flex-w p-b-18">
        <a href="#" className="m-all-1">
          <img src="images/icons/icon-pay-01.png" alt="ICON-PAY" />
        </a>
        <a href="#" className="m-all-1">
          <img src="images/icons/icon-pay-02.png" alt="ICON-PAY" />
        </a>
        <a href="#" className="m-all-1">
          <img src="images/icons/icon-pay-03.png" alt="ICON-PAY" />
        </a>
        <a href="#" className="m-all-1">
          <img src="images/icons/icon-pay-04.png" alt="ICON-PAY" />
        </a>
        <a href="#" className="m-all-1">
          <img src="images/icons/icon-pay-05.png" alt="ICON-PAY" />
        </a>
      </div>
      <p className="stext-107 cl6 txt-center">
        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>. 
        Downloaded from <a href="https://themeslab.org/" target="_blank">Themeslab</a>
        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer