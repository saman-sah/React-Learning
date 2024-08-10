import React, { useEffect, useState, useCallback } from 'react'
import Form from './form'
import { fetchData } from './api'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const handleInputChange = useCallback((id, field, newName) => {
    setData(prvData => prvData.map(itm => itm.id === id ? { ...itm, [field]: newName } : itm))
  }, [])
  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchData()
        setData(fetchedData)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    loadData()
  }, [])


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    data.map(user => {
      return <Form key={user.id} user={user} handler={handleInputChange} />
    })
  )

}

export default App;
