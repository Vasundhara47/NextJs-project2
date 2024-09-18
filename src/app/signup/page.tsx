"use client"
import React from 'react'
import Link from 'next/link';
import { Image, Card, Input, Form, Button, Redirect } from '@/components';
import { useSession, signIn } from "next-auth/react"

function SignupPage() {

    const { data: session } = useSession()
    return (
        <>
            <Card>
                <h2>Sign Up</h2>
                <Form className="formContainer">
                    <Input type='text' placeholder="First name" name='firstName'></Input>
                    <Input type='text' placeholder="Last name" name='lastName'></Input>
                    <Input type='text' placeholder="Email" name='email'></Input>
                    <Input type='password' placeholder="Password" name='password'></Input>
                    <Input type='password' placeholder="Confirm Password" name='confirmPassword'></Input>
                    <Button type="submit">Sign Up</Button>
                    <Redirect>Already have an account?  <Link href={'/login'} > Login</Link></Redirect>
                    <Button
                        secondary
                        type="button"
                        onClick={() => signIn("google")}
                    >
                        <Image src='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png'></Image>
                        Sign In with Google
                    </Button>

                </Form>
            </Card >
        </>
    )
}

export default SignupPage
