import React, { useState } from 'react'
import Dcards from './Dcards'
import Sdata  from './Sdata'

const Allitems = () => {
    const [items] = useState(Sdata)
  return (
    <>
        <section className='gallery desi top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Allitems
