import { ReactNode } from "react";
import { AuthProvider } from "./src/context/authContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
