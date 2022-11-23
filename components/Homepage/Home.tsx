import React, { useState } from "react";
import s from "./Home.module.scss";
import Image from "next/image";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import Withdraw from "@components/common/Withdraw";
import { useRecoilState } from "recoil";
import { dataAtom, show } from "../atom";
import Deposit from "@components/common/Deposit";

const HomePage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [withdraw, setWithdraw] = useRecoilState(show);
  const [data, setData] = useRecoilState(dataAtom);
  const [deposit, setDeposit] = useRecoilState(show);

  var currentPrice = data?.price;

  return (
    <div className={s.container}>
      <div className={withdraw ? s.show : s.hide}>
        <Withdraw />
      </div>
      <div className={deposit ? s.show : s.hide}>
        <Deposit />
      </div>
      <div className={s.profile}>
        <div className={s.imagewrapper}>
          <Image src="/images/logo.png" alt="Picture of the " layout="fill" />
        </div>
        <div
          className={s.logout}
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          <span>log out</span>
        </div>
      </div>
      <h1 className={s.name}>
        <span className={s.hello}>Hello</span>
        <span className={s.email}>{user.email}</span>
      </h1>
      <div className={s.balance}>
        <h3>Current Balance</h3>
        <div className={s.textwrap}>
          <div className={s.price}>
            <h1>°{currentPrice}</h1>
          </div>
        </div>
        <div className={s.btns}>
          <div className={s.btn1} onClick={() => setDeposit(!deposit)}>
            <span>Deposit</span>
          </div>
          <div
            className={`${s.btn1} ${s.btn2}`}
            onClick={() => setWithdraw(!withdraw)}
          >
            <span>Withdraw</span>
          </div>
        </div>
      </div>
      <div className={s.Holdings}>
        <div className={s.htitle}>
          <h1>History</h1>
          <span>see all</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
