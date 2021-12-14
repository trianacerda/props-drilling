import { useEffect, useState } from 'react'
import Profile from '../../components/Profile/Profile'
import { UserProvider, useUser } from '../../context/UserContext'

const Home = () => {
  const { user } = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user.name) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [user])

  if (loading) return <h1>Loading...</h1>
  return <Profile />
}

export default Home
