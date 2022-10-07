import React from "react";
import { Button, Form, Input } from "antd";
import s from "./Details.module.scss";
const Details = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.form}`}>
        <h1>Enter Details Here!</h1>
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
            <Input placeholder="NAME" className={`${s.input_data}`} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Enter your phone number",
              },
            ]}
          >
            <Input placeholder="Mobile" className={`${s.input_data}`} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Enter your valid email address",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email id" className={`${s.input_data}`} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Details;
