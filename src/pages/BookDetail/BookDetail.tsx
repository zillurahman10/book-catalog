import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  return <div>Detail of book with ID: {id}</div>;
};

export default BookDetail;
