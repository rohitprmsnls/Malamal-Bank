import { dataAtom, show } from "@components/atom";
import { Form, Input, Button } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import s from "./Withdraw.module.scss";

const Withdraw: React.FC = () => {
  const [withdraw, setWithdraw] = useRecoilState(show);
  const [data, setData] = useRecoilState(dataAtom);



  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.title}>
            <h1>Withdraw</h1>
            <h3 onClick={() => setWithdraw(!withdraw)}>X</h3>
          </div>
          <div className={s.form}>
            <Form>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter amount",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter amount"
                  className={`${s.input_data}`}
                  required
                  type="number"
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      price: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <Button
                type="primary"
                className="btnReg"
                onClick={() => setWithdraw(!withdraw)}
              >
                Withdraw
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
