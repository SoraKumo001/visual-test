import React from "react";
import Link from "next/link";
import Head from "next/head";
import { JSWindow } from "@jswf/react";

export default () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <JSWindow>Test2</JSWindow>
    <div>Hello world!</div>
    <Link href="page02"><a>Page02</a></Link>
  </>
);
