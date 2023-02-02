import { useState } from "react"
import { PickerWrapper } from "./style"
import { NormalInput } from "../../Inputs"
import { getIn } from "formik"

import { ReactComponent as EyeIcon } from "src/assets/icons/eye.svg"
import { ReactComponent as EyeSlashIcon } from "src/assets/icons/eye-slash.svg"

export const Input = ({ isError, helperText, type = "text", field, form, endAdornment, ...rest }) => {
  const isTouched = getIn(form.touched, field.name)
  const errorMessage = getIn(form.errors, field.name)

  const [canPick, setCanPick] = useState(false)

  return (
    <NormalInput
      isError={isError ?? Boolean(isTouched && errorMessage)}
      helperText={helperText ?? (isTouched && errorMessage ? errorMessage : undefined)}
      {...{
        endAdornment:
          type === "password" ? (
            <PickerWrapper
              type="button"
              onClick={() => {
                setCanPick(!canPick)
              }}
            >
              {canPick === false ? <EyeIcon /> : <EyeSlashIcon />}
            </PickerWrapper>
          ) : (
            endAdornment
          ),
      }}
      type={type === "password" && !canPick ? "password" : type !== "password" ? type : "text"}
      {...rest}
      {...field} // includes all props contributed by the Formik Field/FastField
    />
  )
}
