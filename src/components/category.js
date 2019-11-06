import React from "react"
import { ThingToDo } from "./thing-to-do"

export const Category = ({ category, id, items }) => {
  return (
    <div>
      <h3 id={id}>{category}</h3>
      <div className="row">
        {items.map(item => (
          <ThingToDo key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
