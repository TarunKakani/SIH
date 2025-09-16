import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the API base URL
  const API_URL = 'http://127.0.0.1:4444';

  // State for each API endpoint
  const [infoMessage, setInfoMessage] = useState('');
  
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [userError, setUserError] = useState('');

  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [sumResult, setSumResult] = useState(null);

  // --- Handler Functions ---

  // 1. Fetch from /api/info
  const handleFetchInfo = async () => {
    try {
      const response = await fetch(`${API_URL}/api/info`);
      const data = await response.json();
      setInfoMessage(data.data);
    } catch (error) {
      setInfoMessage('Failed to connect to API.');
    }
  };

  // 2. Fetch from /api/user/<id>
  const handleFetchUser = async () => {
    if (!userId) {
      setUserError('Please enter a user ID.');
      return;
    }
    setUserData(null);
    setUserError('');
    
    try {
      const response = await fetch(`${API_URL}/api/user/${userId}`);
      if (!response.ok) {
        // Handle HTTP errors like 404
        const errorText = await response.text();
        throw new Error(errorText || `Error: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setUserError(error.message);
    }
  };

  // 3. POST to /api/add
  const handlePostAdd = async () => {
    setSumResult(null);
    const payload = {
      a: parseInt(numA, 10),
      b: parseInt(numB, 10),
    };

    try {
      const response = await fetch(`${API_URL}/api/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Error: ${response.status}`);
      }

      const data = await response.json();
      setSumResult(data.result);
    } catch (error) {
      console.error('Add Error:', error);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Crow C++ API Tester 🐦</h1>
      </header>
      <main className="container">
        {/* --- Section 1: Get Info --- */}
        <div className="card">
          <h2>GET /api/info</h2>
          <button onClick={handleFetchInfo}>Get Welcome Message</button>
          {infoMessage && <p className="result"><strong>Response:</strong> {infoMessage}</p>}
        </div>

        {/* --- Section 2: Get User by ID --- */}
        <div className="card">
          <h2>GET /api/user/&lt;id&gt;</h2>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID (e.g., 42)"
          />
          <button onClick={handleFetchUser}>Fetch User</button>
          {userData && (
            <div className="result">
              <p><strong>ID:</strong> {userData.id}</p>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
            </div>
          )}
          {userError && <p className="error">{userError}</p>}
        </div>

        {/* --- Section 3: Add Numbers --- */}
        <div className="card">
          <h2>POST /api/add</h2>
          <div className="input-group">
            <input
              type="number"
              value={numA}
              onChange={(e) => setNumA(e.target.value)}
              placeholder="Number A"
            />
            <span>+</span>
            <input
              type="number"
              value={numB}
              onChange={(e) => setNumB(e.target.value)}
              placeholder="Number B"
            />
          </div>
          <button onClick={handlePostAdd}>Calculate Sum</button>
          {sumResult !== null && <p className="result"><strong>Sum:</strong> {sumResult}</p>}
        </div>
      </main>
    </div>
  );
}

export default App;