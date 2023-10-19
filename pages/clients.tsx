import Head from "next/head";
import { Inter } from "next/font/google";
import ClientsContainer from "@/modules/clients/clients.container";
const inter = Inter({ subsets: ["latin"] });

export default function Clients() {
  return (
    <>
      <Head>
        <title>SalonX: Clients</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientsContainer />
    </>
  );
}
