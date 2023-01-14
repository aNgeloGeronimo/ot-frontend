const Highlight = ({highlights}) => {
  return (
    <div className="highlight">

  
      <img src={highlights.url} alt="" />
      <div className="details">
        <h1>{highlights.name}</h1>
        <p>{highlights.description}</p>
        <h3>${highlights.price}</h3>
        <button>Buy</button>
      </div>

    </div>
  )
}

export default Highlight