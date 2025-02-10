import React, {useState} from "react";
import css from "../../styles/form.css";

const {Input} = css

//const object = {
//  one: 20,
//  two: 30,
//  three: 40
//}
// в реакте все компоненты являются чистыми функциями. Объект object является объектом пропсом, т.к 
// передается чистой функции example
// все пропсы объединены в объект пропс
//function example (object) {
//  const {one, two, three} = object
//  return one + two + three
//}


const InputComponent = (props) => {
const { placeholder,maxLength,action, inputValue } = props
  const [placeholder1, setPlaceholder1] = useState('')
  return (
    <React.Fragment>
      <Input
        value={inputValue}
        type = {"text"}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange= {event=>{
          const newValue = event.target.value
          action(newValue)
        }}
      />
    </React.Fragment>
  )
}

export default InputComponent