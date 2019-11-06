import React from "react"

export const ThingToDo = ({
  id,
  name,
  location,
  url,
  description,
  category,
  additionalDetails,
}) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">({description})</h6>
          <div className="card-text">
            Location: <b>{location}</b>
            <p>{additionalDetails}</p>
            <a href={url} className="card-link">
              Visit website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
