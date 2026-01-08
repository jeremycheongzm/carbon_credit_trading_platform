import axios from "../api/axios";

export default function RequestTable({ requests, showActions }) {
  const updateStatus = async (id, status) => {
    await axios.post(`/api/requests/${id}/${status}`);
    window.location.reload();
  };

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Company</th>
          <th>Carbon Qty</th>
          <th>Price</th>
          <th>Status</th>
          {showActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {requests.map((r) => (
          <tr key={r.id}>
            <td>{r.company_name}</td>
            <td>{r.carbon_quantity}</td>
            <td>{r.carbon_price}</td>
            <td>{r.status}</td>
            {showActions && (
              <td>
                <button onClick={() => updateStatus(r.id, "accept")}>
                  Accept
                </button>
                <button onClick={() => updateStatus(r.id, "reject")}>
                  Reject
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
