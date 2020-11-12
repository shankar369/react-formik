import React from "react";
import Input from "./FormikComponents/Input";
import TextArea from "./FormikComponents/TextArea";
import Select from "./FormikComponents/Select";
import RadioButtons from "./FormikComponents/RadioButtons";
import CheckboxGroup from "./FormikComponents/CheckboxGroup";
import DatePicker from "./FormikComponents/DatePicker";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
