const user = {
  firstName: "Eduardo",
  lastName: "Matos",
};
function buildName(user) {
  return `${user.firstName} ${user.lastName}`;
}
function App() {
  return (
    <div>
      <h1>Hello, {buildName(user)}</h1>
      <h2>How are you, {user.firstName} ?</h2>
    </div>
  );
}

export default App;
