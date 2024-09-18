"use client"
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { Image, Card, Input, Form, Button, Redirect } from '@/components';
import { signIn } from "next-auth/react"

function LoginPage() {


    return (
        <>
            <Card>
                <h2>Log In</h2>
                <Form >
                    <Input type='text' placeholder="Email" name="email"></Input>
                    <Input type='password' placeholder="Password" name="password"></Input>
                    <Button type="submit" >Sign Up</Button>
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
