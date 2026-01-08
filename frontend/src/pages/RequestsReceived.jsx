import { useEffect, useState } from "react";
import axios from "../api/axios";
import RequestTable from "../components/RequestTable";

export default function RequestsReceived() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("/api/requests").then((res) => {
      setRequests(res.data);
    });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Requests Received</h1>
      <RequestTable requests={requests} showActions />
    </div>
  );
}
