import React, { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs } from "./firebase";
import "./App.css";

function App() {
  const [school, setSchool] = useState("");
  const [students, setStudents] = useState("");
  const [accommodationData, setAccommodationData] = useState([]);

  // Function to submit data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!school || !students) {
      alert("Please enter all details.");
      return;
    }

    try {
      await addDoc(collection(db, "accommodation"), {
        school,
        students: Number(students),
        timestamp: new Date(),
      });
      alert("Data submitted successfully!");
      setSchool("");
      setStudents("");
      fetchData();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting data.");
    }
  };

  // Function to fetch data
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "accommodation"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAccommodationData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Accommodation Entry</h1>
      <form onSubmit={handleSubmit}>
        <label>
          School Name:
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </label>
        <label>
          Number of Students:
          <input
            type="number"
            value={students}
            onChange={(e) => setStudents(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Accommodation Data</h2>
      <ul>
        {accommodationData.map((item) => (
          <li key={item.id}>
            <strong>{item.school}</strong> - {item.students} students
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
