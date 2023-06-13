import React from 'react'
import { useState } from 'react'

import './index.css';

const Form = ({ setInputData, inputData }) => {
  const [data, setData] = useState({
    "text": "",
    "date": "",
    "isDelete": false
  });

  const [isErrorText, setInputErrorText] = useState(false);
  const [isErrorDate, setInputErrorDate] = useState(false);

  const handelOnChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
    if(data.text !== "") setInputErrorText(false);
    if(data.date !== "") setInputErrorDate(false);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if(data.text === "") setInputErrorText(true);
    if(data.date === "") setInputErrorDate(true);

    if(data.text !== "" && data.date !== "")
    {
      setInputErrorText(false)
      setInputErrorDate(false)
      setInputData(old => [...old, data]);
      setData({
        "text": "",
        "date": "",
        "isDelete": false
      });
    }
  }

  return (
    <div className="myform">
      <form onSubmit={handelSubmit}>
        <input type="text" className={isErrorText === true ? "text inputError" : "text"} name="text" id="" value={data.text} onChange={handelOnChange} placeholder=' Write here ...' />
        <input type="date" name="date" className={isErrorDate === true ? "date inputError" : "date"} value={data.date} onChange={handelOnChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form