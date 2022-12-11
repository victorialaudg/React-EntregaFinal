import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({element}) => {
  return (
    <div className="card" key={element.name}>
        <h2>{element.name}</h2>
        <img src={element.img} alt="" />
        <h3>${element.price}</h3>
        <Link to={`/item/${element.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item