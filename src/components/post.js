import { useState } from 'react'
import axios from "axios";

function Post() {
  const [id, setid] = useState('');
  const [title, settitle] = useState('');
  const [body, setbody] = useState('');

  const idhandler = (event) => {
    setid(event.target.value);
  }

  const titlehandler = (event) => {
    settitle(event.target.value);
  }

  const bodyhandler = (event) => {
    setbody(event.target.value);
  }

  const submithandler = (event) => {

    event.preventDefault();

    const newData = { Id: id, Title: title, Body: body }
    const abc = axios.post("https://jsonplaceholder.typicode.com/posts", newData);
    console.log(newData, abc);
  }



  return (
    <>
      <form onSubmit={submithandler} className='container'>
        <label >Enter ID</label>
        <input type="number" onChange={idhandler}/>
        <label >Enter Title</label>
        <input type="text" onChange={titlehandler}/>
        <label >Enter Body</label>
        <input type="text" onChange={bodyhandler}/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Post

