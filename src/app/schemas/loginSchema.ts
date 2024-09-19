import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please enter email"),
    password: Yup.string().min(6).required("Please enter password"),
})