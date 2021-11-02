import { useRouter } from "next/router";
export default function productdetail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const productId = router.query.productid;
  return <h1>Product Detail {productId}</h1>;
}
