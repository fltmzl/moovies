"use client";

import { useEffect } from "react";

export default function PwaHead() {
  useEffect(() => {
    navigator.serviceWorker.register("/sw.js");
  }, []);

  return (
    <>
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
