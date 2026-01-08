import { useState } from "react";
import axios from "../api/axios";

export default function CreateRequestForm({ onCreated }) {
  const [company, setCompany] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/api/requests", {
      company_name: company,
      carbon_quantity: qty,
      carbon_price: price,
      request_type: "BUY",
    });
    onCreated();
  };

  return (
    <form onSubmit={submit}>
      <h3>Create Request</h3>
      <input placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
      <input placeholder="Qty" onChange={(e) => setQty(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <button>Create</button>
    </form>
  );
}
