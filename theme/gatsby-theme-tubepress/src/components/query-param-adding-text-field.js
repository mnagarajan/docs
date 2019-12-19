import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

export default (props) => {

  const [inputValue, setInputValue] = useState(''),
    [outputValue, setFinalValue]    = useState(''),
    startsWith                      = (candidate, needle) => candidate.indexOf(needle) === 0,
    handleChange                    = (e) => {

      const incomingValue = e.target.value;
      setInputValue(incomingValue);

      if (incomingValue === '') {

        setFinalValue('');
        return;
      }

      let workingValue = incomingValue;

      if (!startsWith(incomingValue, 'http://') && !startsWith(incomingValue, 'https://')) {

        workingValue = `http://${incomingValue}`;
      }

      try {

        const url = new URL(workingValue);
        url.searchParams.append(props.queryParamName, 'true');
        setFinalValue(url.toString());

      } catch (error) {

        setFinalValue('');
      }
    };

  return (
    <>
      <Input label="Enter any URL" fluid placeholder="https://tubepress.com/" value={inputValue} onChange={handleChange} />
      <br />
      <Input label={`URL to ${props.action} is`}
        fluid
        value={outputValue}
        readOnly
      />
    </>
  );
};


