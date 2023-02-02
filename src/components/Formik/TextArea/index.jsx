import { TextArea } from "../../Inputs"
import { getIn } from "formik"

export const TextAreaFormik = ({ isError, helperText, field, form, ...rest }) => {
  const isTouched = getIn(form.touched, field.name)
  const errorMessage = getIn(form.errors, field.name)

  return (
    <TextArea
      isError={isError ?? Boolean(isTouched && errorMessage)}
      helperText={helperText ?? (isTouched && errorMessage ? errorMessage : undefined)}
      {...rest}
      {...field} // includes all props contributed by the Formik Field/FastField
    />
  )
}
