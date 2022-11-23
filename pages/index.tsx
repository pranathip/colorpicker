import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ColorCard } from "../components/Card";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <body>
      <Layout>
        <ColorCard />
      </Layout>
    </body>
  );
}
