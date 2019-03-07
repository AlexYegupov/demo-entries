import React from 'react';

const Selector = (props) => {
  let { name } = props

  return (
    <div className="selecor">
      { props.children.map( c =>
        c.type === Item ? <Item {...{...c.props, ...{name}}} /> : c
      ) }
    </div>
  )
}

const Item = ({ name, value, label }) => (
  <div>
    <input id={`${name}-${value}`} type="radio" name={name} value={value} />
    <label htmlFor={`${name}-${value}`}>{ label }</label>
  </div>
)


export { Selector, Item }
