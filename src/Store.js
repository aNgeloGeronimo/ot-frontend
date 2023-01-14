import {useState} from 'react'
import {useQuery} from '@apollo/client'
import {GET_PRODUCT} from './queries/productQueries'

import Item from './components/Item'

const Store = ({highlights, setHighlights}) => {
  const [apparel, setApparel] = useState('');

  const {loading, error, data} = useQuery(GET_PRODUCT);


  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  console.log(apparel);
  return (
    <div className='store'>
        <div className="categories flex">
            <div className="head-accent"></div>
            <button onClick={e => setApparel('')}>All</button>
            <button onClick={e => setApparel('innerwear')}>Innerwear</button>
            <button onClick={e => setApparel('bottom')}>Bottom</button>
            <button onClick={e => setApparel('shirt')}>Shirt</button>
            <button onClick={e => setApparel('sweater')}>Sweater</button>
            <button onClick={e => setApparel('jacket')}>Jacket</button>
        </div>

        <div className="products flex">
            {
              apparel !== ''
              ? data.products.filter((product) => {
                return product.apparel === apparel;
              }).map(product => (<Item product={product} highlights={highlights} setHighlights={setHighlights}/>))
              : data.products.map(product => (<Item product={product} highlights={highlights} setHighlights={setHighlights}/>)) 
            }
        </div>
    </div>
  )
}

export default Store
