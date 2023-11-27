export function CategoryCard ({ id, title, description, imageurl, url, value }) {
  const enterCategory = [
    'Ver más ofertas',
    'Descubre más ofertas',
    'Explorar más gangas',
    'Ver todas las ofertas',
    'Ver más ofertas flash',
    'Examinar más ofertones',
    'Revelar más ofertas',
    'Ver más gangas'
  ]

  const random = Math.floor(Math.random() * enterCategory.length)
  const randomElement = enterCategory[random]

  return (
        <section className='content-category' >
      <article className='category-article'>
        <header className='category-header'>
          <h3 className='category-title' key={id}>{title}</h3>

        </header>
        <main>
          <div className='category-img'>
            <a>
              <img src={imageurl} alt={title} />
            </a>
          </div>
          <div className='category-description'>
            <p>{description}</p>
          </div>
        </main>
        <footer >
        <span>
          <a className="category-url">
            {randomElement}
          </a>
          </span>

        </footer>
      </article>
    </section>

  )
}
