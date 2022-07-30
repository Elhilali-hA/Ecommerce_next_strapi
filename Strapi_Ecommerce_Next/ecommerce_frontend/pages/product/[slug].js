import React from 'react'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import Head from 'next/head'
import {twoDecimals} from '../../utils/format'


const Product = ({product}) => {
    console.log(product.data[0])
    const data = product
  return (
    <div>
        {/* <Head>
            {data.meta_title && 
            <title> {data.attributes.meta_title} </title> }

            {data.meta_description &&
             <meta name="description" content={data.attributes.meta_description} />
             }
        </Head>
        <h3> {data.title} </h3>
        <img src={fromImageToUrl(data.attributes.image.data.attributes)} />
        <h3> {data.title} </h3>
        <p> {twoDecimals(data.attributes.price)} </p>
        <p> {data.attributes.content} </p> */}


    </div>
  )
}

export default Product


export async function getStaticProps({params: {slug}}) {
    const product_res = await fetch(`${API_URL}/api/products?populate=image`)
    const Ownslug = product_res.data.attributes.slug

    if (Ownslug === slug){

    }





    const product = await product_res.json()
  
    return {
      props:{
        product  
      }
    }
  }


export async function getStaticPaths(){ 
    const products_res = await fetch(`${API_URL}/api/products?populate=image`)
    const products = await products_res.json()
    const paths = products.data.map(product => ({
        params: {slug : String(product.attributes.slug)}
    }))

    return {
        paths,
        fallback: false,
        
    }

}