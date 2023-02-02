import * as Yup from "yup"

export const Validations = {
  email: Yup.string().email().required(),
  password: Yup.string().min(3).required(),
  name: Yup.string().min(3).required(),
  description: Yup.string(),
  slug: Yup.string().min(3).required(),
}
