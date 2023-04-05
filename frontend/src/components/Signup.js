import Navbar from "./Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      {/* Input field */}
      <div>
        <h2>Signup</h2>
        <label>
          <h4>Username:</h4>
          <input type="text" />
        </label>
        <label>
          <h4>Email:</h4>
          <input type="text" />
        </label>
        <label>
          <h4>Password:</h4>
          <input type="text" />
        </label>
      </div>
      <button>Signup</button>
    </div>
  );
};

export default Signup;
