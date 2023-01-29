import { useState } from "react";

type ValuesTypes = string | number | boolean;
type FormValues = Record<string, ValuesTypes>;

const useForm = (initialValues: FormValues = {}) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e: InputEvent) => {
      const target = e.target as HTMLInputElement;
      setValues({
        ...values,
        ...(target && { [target.name]: target.value }),
      });
    },
  ];
};
