import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import s from "./Details.module.scss";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "@config/firebase";
import { dataAtom } from "@components/atom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

// import Link from "next/link";
// import axios from "axios";
const { TextArea } = Input;
const Details = () => {
  const [regisitorEmail, setRegisitorEmail] = useState("");
  const [regisitorPassword, setRegisitorPassword] = useState("");
  const [data, setdata] = useRecoilState(dataAtom);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regisitorEmail,
        regisitorPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }

  const updateData = (value: string) => {
    setdata({ name: value });
  };



  // const test = async () => {
  //   sendEmailVerification(auth.currentUser)
  // .then(() => {
  //   // Email verification sent!
  //   // ...
  // }); 
  // }



  return (
    <div className={`${s.container}`}>
      <div className={`${s.form}`}>
        <h1>Enter Details Here</h1>
        <Form>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Enter your name",
              },
            ]}
          >
            <Input
              placeholder="name"
              className={`${s.input_data}`}
              value={data?.name!!}
              // onChange={(value: string) => {
              //   updateData(value);
              // }}
            />
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
            <Button onClick={register}>Registor</Button>
            {/* <Button onClick={test}>test</Button> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
}

export default Details;
