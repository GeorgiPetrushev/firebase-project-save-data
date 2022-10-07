import { useState, useEffect } from "react";
import { db } from "./firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: newAge });
    await setNewAge(0);
    await setNewName("");
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Name"
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
      ></input>
      <input
        placeholder="Age"
        type="number"
        onChange={(e) => setNewAge(e.target.value)}
        value={newAge}
      ></input>
      <button onClick={createUser}>Add User</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div> Name: {user.name}</div> <div>Age:{user.age}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
