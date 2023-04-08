import { useState } from 'react';
import Header from './components/Header'
import PostsList from './components/Posts/PostsList';

function App() {
  const [userId, setUserId] = useState<number>(0);

  return (
    <>
      <Header setUserId={setUserId} />
      <PostsList userId={userId} />
    </>
  )
}

export default App
