import React from "react";
import s from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <div className={s.imagewrapper}>
          <Image
            src="/images/logo.png"
            alt="Picture of the "
            layout="fill"
          />
        </div>
        <div className={s.logout}>
          <span>log out</span>
        </div>
      </div>
      <h1>
        {" "}
        <span>Hello</span>Customer
      </h1>
      <div className={s.balance}>
        <h3>Current Balance</h3>
        <div className={s.textwrap}>
          <div className={s.price}>
            <h1>$87,430.12</h1>
          </div>
          <div className={s.percent}>
            <div className={s.arrow}>
              <Image
                src="/images/icons/arrowup.svg"
                alt="Picture of the "
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className={s.btns}>
          <div className={s.btn1}>
            <span>Deposit</span>
          </div>
          <div className={`${s.btn1} ${s.btn2}`}>
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