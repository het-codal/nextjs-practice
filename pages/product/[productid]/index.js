import { useRouter } from "next/router";
export default function productdetail() {
  const router = useRouter();
  const productId = router.query.productid;
  return <h1>Product Detail {productId}</h1>;
}
