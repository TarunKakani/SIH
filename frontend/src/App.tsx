import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
    
    // state to store the fetched data
    const [users, setUsers] = useState([]);

    // state to handle loading status
    const [loading, setLoading] = useState(true);

    // state to handle potential errors
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetch data from Crow
        const fetchData = async () => {
            try{

                // replace with correct url and port at the end
                const response = await fetch('http://localhost:4444/api/data');
                
                if (!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }
        }
    })
}

export default App