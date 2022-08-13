import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../helpers/gtag";

const isProduction = process.env.NODE_ENV === "production";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* enable analytics script only for production */}
        {isProduction && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </>
        )}
      </Head>
      <body className="pt-[80px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
