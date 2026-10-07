import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Token:", token);

    if (!token) {
      navigate("/login");
      return;
    }

    const getDashboard = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Status:", response.status);

        const data = await response.json();

        console.log("Response:", data);

        if (!response.ok) {
          setMessage(data.message || "Dashboard request failed");

          if (response.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
          }

          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error("Dashboard error:", error);
        setMessage("Unable to connect to backend");
      }
    };

    getDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="page">
      <div className="dashboard-box">
        <h2>Dashboard</h2>

        {user ? (
          <>
            <p>Welcome back!</p>

            <div className="user-info">
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>User ID:</strong> {user.id}
              </p>
            </div>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <p className="message">{message || "Loading..."}</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;