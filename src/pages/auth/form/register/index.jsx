import { Text } from "@/components/Typography"
import { FormWrapper, IconBox, StyledForm } from "../../style"
import { Field, Formik } from "formik"
import * as Yup from "yup"
import { InputFormik } from "@/components/Formik"
import { Button } from "@/components/Button"
import { useRouter } from "next/router"

import { ReactComponent as EmailIcon } from "src/assets/icons/email.svg"
import { ReactComponent as UserIcon } from "src/assets/icons/user.svg"
import { ReactComponent as LockIcon } from "src/assets/icons/lock.svg"

import axiosClient from "src/services/apiService"
import { toast } from "react-toastify"
import { cookies } from "src/services/cookie"
import { CookieKeys } from "src/constants"
import { Validations } from "src/services/validations"

const RegisterForm = () => {
  const router = useRouter()

  const formik = {
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Validations.email,
      name: Validations.name,
      password: Validations.password,
    }),
    onSubmit: (values) => {
      axiosClient
        .post("/auth/sign-up", values)
        .then((res) => {
          toast.success("Successeful registered")
          cookies.set(CookieKeys.ACCESS_TOKEN, res.data.value)
          router.push("/")
        })
        .catch((err) => {
          console.log(err)
          toast.error(err.response.data.message)
        })
    },
  }
  return (
    <FormWrapper>
      <Text type="title">Регистрация в Yoldi Agency</Text>
      <Formik
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
        onSubmit={formik.onSubmit}
      >
        {({ isValid }) => (
          <StyledForm>
            <Field
              component={InputFormik}
              type="email"
              name="email"
              placeholder="Email"
              startAdornment={
                <IconBox>
                  <EmailIcon />
                </IconBox>
              }
            />
            <Field
              component={InputFormik}
              type="text"
              name="name"
              placeholder="Name"
              startAdornment={
                <IconBox>
                  <UserIcon />
                </IconBox>
              }
            />
            <Field
              component={InputFormik}
              type="password"
              name="password"
              placeholder="Password"
              startAdornment={
                <IconBox>
                  <LockIcon />
                </IconBox>
              }
            />
            <Button disabled={!isValid} btn="primary" type="submit" width="100%" mt="10px">
              Создать аккаунт
            </Button>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  )
}

export default RegisterForm
