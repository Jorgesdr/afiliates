export function Banner ({ rel, href, src }) {
  return (
    <div className="Banner">
        <a href={href} target='_blank' rel="noreferrer" >
            <img src={src} width='725' height='90'/>
        </a>
    </div>
  )
}
