import React, {useEffect,useState} from 'react'

function Mies() {
     
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory]=useState('animal')
  const [joke, setJoke]=useState('animal')

  useEffect(() => {
    async function fetchData(){
      await fetch (
        'https://api.chucknorris.io/jokes/categories'
      )
      .then((response)=> response.json())
      .then(setData)
      .catch(setError)
      .finally(()=> setLoading(false))
         
  }
   
  fetchData()
}, [])



  useEffect(() => {
    async function fetchData(){
      await fetch (
        `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      )
      .then((response)=> response.json())
      .then(setJoke)
      .catch(setError)
      .finally(()=> setLoading(false))
         
  } 
 
  fetchData()
}, [selectedCategory])


const mapCategories=

data.map((item, index)=>{

    return(
    
    
        <option value={item}  key={index} >
{item}

        </option>
        

    
    )
})


  return (
    <div>
     

     <h4>Choose Category</h4>
     {loading?(loading): error?('error'): (
        <div>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>{mapCategories}</select>
        <p>Selected category: {selectedCategory}</p>
        <p>The Joke: {joke.value}</p>
        </div>
     )}
     
    
    </div>
  )
}

export default Mies;