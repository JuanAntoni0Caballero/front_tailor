"use client";
import NotFound from "../../not-found";
export default function ErrorBoundary() {
  console.log("entro en error");
  return <NotFound />;
}
