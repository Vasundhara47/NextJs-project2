"use client"
import React from 'react'
import Link from 'next/link';
import { Image, Card, Form, Button, Redirect, PasswordField } from '@/components';
import { signIn } from "next-auth/react"
import { useFormik } from 'formik';
import { LoginSchema } from '../schemas/loginSchema';
import { TextField } from '@mui/material';
import { useRouter } from 'next/navigation'

interface InitialValues {
    email: string,
    password: string
}

function LoginPage() {

    const router = useRouter()

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<InitialValues>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()

            router.push('/')

        }
    })
    return (
        <>
            <Card>
                <h2>Log In</h2>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.email && touched.email ? errors.email : null}
                        FormHelperTextProps={{
                            style: { color: 'red' },
                        }}
                    ></TextField>
                    <PasswordField
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.password && touched.password ? errors.password : ""}
                        error={Boolean(errors.password && touched.password)}
                    />
                    <Button type="submit" >Log In</Button>
                    <Redirect>Don't have an account <Link href={'/signup'}>Signup</Link></Redirect>

                    <Button secondary
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            signIn("google")
                        }}
                    >
                        <Image src='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png'></Image>
                        Sign up with Google
                    </Button>
                </Form>
            </Card>
        </>

    )
}

export default LoginPage
