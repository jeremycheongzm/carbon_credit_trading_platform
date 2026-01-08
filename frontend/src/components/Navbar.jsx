import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <Link to="/">Dashboard</Link>{" | "}
      <Link to="/requests">Requests Received</Link>{" | "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
