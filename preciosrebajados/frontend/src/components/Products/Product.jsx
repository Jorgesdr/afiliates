export const Product = ({ id, title, description, price, image, brand }) => {
  return (
    <section className='content-product'>
      <article className='product-article'>
        <header className='product-header'>
          <h4 className='product-title' key={id}>{title}</h4>

        </header>
        <main>
          <div className='product-img'>
            <a>
              <img src={image} alt={title} />
            </a>
          </div>
          <div className='product-description'>
            <p>{description}</p>
          </div>
        </main>
        <footer className='product-footer'>
          <span> Precio: {price} €</span>
          <a>
            <button> Comprar </button>
          </a>

        </footer>
      </article>
    </section>
  )
}
