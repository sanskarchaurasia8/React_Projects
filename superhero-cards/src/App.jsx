import users from "./data/users.js";
import UserCard from "./components/UserCard.jsx";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          fullName={user.fullName}
          title={user.title}
        />
      ))}
    </div>
  );
}

export default App;
