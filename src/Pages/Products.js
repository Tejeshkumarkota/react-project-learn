import React, { useEffect, useState } from "react";
import Loading from "../Core/Loading";

export default function Products() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(false);

  const API = "https://dummyjson.com/products";

  useEffect(() => {
    function fetchAPI() {
      setLoading(true);
      fetch(API)
        .then((result) => result.json())
        .then((result) => {
          setProduct(result.products);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          setProduct([]);
        });
    }
    fetchAPI();
  }, []);
  return (
    <>
      {loading && <Loading />}
      {err && "Error: Found error"}
      {!loading &&
        products.map((item) => {
          return <p key={item.id}> {item.title} </p>;
        })}
    </>
  );
}
