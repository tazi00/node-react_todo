import React, { ReactNode } from "react";

function Applayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Applayout;
