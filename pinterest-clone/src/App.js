import './App.css';
import Header from './components/Header'
import Mainboard from './components/Mainboard'
import unsplash from './api/unsplash'
import { useEffect, useState } from 'react';

function App() {

  const [pins, setNewPins] = useState([])

  // get images fro, unsplash api
  const getImages = (term) =>{
    return unsplash.get(
      'https://api.unsplash.com/search/photos'
      ,{
        params:{
          query: term
        }
    })

  }

  // ___ get images from on load from queris of dog,tokyo,cat...
  const getNewPins = ()=>{
    let promises = []
    let pinData = []

    let pins = ['ocean', 'Tokyo', 'dogs', 'cats', 'soccer']
    pins.forEach((pinTerm) =>{
      promises.push(
        getImages(pinTerm).then((res) =>{
          let results = res.data.results
          pinData = pinData.concat(results)

          pinData.sort(function(a,b){
            return 0.5 - Math.random();
          })
        })
      )
      Promise.all(promises).then(()=>{
        setNewPins(pinData)
      })
    })
  }

  useEffect(()=>{
    getNewPins()
  }, [])


  const onSearchSubmit = (term) =>{
    getImages(term).then((res) => {
      let results = res.data.results
      let newPins = [
        ...results,
        ...pins
      ]

      newPins.sort(function(a,b){ //__ randomise the array
        return 0.5 - Math.random()
      })
      setNewPins(newPins)
    })
  }
  
  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit}/>
      <Mainboard pins={pins}/>
    </div>
  );
}

export default App;
