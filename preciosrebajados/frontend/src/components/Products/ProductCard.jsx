export function ProductCard ({ id, title, description, price, priceNow, image, brand, images, url }) {
  return (
    <section className='content-product-card'>
      <article className='product-article-card'>
        <div className='product-article-card-main'>

          <main className="product-card-main">
            <div className='product-img-card'>
              <a>
                <img src={image} alt={title} />
              </a>
            <div className='product-img-card-list'>
              <ul className='listofimg'>
                {
                /*
                images.map((image, index) => (
                  <li key={index} className='listofimg-img'>
                  <a>
                  <img src={image} alt={title} className='listofimg-img' />
                  </a>
                  </li>
                  ))
                  */
                }

              </ul>
            </div>

            </div>
            <div className='product-description-card'>
               <header className='product-header-card'>
                 <h1 className='product-title-card' key={id}><span>{title}</span></h1>
               </header>
               <div className='product-brand-card'>
                <span>Marca : {brand}</span>
              </div>
              <div className='product-descriptiondetaill-card'>
              <h3>Descripción</h3>
              <p>{description}</p>
              <h3>Detalle del producto</h3>
              <p>{description}</p>
                </div>
            </div>
          </main>
        </div>

        <footer>
          <div className='product-footer-card-fixed'>
            <div className="product-price-later">
            <span > Precio : {price} €</span>
            </div>
            <div className="product-price-now">
            <span > Ahora : {priceNow} </span>
            </div>
            <div>
              <a>
                <form action={url} target='_blank'>
                  <button > Comprar </button>
                </form>
              </a>
            </div>
          </div>
        </footer>
      </article>

    </section>
  )
}
