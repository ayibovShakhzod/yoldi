import { SlugDomainBox, StyledForm } from "./style"
import { Field, Formik } from "formik"
import * as Yup from "yup"
import { InputFormik, TextAreaFormik } from "@/components/Formik"
import { Button } from "@/components/Button"

import axiosClient from "src/services/apiService"
import { toast } from "react-toastify"
import { cookies } from "src/services/cookie"
import { useState } from "react"
import { CookieKeys } from "src/constants"
import { useRouter } from "next/router"
import { Box } from "@/components/Box"
import { InputLabel } from "@/components/Inputs/Normal/style"
import { Validations } from "src/services/validations"

const EditForm = ({ user, onCancel }) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const location = window.location.host

  const formik = {
    initialValues: {
      name: user?.name,
      description: user?.description || "",
      slug: user?.slug,
    },
    validationSchema: Yup.object({
      name: Validations.name,
      description: Validations.description,
      slug: Validations.slug,
    }),
    onSubmit: (values) => {
      setIsLoading(true)
      axiosClient
        .patch("/profile", values)
        .then((res) => {
          toast.success("Successeful edited")
          router.push(`/user/${values.slug}`)
        })
        .catch((err) => {
          console.log(err)
          toast.error("Error on editing")
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
  }
  return (
    <Box>
      <Formik
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
        onSubmit={formik.onSubmit}
      >
        {({ isValid }) => (
          <StyledForm>
            <Field component={InputFormik} type="text" name="name" placeholder="Имя" label="Имя" />
            <Box display="flex" width="100%" flexDirection="column">
              <InputLabel>Адрес профиля</InputLabel>
              <Box display="flex" width="100%" flexDirection={["column", "row"]} alignItems="self-start">
                <SlugDomainBox>{location}/user/</SlugDomainBox>
                <Field
                  component={InputFormik}
                  wrapStyle={{
                    borderRadius: ["0 0 5px 5px", "0 5px 5px 0"],
                  }}
                  type="text"
                  name="slug"
                  placeholder="Адрес профиля"
                />
              </Box>
            </Box>
            <Field component={TextAreaFormik} name="description" placeholder="Описание" label="Описание" rows="5" />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mt="10px"
            >
              <Button btn="secondary" type="button" width="100%" height="50px" mr="10px" onClick={onCancel}>
                Отмена
              </Button>
              <Button
                disabled={!isValid}
                btn="primary"
                type="submit"
                width="100%"
                isLoading={isLoading}
                loadingLabel={"Сохранить..."}
              >
                Сохранить
              </Button>
            </Box>
          </StyledForm>
        )}
      </Formik>
    </Box>
  )
}

export default EditForm
