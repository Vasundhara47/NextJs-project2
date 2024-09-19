import * as Yup from 'yup'

export const SignupSchema = Yup.object({
    firstName: Yup.string().min(2).required("Please enter first name"),
    lastName: Yup.string().min(2).required("please enter last name"),
    email: Yup.string().email().required("Please enter email"),
    password: Yup.string().min(6).required("Please enter password"),
    confirmPassword: Yup.string().required("Please enter confirm password")
        .oneOf([Yup.ref('password')], "Password must match")
})