import React from "react"
import Helmet from "react-helmet"

function GoogleAd() {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-151727989-1"
        ></script>

        <script
          data-ad-client="ca-pub-3988982736254142"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Helmet>
    </>
  )
}

export default GoogleAd
