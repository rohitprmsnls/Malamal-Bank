import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import s from "./Details.module.scss";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@config/firebase";
import { useRouter } from "next/router";
import { useAuth } from "context/AuthContext";

// import Link from "next/link";
// import axios from "axios";
const { TextArea } = Input;
const Details = () => {
  const [regisitorEmail, setRegisitorEmail] = useState("");
  const [regisitorPassword, setRegisitorPassword] = useState("");

  const router = useRouter();


  const register = async () => {
    try {
      const User = await createUserWithEmailAndPassword(
        auth,
        regisitorEmail,
        regisitorPassword
      );
      // console.log(user);
    } catch (error: any) {
      console.log(error.message);
      router.push("/home");
    }
  };

  const logout = async () => {};

  const update = (e: any) => {
    e = e.target.value;
    console.log(Input);
  };

  return (
    <div className={`${s.container}`}>
      <div className={`${s.form}`}>
        <h1>Enter Details Here</h1>
        <Form>
          <Form.Item
            name="name"
            rules={[
              {
                required: false,
                message: "Enter your name",
              },
            ]}
          >
            <Input placeholder="NAME" className={`${s.input_data}`} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Enter your Email ID",
              },
            ]}
          >
            <Input
              placeholder="Email"
              className={`${s.input_data}`}
              type="email"
              onChange={(e: any) => {
                setRegisitorEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Enter your password",
              },
            ]}
          >
            <Input
              placeholder="password"
              className={`${s.input_data}`}
              onChange={(e: any) => {
                setRegisitorPassword(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={register} className="btnReg">
              Register
            </Button>
            {/* <Button onClick={resetPass} className="btnReg">
              auth
            </Button> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Details;
