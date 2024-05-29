/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const LoginLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LoginLayout;
