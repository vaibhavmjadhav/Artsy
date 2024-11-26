// import React from 'react'
import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "Artsy",
  desciption: "Art Marketplace for Artists",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};
export default layout;
