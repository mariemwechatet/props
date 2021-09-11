
import Item from 'antd/lib/list/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppBarr from './components/AppBarr';
import Footer from './components/Footer';
import ListProd from './components/ListProd';



function App() {
  
    const ItemArray =[
      {
        image:'https://i.ytimg.com/vi/DC1oUux6_pk/maxresdefault.jpg',
        name:'xxxtentation',
        songName: 'sad',
        price:'450$'
      },
      {
        image:'https://i.ytimg.com/vi/pDS76t73zso/maxresdefault.jpg',
        name:'xxxtentation',
        songName: 'Hope',
        price:'300$'
      },
      {
        image:'https://hypeddit-gates-prod.s3.amazonaws.com/fzcq48_coverartmanual',
        name:'xxxtentation',
        songName: 'Moonlight',
        price:'250$'
      },
      {
        image:'https://i.ytimg.com/vi/eMkM1q7q630/maxresdefault.jpg',
        name:'xxxtentation',
        songName: 'Change',
        price:'800$',
      },
  
    ] 
    const handelClick=(x,y)=>
    {

      alert(`the name of song id ${x} and the price ${y}`)
    }
  
  return (
    <div className="App">
      
   <AppBarr/>
   <ListProd produits={ItemArray}  CLick={handelClick}/>
   
   <Footer mimi={"XXXtentation"}>
     <h1>this is our page</h1>
     </Footer>


    </div>
  );
}


export default App;
