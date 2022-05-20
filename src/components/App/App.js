import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import api from '../../api/api';
import './App.css';
import Card from '../Card/Card';

function App() {

  const [searchQuery, setSearchQuery] = useState('cat')
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    handleRequest()
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleRequest()
  }

  const handleInputChange = (value) => {
    setSearchQuery(value)
  }

  const handleRequest = () => {
    setIsLoading(true)
    api
    .search({
      query: searchQuery
    })
    .then(response => {
      console.log('response:', response)
      const cards = response.results.map(item => {
        return {
          id: item.id,
          src: item.urls.regular,
          author: item.user.name,
          title: item.description,
        }
      })
      setCards(cards)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }
console.log(cards)

  return (
    <div className='app'>
      <div className='app__content'>
        <h2>{searchQuery}</h2>
        <form className='app__search' onSubmit={handleFormSubmit}>
          <Input 
            placeholder = "input high resolution photo"
            handleChange={handleInputChange}
          />
          <Button>
            <h2>Search</h2>
          </Button>

        </form>
        <div className='app__cards'>
          {isLoading && <p>Loading...</p>}
          {cards.map(item => {
          return (
          <Card 
            key={item.id}
            {...item}
          />
          )
        })}

        </div>
      </div>
    </div>
  );
}

export default App;
