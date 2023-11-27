export function CarrouselItem ({ id, title, image, description, price, priceNow, url }) {
  return (
      <article className="carrousel-product-content">
        <header >
          <h3>{title}</h3>
        </header>
        <main>
          <div>
            <img src={image} alt={title} />
          </div>
          <div>
            <p>{description}</p>
          </div>
        </main>
        <footer className="carrousel-product-footer">
          <div className="product-price-carrousel-later">
            <span > Precio : {price} €</span>
          </div>
          <div className="product-price-carrousel-now">
            <span > Ahora : {priceNow} </span>
          </div>
          <form action={url} target='_blank'>
            <button > Ir a la oferta </button>
          </form>
        </footer>
      </article>
  )
}
