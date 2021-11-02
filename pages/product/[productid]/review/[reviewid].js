import { useRouter } from "next/router";
export default function review() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { productid, reviewid } = router.query;
  return (
    <h1>
      {reviewid} review of product {productid}
    </h1>
  );
}
