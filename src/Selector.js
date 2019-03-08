import React from 'react';

const Selector = (props) => {
  const { name, onChange, defaultChecked } = props

  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  }

  return (
    <div className="selecor" onChange={handleChange}>
      { props.children.map( (c, i) =>
        c.type === Item ? (
          <Item key={i}
                {...
                 {
                   ...{
                     name,
                     defaultChecked: c.props.value === defaultChecked,
                   },
                   ...c.props
                 }
                }
          />
        ): c
      ) }
    </div>
  )
}

const Item = ({ name, value, label, defaultChecked }) => {
  const id = `${name}-${value}`

  return (
    <div>
      <input id={id} type="radio" name={name} value={value}
             defaultChecked={defaultChecked} />
      <label htmlFor={id}>{ label }</label>
    </div>
  )
}


export { Selector, Item }
