import { Text } from "@/components/Typography"
import { FormWrapper, IconBox, StyledForm } from "../../style"
import { Field, Formik } from "formik"
import * as Yup from "yup"
import { InputFormik } from "@/components/Formik"
import { Button } from "@/components/Button"

import { ReactComponent as EmailIcon } from "src/assets/icons/email.svg"
import { ReactComponent as LockIcon } from "src/assets/icons/lock.svg"
import axiosClient from "src/services/apiService"
import { toast } from "react-toastify"
import { cookies } from "src/services/cookie"
import { useState } from "react"
import { CookieKeys } from "src/constants"
import { useRouter } from "next/router"

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const formik = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
    }),
    onSubmit: (values) => {
      setIsLoading(true)
      axiosClient
        .post("/auth/login", values)
        .then((res) => {
          toast.success("Successeful logined")
          cookies.set(CookieKeys.ACCESS_TOKEN, res.data.value)
          router.push("/")
        })
        .catch((err) => {
          console.log(err)
          toast.error("Error on login")
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
  }
  return (
    <FormWrapper>
      <Text type="title">Вход в Yoldi Agency</Text>
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
              type="password"
              name="password"
              placeholder="Password"
              startAdornment={
                <IconBox>
                  <LockIcon />
                </IconBox>
              }
            />
            <Button
              disabled={!isValid}
              btn="primary"
              type="submit"
              width="100%"
              isLoading={isLoading}
              loadingLabel={"Войти..."}
            >
              Войти
            </Button>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  )
}

export default LoginForm
