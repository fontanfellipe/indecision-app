import React from 'react';
import Option from './Option'

const Options = (props) => (
  <>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
        className="button button--link" 
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Put something here to start</p>}
    {props.options.map((option, index)=>(
        <Option
            count={index + 1}
            textValue={option}
            key={option}
            handleDeleteOption={props.handleDeleteOption}
        />
    ))}
  </>
)


export default Options;

