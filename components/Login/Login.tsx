import { Form, Input, Button } from "antd";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./Login.module.scss";

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/home");
    } catch (err) {
      console.log(err);
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
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
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
              placeholder=" Enter your pin here"
              className={`${s.input_data}`}
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
            />
          </Form.Item>
          {/* <Link href="/home"> */}
          <Button type="primary" className="btnReg" onClick={handleLogin}>
            Log In
          </Button>
          {/* </Link> */}
        </Form>
      </div>
    </div>
  );
};

export default Login;
