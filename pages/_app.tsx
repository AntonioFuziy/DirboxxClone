import { Provider } from 'next-auth/client'

import '../styles/globals.css'

// import { Router } from 'next/router';
// import Head from 'next/head'
// import NProgress from 'nprogress';

// Router.events.on("routeChangeStart", (url) => {
//   NProgress.start();
// });

// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      {/* <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
      </Head> */}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
