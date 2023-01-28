import React from "react";

export function useForm(inputValues) {
  const [values, setValues] = React.useState(inputValues);
  const handleChange = (event) => {
    const { value, name, validationMessage } = event.target;
    setValues({ ...values, [name]: { 'value': value, 'error': validationMessage } });
  };
  return { values, handleChange, setValues };
}

export default useForm;