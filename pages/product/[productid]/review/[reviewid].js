import { useRouter } from "next/router";
export default function review() {
  const router = useRouter();
  const { productid, reviewid } = router.query;
  return (
    <h1>
      {reviewid} review of product {productid}
    </h1>
  );
}
