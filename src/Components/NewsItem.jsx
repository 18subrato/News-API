

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card d-inline-block bg-dark text-white my-3 mx-3 px-2 px-2 mb-3" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"it is something about just happend"}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default NewsItem
