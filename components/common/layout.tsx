import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
        <div className="w-[250px]">
          <Sidebar />
        </div>
        <div className="right-panel">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
