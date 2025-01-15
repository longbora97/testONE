import { use } from "react"
import { useEffect, useState } from "react"

function App() {
  const [alert, useAlert] = useState(false)
  const [number, setNumber] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setlongitude] = useState(0)
  useEffect(() => {
    document.title = number
    console.log("useEffect")
  }, [number, (getLocation())])

  function getLocation() {
    if (navigator.geolocation) {
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(showPosition);
      }, 1000);
    } else {
      console.log("NOONO")
    }
  }
  function showPosition(position) {
    setLatitude(position.coords.latitude)
    setlongitude(position.coords.longitude)
  }

  return (
    <>
      <h2 className="text-4xl text-center my-5">Welcome</h2>
      <div className="">
        <button className="mx-auto flex border p-5 border-red-500 m-5" onClick={() => useAlert(!alert)}>Click to Show</button>
        {alert ? <Message /> : null}
      </div>
      <button className="flex mx-auto border p-5" onClick={() => setNumber(number + 1)}>Increase</button>
      <h3 className="text-center m-5 text-4xl">{number}</h3>
      <h4 className="text-center">{latitude}</h4>
      <h4 className="text-center">{longitude}</h4>

    </>
  )
}

function Message() {
  return (<>
    <button className="border p-5 border-green-800 border-4 flex mx-auto my-5">Toggle Button</button>
  </>)
}

export default App
