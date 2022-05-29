import React from 'react'

const NewsItem = (props)=> {
    let {title , description, imageUrl, url, date, creator, source} = props;
    return (
        <div className='my-3'>
            <div className="card">
              <div>
                <span className="badge rounded-pill bg-danger" 
                 style={  {  
                  display: "flex",
                      position: "absolute",
                      right: "0%"
                  }}>
                 {source}
                <span className="visually-hidden">unread messages</span>
                    </span></div>
                
                    <img src={imageUrl?imageUrl:"https://i2-prod.coventrytelegraph.net/incoming/article22453305.ece/ALTERNATES/s615/1_JS27542906.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title.length>80?title.slice(0, 80)+"...":title}</h5>
                        <p className="card-text">{description && ((description.length>100)?description.slice(0, 100)+"...":description)}</p>
                        <p className="card-text"><small className="text-muted">By {creator?creator:"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href= {url} target= "_blank" rel= "noreferrer" className="btn btn-dark">Read More</a>
                    </div>
            </div>
        </div>
    )
  }

export default NewsItem