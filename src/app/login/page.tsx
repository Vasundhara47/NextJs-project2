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
            setTimeout(() => {
                router.push('/')
            }, 1000)
        }
    })
    return (
        <div>
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
                        error={Boolean(errors.email && touched.email)}
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
                        onClick={() => signIn("google", { callbackUrl: '/' })}
                    >
                        <Image src='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png'></Image>
                        Continue with Google
                    </Button>
                    <Button secondary
                        type="button"
                        onClick={() => signIn("facebook", { callbackUrl: '/' })}
                    >
                        <Image src='https://cdn-icons-png.freepik.com/256/15707/15707737.png?semt=ais_hybrid'></Image>
                        Continue with facebook
                    </Button>
                </Form>
            </Card>
        </div>

    )
}

export default LoginPage
