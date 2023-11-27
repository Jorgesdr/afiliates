import { CarrouselItem } from './CarrouselItem.jsx'
import { ArroyRight, ArroyLeft } from '../../icons/icons.jsx'
import { usePagination } from '../../hooks/usePagination.js'
const products = [
  {
    id: 1,
    title: 'producto 1',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 2,
    title: 'producto 2',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 3,
    title: 'producto 3',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 4,
    title: 'producto 4',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 5,
    title: 'producto 5',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  }, {
    id: 6,
    title: 'producto 6',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 7,
    title: 'producto 7',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 8,
    title: 'producto 8',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 9,
    title: 'producto 9',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 10,
    title: 'producto 10',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 11,
    title: 'producto 11',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 12,
    title: 'producto 12',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 13,
    title: 'producto 13',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 14,
    title: 'producto 14',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 15,
    title: 'producto 15',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  }, {
    id: 16,
    title: 'producto 16',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 17,
    title: 'producto 17',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 18,
    title: 'producto 18',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 19,
    title: 'producto 19',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  },
  {
    id: 20,
    title: 'producto 20',
    image: 'https://picsum.photos/200/200',
    description: 'description',
    price: '50',
    priceNow: '250 EUR',
    url: 'url'

  }

]

export function ListOfCarrousel () {
  const { handleArroyRight, handleArroyLeft, productNow, currentPage, productPerPage } = usePagination({ productPerPage: 5, datas: products })
  return (

    <section className="listofcarrousel-content">
            <div className='listofcarrousel-buttons'>
                <a className={currentPage === 1 ? 'desactive' : 'arroyleft'} onClick={handleArroyLeft} >
                    <ArroyLeft />
                </a>
                <a className={currentPage === Math.ceil(products.length / productPerPage) ? 'desactive' : 'arroyright'} onClick={handleArroyRight}>
                    <ArroyRight />
                </a>
            </div>
            <div className='listofcarrousel-products'>
                <ul >
                    {
                        productNow.map((product) => {
                          return (
                            <li key={product.id} className="carrousel-product-container">
                                <CarrouselItem
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                description={product.description}
                                price={product.price}
                                priceNow={product.priceNow}
                                url={product.url}
                                />
                            </li>
                          )
                        })

                    }

                </ul>
            </div>
    </section>
  )
}
