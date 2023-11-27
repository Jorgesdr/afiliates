import { API_SEARCH, API_SEARCH_CATEGORY, API_SEARCH_IMAGE } from './settings.js'
export const getsFetchImage = async ({ category }) => {
  try {
    const response = await fetch(`${API_SEARCH_IMAGE}/${category}`)
    const data = await response.data()
    const datas = data
    return datas
  } catch (error) {
    throw new Error('Error en la petición: ' + error)
  }
}

export const getsFetchAll = async () => {
  try {
    const response = await fetch(API_SEARCH)
    const json = await response.json()
    const datas = json.products

    return datas?.map(data => ({
      id: data._id,
      link_to_product: data.aw_deep_link,
      title: data.product_name,
      merchant: data.merchant_name,
      merchantId: data.merchant_id,
      price: data.store_price,
      price_now: data.display_price,
      idBrand: data.brand_id,
      imageUrl: data.merchant_image_url,
      imageUrlLarge: data.large_image,
      imageUrl1: data.alternate_image,
      imageUrl2: data.alternate_image_two,
      imageUrl3: data.alternate_image_three,
      imageUrl4: data.alternate_image_four,
      description: data.description,
      category: data.category_name,
      categoryId: data.category_id,
      delivery: data.delivery_cost,
      brand: data.brand_name,
      rating: data.rating
    }))
  } catch (error) {
    throw new Error('Error en la petición: ' + error)
  }
}
export const getsFetchSearch = async ({ search } = {}) => {
  try {
    const response = await fetch(`${API_SEARCH}/${search}?`)
    const json = await response.json()
    const datas = json

    return datas?.map(data => ({
      id: data._id,
      linkToProduct: data.aw_deep_link,
      title: data.product_name,
      merchant: data.merchant_name,
      merchantId: data.merchant_id,
      price: data.store_price,
      priceNow: data.display_price,
      idBrand: data.brand_id,
      imageUrl: data.merchant_image_url,
      imageUrlLarge: data.large_image,
      imageUrl1: data.alternate_image,
      imageUrl2: data.alternate_image_two,
      imageUrl3: data.alternate_image_three,
      imageUrl4: data.alternate_image_four,
      description: data.description,
      category: data.category_name,
      categoryId: data.category_id,
      delivery: data.delivery_cost,
      brand: data.brand_name,
      rating: data.rating
    }))
  } catch (error) {
    throw new Error('Error en la petición: ' + error)
  }
}

export const getsFetchCategoryProducts = async () => {
  try {
    const response = await fetch(API_SEARCH)
    const json = await response.json()
    const datas = json

    return datas?.map(data => ({
      id: data._id,
      category: data.category_name
    }))
  } catch (error) {
    throw new Error('Error en la petición: ' + error)
  }
}

export const getsFetchCategory = async () => {
  try {
    // const response = await fetch(API_CATEGORY)
    const response = await fetch(API_SEARCH_CATEGORY)
    const json = await response.json()
    const datas = json
    return datas?.map(data => ({
      id: data._id,
      title: data.title,
      value: data.value,
      imageUrl: data.image,
      description: data.description
    }))
    // console.log(datas)
    // return datas
  } catch (error) {
    throw new Error('Error en la petición: ' + error)
  }
}

export const getsFetchSearchId = async ({ id }) => {
  try {
    const response = await fetch(`${API_SEARCH}/${id}`)
    const json = await response.json()
    const datas = json.products

    return datas?.map(data => ({
      id: data._id,
      link_to_product: data.aw_deep_link,
      title: data.product_name,
      merchant: data.merchant_name,
      merchantId: data.merchant_id,
      price: data.store_price,
      price_now: data.display_price,
      idBrand: data.brand_id,
      imageUrl: data.merchant_image_url,
      imageUrlLarge: data.large_image,
      imageUrl1: data.alternate_image,
      imageUrl2: data.alternate_image_two,
      imageUrl3: data.alternate_image_three,
      imageUrl4: data.alternate_image_four,
      description: data.description,
      category: data.category_name,
      categoryId: data.category_id,
      delivery: data.delivery_cost,
      brand: data.brand_name,
      rating: data.rating
    }))
  } catch (error) {
    throw new Error('Error en la petición: ' + error)
  }
}
