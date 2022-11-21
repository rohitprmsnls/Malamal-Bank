import React from "react";
import s from "./Home.module.scss";
import Image from "next/image";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import Withdraw from "@components/common/Withdraw";
import { sendEmailVerification } from "firebase/auth";

const HomePage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const verify = async (user: any) => {
    sendEmailVerification(user);
  };

  return (
    <div className={s.container}>
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
        <span className={s.email}>{user.displayName}</span>
      </h1>
      <div className={s.balance}>
        <h3>Current Balance</h3>
        <div className={s.textwrap}>
          <div className={s.price}>
            <h1>°0</h1>
          </div>
        </div>
        <div className={s.btns}>
          <div className={s.btn1}>
            <span>Deposit</span>
          </div>
          <div className={`${s.btn1} ${s.btn2}`} onClick={verify}>
            <span>verify</span>

            <Withdraw />
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
