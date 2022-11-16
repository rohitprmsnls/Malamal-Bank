import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import s from "./Details.module.scss";
import { useAuth } from "context/AuthContext";


const Details = () => {
  const { user, signup } = useAuth();
  console.log(user);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
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
              className={`${s.input_data}`}
              type="email"
              placeholder="Enter email"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
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
              type="password"
              placeholder="Password"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleSignup} className="btnReg">
              Registor
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Details;
