import { useEffect , useState} from 'react';
import './App.css';
import NewsContainer from './components/NewsContainer/NewsContainer';
import Navbar from './components/Navbar/Navbar';
import { ThreeDots } from 'react-loader-spinner';
import { useTheme } from './components/ThemeProvider';
function App() {
const {theme , toggleTheme} = useTheme()
  const [data,setData]=useState([]);

  useEffect( ()=>{

    async function fetchData(){
      const news = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      const json_news =await news.json();
  
      setData(json_news.Data);
    }
    fetchData();
  
  },[])

  return (
    <>
      <Navbar />
      <div className={`news-list ${theme} `}>
      {
       data.length===0? 
       <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="red"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
       : data.map((item)=>{
          return(
 
           <NewsContainer title={item.title} body={item.body} image={item.source_info.img} category={item.categories} url={item.url} />
           
          )
        })
      }
      </div>
    </>
  );
}

export default App;
