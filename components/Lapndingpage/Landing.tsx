import React from "react";
import s from "./Landing.module.scss";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <h1>
            MalaMal <br /> <span>bank</span>
          </h1>
        </div>
        <div className={s.imagewrapper}>
          <Image src="/images/logo.png" alt="" layout="fill" />
        </div>
        <div className={s.content}>
          <h3>Jump start your crypto portfolio</h3>
          <p>Take your investment portfolio to next level</p>
          <Link href="/details">
          <div className={s.btn}>New Account</div>
          </Link>
          <Link href="/existing">
          <div className={s.btn1}>Existing Account</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
