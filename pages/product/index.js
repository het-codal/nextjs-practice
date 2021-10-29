import Link from "next/link";

export default function Products({ productId = 100 }) {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/4" replace>
          <a>Product 4</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <a>Product 4</a>
        </Link>
      </h1>
    </>
  );
}
