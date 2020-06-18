import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required(),
  point: yup
    .number()
    .required('Point is a required field'),
  level: yup
    .number()
    .required('Level is a required field')
    .max(1, 'The largest number is 1')
    .min(0, 'The smallest number is 0'),
  star: yup
    .number()
    .integer('Star must be integer')
    .required('Star is a required field')
    .max(5, 'The largest number is 5')
    .min(0, 'The smallest number is 0'),
})

export default ({
  handleEdit,
  editingUser,
}) => {
  const formik = useFormik({
    initialValues: editingUser,
    enableReinitialize: true,
    onSubmit: handleEdit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  })

  return formik
}
