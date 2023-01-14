import { useNavigate } from 'react-router-dom'


const Item = ({product, highlights, setHighlights}) => {
  const navigate = useNavigate();
  
  const onClick = e => {
    e.preventDefault();
    setHighlights(product);
    navigate('/highlight', { replace: true });
  }

  return (
    <div className="item" onClick={onClick}>
        <img src={product.url} alt="asd" />
        <p>{product.name}</p>
        <h5>${product.price}</h5>
    </div>
  )
}

export default Item