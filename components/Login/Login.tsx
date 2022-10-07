import React from "react";
import s from "./Login.module.scss";
import { Button, Form, Input } from "antd";
import Link from "next/link";

// import { bookingAtom } from "src/_state";
const Login = () => {
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
                message: "Enter a valid Account number",
              },
            ]}
          >
            <Input placeholder="Account Number" className={`${s.input_data}`} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Enter a valid pin",
              },
            ]}
          >
            <Input
              placeholder=" Enter your 10 digit pin here"
              className={`${s.input_data}`}
            />
          </Form.Item>
          <Link href="/home">
            <Button type="primary">Log In</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;