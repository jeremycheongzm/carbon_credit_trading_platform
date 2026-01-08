import { useEffect, useState } from "react";
import axios from "../api/axios";
import RequestTable from "../components/RequestTable";
import CreateRequestForm from "../components/CreateRequestForm";

export default function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("/api/requests").then((res) => {
      setRequests(res.data);
    });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <CreateRequestForm onCreated={() => window.location.reload()} />

      <h3>Your Requests</h3>
      <RequestTable requests={requests} />
    </div>
  );
}
