import React,{Component,useState,useEffect} from 'react';



/*
class  App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState({
      count:this.state.count+1
    })
  }

  render(){
  return (
    <div>
    <h2>App</h2>
    <button onClick={this.increment}>
      Clicked{this.state.count} times
    </button>
  </div>
  );
}
}
*/

/*
const App = () => {
  const [count,setCount] = useState(0);

const  increment = () => {
    setCount(count+1);
  }

  return (
    <div>
    <h2>App</h2>
    <button onClick={increment}>
      Clicked{count} times
    </button>
  </div>
  );

}

*/

/*
class  App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState({
      count:this.state.count+1
    })
  }

componentDidMount(){
  document.title = `clicked ${this.state.count} times`;
}

componentDidUpdate(){
  document.title = `clicked ${this.state.count} times`;
 
}

  render(){
  return (
    <div>
    <h2>App</h2>
    <button onClick={this.increment}>
      Clicked{this.state.count} times
    </button>
  </div>
  );
  }
}

*/
/*
const App = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count} times`;
  })

const  increment = () => {
    setCount(count+1);
  }

  return (
    <div>
    <h2>App</h2>
    <button onClick={increment}>
      Clicked{count} times
    </button>
  </div>
  );

}
*/
const App = () => {

  const [news,setNews] = useState([])
  const [searchquery,setsearchquery] = useState()
  const [url,setUrl] = useState('http://hn.algolia.com/api/v1/search?tags=front_page')


  const fetchNews = () => {

    fetch(url)
    .then(result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error))
  }

  useEffect(() =>{
    fetchNews()
  },[url])

  const handleNewsChange=(e)=>{ 
setsearchquery(e.target.value)
  }

  const handleNewsSubmit=(e)=>{ 
e.preventDefault() 
setUrl(`http://hn.algolia.com/api/v1/search?query=${searchquery}`)
     }

const showNews = () =>  news.map((n,i) => (<p key={i}><li><a href={n.url} target="_blank" rel="noopener noreferrer" >{n.title}</a></li></p>));

const searchForm = () =>(
<form onSubmit={handleNewsSubmit}>
      <h2>NewsApp</h2>
      <input type="text" value={searchquery} onChange={handleNewsChange}/>
      <button>search</button>
      </form>
);

  return(
    <div className="jumbotron">
     {searchForm()} 
{showNews()}
    </div>
  )
  
}


export default App;
