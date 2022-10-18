import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import s from "./Details.module.scss";
import Link from "next/link";
import axios from "axios";
const { TextArea } = Input;
const Details = () => {
  const handlesignup = () => {
    axios
      .get("http://localhost:3000", {
      //  name,phone,email,git 
      })
      .then((res) => {
        console.log(res);
        if (res.data.message) {
         
          localStorage.setItem("user", JSON.stringify(res.data.userLogin));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          //setState(false);
        }
      })
      .catch((err) => {
        
       alert(err.response.data.error.toUpperCase());
      
      });
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
          {/* <Form.Item
            name="password"
            rules={[
              {
                required: true,
                // message: "Enter your valid email address",
                type: "number",
              },
            ]}
          > */}
            {/* <Input
              placeholder=" Enter Password"
              className={`${s.input_data}`}
            />
          </Form.Item>
          <Form.Item
            name="confirm password"
            rules={[
              {
                required: true,
                // message: "Enter your valid email address",
                type: "number",
              },
            ]}
          > */}
            {/* <Input
              placeholder="Re enter password"
              className={`${s.input_data}`}
            />
          </Form.Item> */}
          <TextArea
            placeholder="Your address"
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
          <Link href="/existing">
            <Button type="primary" onClick={handlesignup}>Submit</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Details;
