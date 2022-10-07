import { useState, useEffect } from "react";
import { db } from "./firebase/firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
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
