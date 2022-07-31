import React from 'react'
import EN from '../locale/en.json'
import AR from '../locale/ar.json'
import {useRouter} from 'next/router'

const Contact = () => {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? EN : AR


  return (
    <div>
    <div>
  {/* Title page */}
  <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url("/images/bg-01.jpg")'}}>
    <h2 className="ltext-105 cl0 txt-center">
      {t.Contact.title}
    </h2>
  </section>	
  {/* Content page */}
  <section className="bg0 p-t-104 p-b-116">
    <div className="container">
      <div className="flex-w flex-tr">
        <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
          <form>
            <h4 className="mtext-105 cl2 txt-center p-b-30">
            {t.Contact.InputTitle}

            </h4>
            <div className="bor8 m-b-20 how-pos4-parent">
              <img className="how-pos4 pointer-none" src="/images/icons/icon-email.png" alt="ICON" />
              <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder={t.Contact.emailTitle} />
            </div>
            <div className="bor8 m-b-30">
              <textarea className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder={t.Contact.textarea} defaultValue={""} />
            </div>
            <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
            {t.Contact.SubmitButton}
            </button>
          </form>
        </div>
        <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
          <div className="flex-w w-full p-b-42">
            <span className="fs-18 cl5 txt-center size-211">
              <span className="lnr lnr-map-marker" />
            </span>
            <div className="size-212 p-t-2">
              <span className="mtext-110 cl2">
              {t.Contact.addressTitle}

              </span>
              <p className="stext-115 cl6 size-213 p-t-18">
            {t.Contact.address}
              </p>
            </div>
          </div>
          <div className="flex-w w-full p-b-42">
            <span className="fs-18 cl5 txt-center size-211">
              <span className="lnr lnr-phone-handset" />
            </span>
            <div className="size-212 p-t-2">
              <span className="mtext-110 cl2">
              {t.Contact['Lets Talk']}

              </span>
              <p className="stext-115 cl1 size-213 p-t-18">
                +212 629 224 865
              </p>
            </div>
          </div>
          <div className="flex-w w-full">
            <span className="fs-18 cl5 txt-center size-211">
              <span className="lnr lnr-envelope" />
            </span>
            <div className="size-212 p-t-2">
              <span className="mtext-110 cl2">
              {t.Contact['Sale Support']}

              </span>
              <p className="stext-115 cl1 size-213 p-t-18">
                contact@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>	
  {/* Map */}
  <div className="map">
    <div className="size-303" id="google_map" data-map-x="40.691446" data-map-y="-73.886787" data-pin="images/icons/pin.png" data-scrollwhell={0} data-draggable={1} data-zoom={11} />
  </div>
</div>


      
    </div>
  )
}

export default Contact
