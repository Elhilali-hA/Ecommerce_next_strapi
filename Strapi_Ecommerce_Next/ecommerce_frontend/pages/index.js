import { fromImageToUrl, API_URL } from '../utils/urls'
import {twoDecimals} from '../utils/format'
import RightCart from '../components/RightCart'
import TopSection from '../components/TopSection'
import Banner from '../components/Banner'
import Product from '../components/Product'


export default function Home({ products }) {
 
console.log(products.data[0].attributes.slug)
  const data = products.data

  return (
    <div>
	


       {/* {
        data.map(product => (
          <div key={product.attributes.title} className={styles.product}> 
          <Link href={`/products/${product.attributes.slug}`}>
          <a>
          <div className={styles.product__Row}>
            <div className={styles.product__ColImg}>
              <img src={fromImageToUrl(product.attributes.image.data.attributes)} />
              <div className={styles.product__Col}> {product.attributes.title} {twoDecimals(product.attributes.price)} $ </div>
            </div>
             </div>
             </a>
             </Link>

          </div>
        ))
      }  */}

        <RightCart />
        <TopSection />
        <Banner />
        <Product />
  


     
    </div>
  )
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/api/products?populate=image`)
  console.log(product_res)
  const products = await product_res.json()

  return {
    props:{
      products
    }
  }
}
