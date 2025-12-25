function UserCard({ fullName, title }) {
  return (
    <div style={styles.card}>
      <div style={styles.imagePlaceholder}>
        Image
      </div>

      <h3 style={styles.name}>{fullName}</h3>
      <p style={styles.title}>{title}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "220px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  imagePlaceholder: {
    height: "120px",
    backgroundColor: "#eee",
    borderRadius: "8px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
    fontSize: "14px",
  },
  name: {
    margin: "5px 0",
  },
  title: {
    color: "#555",
    fontSize: "14px",
  },
};

export default UserCard;
