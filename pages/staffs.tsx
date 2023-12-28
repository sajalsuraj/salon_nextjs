import Head from "next/head";
import { Inter } from "next/font/google";
import StaffsContainer from "@/modules/staffs/staffs.container";
const inter = Inter({ subsets: ["latin"] });

export default function Staffs() {
  return (
    <>
      <Head>
        <title>SalonX: Staffs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StaffsContainer />
    </>
  );
}
