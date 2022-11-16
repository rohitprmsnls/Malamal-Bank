import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import "nprogress/nprogress.css";
import "../styles/theme.scss";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { AuthContextProvider } from "context/AuthContext";
import ProtectedRoute from "@components/ProtectedRoute";

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // for loader
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  const router = useRouter();

  const noAuthReq = ["/", "/existing", "/details"];

  return (
    <>
      <RecoilRoot>
        <AuthContextProvider>
          {noAuthReq.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </AuthContextProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
