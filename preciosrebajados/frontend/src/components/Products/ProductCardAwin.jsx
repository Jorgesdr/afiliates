export function ProductCardAwin ({
  id, linkToProduct,
  title, merchant,
  merchantId, price,
  priceNow, idBrand,
  imageUrl, imageUrlLarge,
  imageUrl1, imageUrl2,
  imageUrl3, imageUrl4,
  description, category,
  categoryId, delivery,
  brand, rating,
  porcentaje, linkToDetail
}) {
  const priceNowNumber = price.replace(/[^0-9,.]/g, '')

  return (
      <section className='content-product'>
        <article className='product-article'>
          <header className='product-header'>
            <h4 className='product-title'>{title}</h4>
          </header>
          <main>
            <div className='product-img'>
              <a>
                <img src={imageUrl} alt={title} />
              </a>
            </div>
            <div className='product-description'>
              <p>{description}</p>
            </div>
          </main>
          <footer className='product-footer'>
            <div>
              <div className="product-later">
                <span >Antes: {priceNow.substring(3)} €</span>
              </div>
              <div className="product-now">
                <span >Ahora: {priceNowNumber} €</span>
              </div>
              <div >
                <span className="product-percentage"> {porcentaje} </span>
              </div>
            </div>
            <div >
              <div className="product-moreinfo">
                <a href={linkToDetail} >
                  <span> Más información </span>
                </a>
              </div>
              <div className="product-gooffer">
                <a href={linkToProduct} target="_blank" rel="noreferrer" >
                  <button> Ir a la Oferta </button>
                </a>
              </div>
            </div>

          </footer>
        </article>
      </section>
  )
}
