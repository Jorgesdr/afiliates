export const OneProduct = ({ id, title, description, price, image }) => {
  return (

    <section className='content-oneproduct'>
      <article className='product-onearticle'>
        <header className='product-oneheader'>
          <h4 className='product-onetitle' key={id}>{title}</h4>
        </header>
        <main>
          <div className='product-oneimg'>
            <a>
              <img src={image} alt={title} />
            </a>
          </div>
          <div className='product-onedescription'>
            <p>{description}</p>
          </div>
        </main>
        <footer className='product-onefooter'>
          <span> Precio: {price} €</span>
          <a>
            <button>Comprar</button>
          </a>
        </footer>
      </article>
    </section>

  )
}
