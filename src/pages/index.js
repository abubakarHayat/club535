import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Club535</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen grid justify-items-center place-content-center">
        <Image
          src="/big_logo.png"
          className=" my-5"
          alt="Club535 logo"
          width={298}
          height={200}
        />
        <div className="flex space-x-1">
          <button className=" bg-black text-white w-40 text-xl p-3 block break-keep">
            Connect Wallet
          </button>
          <button className="w-40 text-xl p-3">Create Account</button>
        </div>
      </div>
    </>
  );
}
