import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="ko" suppressHydrationWarning>
      <Head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          type="image/webp"
          href="/static/mockup-todolist.webp"
        />
        <link
          rel="preload"
          fetchPriority="low"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          id="font-pretendard-variable"
        />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.getElementById("font-pretendard-variable").rel="stylesheet";`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
