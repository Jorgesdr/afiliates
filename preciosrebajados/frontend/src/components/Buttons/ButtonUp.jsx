import { useGotop } from '../../hooks/useGoTop'

export function ButtonUp () {
  const { scrollTop, showScroll } = useGotop()

  return (
    <div>
      {
        showScroll
          ? <button onClick={scrollTop} className='button-up' type='button'>Subir</button>
          : null
      }

    </div>
  )
}
