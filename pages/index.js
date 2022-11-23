import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@martifylabs/mesh-react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link
          rel="icon"
          href="https://mesh.martify.io/favicon/favicon-32x32.png"
        />
        <link
          href="https://mesh.martify.io/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <h1 className="title">
          <a href="https://mesh.martify.io/">Mesh</a> Next.js
        </h1>

        <div className="demo">
          <CardanoWallet />
        </div>

        <div className="grid">
          <a href="https://mesh.martify.io/apis" className="card">
            <h2>Hello NCKH 2022</h2>
            <p>
              NCKH 2022 chào các bạn sinh viên.
            </p>
          </a>

          <a href="https://mesh.martify.io/guides" className="card">
            <h2>Guides</h2>
            <p>
              Whether you are launching a new NFT project or ecommerce store,
              these guides will help you get started.
            </p>
          </a>

          <a href="https://mesh.martify.io/react" className="card">
            <h2>React components</h2>
            <p>
              Useful React UI components and hooks, seamlessly integrate them
              into your app, and bring the user interface to life.
            </p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
