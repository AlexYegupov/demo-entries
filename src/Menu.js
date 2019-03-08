import React, {useState} from 'react';


const Menu = ({ className, items }) => {
  const [state, setState] = useState( {activeItem: null} )

  const handleClick = (e) => {
    setState({ activeItem: e.target.getAttribute('data-key') })
  }

  return (
    <ul className={className}>
      { items.map(
          (item, i) => (
            <li className={item === state.activeItem ? 'active' : ''} key={i}
                data-key={item} onClick={handleClick}>
              {item}
            </li>
          )
      )}
    </ul>
  )

}

export { Menu }
