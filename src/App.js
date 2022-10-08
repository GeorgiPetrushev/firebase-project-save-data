import { useState, useEffect } from "react";
import { db } from "./firebase/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const updateUser = async (id, age, type) => {
    const userDoc = doc(db, "users", id);
    const changeAge = type === "up" ? { age: age + 1 } : { age: age - 1 };
    await updateDoc(userDoc, changeAge);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
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
            <button onClick={() => updateUser(user.id, user.age, "up")}>
              Increase Age
            </button>
            <button onClick={() => updateUser(user.id, user.age, "down")}>
              Decrease Age
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
