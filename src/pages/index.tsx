import { GetServerSideProps } from "next";

import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1KGiJpCWqUyehAH8Xvsx94Cc", {
    expand: ["product"],
    /* expand: ["product"] -> trás todas as informações do produto. Ajuda quando se quer apresentar mais de um preço, 9.90; 14.90  */
  });
  // retrieve é quando cê quer buscar apenas um só e passa o id do preço

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
    // divide por 100 porque o  valor é em centavo mais fácil de trabalhar no bd
  };
  return {
    props: {
      product,
    },
  };
};
