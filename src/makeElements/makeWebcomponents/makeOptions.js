import React from 'react';

export default (options, currentValue) => {

  const $options = options.map((option, index) => {

    /**
     * TODO: Use a normalize prop function
     * 
     */

    if(option.value === currentValue) {
      return (
        <valle-option
          value = { option.value }
          key = { index }
          selected
        >
          { option.text }
        </valle-option>
      );
    }

    return (
      <valle-option
        value = { option.value }
        key = { index }
      >
        { option.text }
      </valle-option>
    )

  });

  return $options;

}