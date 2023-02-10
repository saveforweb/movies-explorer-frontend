import React from "react";
import { regexEmail, regexName } from "../../utils/regex";

export function useForm(inputValues) {
  const [values, setValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    let errorMessage = '';

    if (name === 'email') {
      if (!regexEmail.test(value)) {
        errorMessage = 'Неправильный формат email';
      }

      if (!value) {
        errorMessage = 'Почта не указана';
      }
    }

    if (name === 'search') {
      if (!value) {
        errorMessage = 'Нужно ввести ключевое слово';
      }
    }

    if (name === 'password') {

      if (value.length < 8) {
        errorMessage = 'Пароль должен быть минимум 8 символов';
      }

      if (!value) {
        errorMessage = 'Пароль не указан';
      }
    }

    if (name === 'name') {
      if (!regexName.test(value)) {
        errorMessage = 'Имя может содержать только латиницу, кириллицу, пробел и дефис';
      }


      if (value.length < 2 || value.length > 40) {
        errorMessage = 'Не правильный формат имени';
      }

      if (!value) {
        errorMessage = 'Имя не указано';
      }
    }

    setValues({ ...values, [name]: { 'value': value, 'error': errorMessage } });

  };

  return { values, handleChange, setValues };
}

export default useForm;