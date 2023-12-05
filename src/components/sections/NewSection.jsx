import React from 'react'

export const NewSection = ({title,cards}) => {
  return (
    <div className="px-4 py-5 " id="featured-3" style={{ backgroundColor: '#f7f8f9'}}>
      <div className='container'>
          <h2 className="pb-2 border-bottom ">{title}</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {cards.map (card => (
              <div className="feature col " key={card.id}>
                <h3 className="fs-2">{card.title}</h3>
                <p>{card.description}</p>
                <a href="#" className="text-info">
                  Call to action
                </a>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}
