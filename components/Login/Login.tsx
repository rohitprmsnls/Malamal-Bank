import React, { useState } from "react";
import s from "./Login.module.scss";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { auth2 } from "@config/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// import { bookingAtom } from "src/_state";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth2,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className={`${s.container}`}>
      <div className={`${s.form}`}>
        <h1>Enter Account Details </h1>
        <Form>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Enter a valid Email ID",
              },
            ]}
          >
            <Input
              placeholder="Email ID"
              className={`${s.input_data}`}
              onChange={(e: any) => {
                setLoginEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Enter a valid password",
              },
            ]}
          >
            <Input
              placeholder=" Enter your 4 digit pin here"
              className={`${s.input_data}`}
              onChange={(e: any) => {
                setLoginPassword(e.target.value);
              }}
            />
          </Form.Item>
          <Link href="/home">
            <Button type="primary" onClick={login}>
              {auth2.currentUser}
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
