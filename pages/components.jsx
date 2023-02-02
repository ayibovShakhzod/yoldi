import { Button } from "@/components/Button"
import { InputFormik } from "@/components/Formik"
import { NormalInput } from "@/components/Inputs"
import { Text } from "@/components/Typography"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

const Components = () => {
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
      console.log(values)
    },
  }
  return (
    <>
      <Text type="title">Text</Text>
      <Button loadingLabel="loading" label="Button" />
      <Button isLoading loadingLabel="loading" />
      <Button btn="secondary" isLoading loadingLabel="loading" />
      <Button btn="secondary">Button</Button>
      <Button btn="secondary" disabled>
        Button
      </Button>
      <Button btn="primary" disabled>
        Button
      </Button>
      <NormalInput placeholder="dadas" />
      <NormalInput isError placeholder="dadas" />
      <NormalInput disabled placeholder="dadas" />
      <Formik
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
        onSubmit={formik.onSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <Field component={InputFormik} type="email" name="email" placeholder="Email" />
            <Field component={InputFormik} type="password" name="password" placeholder="Password" />
            <Button btn="secondary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Components
