import './App.css'
import Accordion from './components/accordion';

function App() {

  const items = [
    {
      title: "javaScript",
      content: "it is a very good language"
    },
    {
      title: "java",
      content: "total object oriented language"
    },
    {
      title: "c++",
      content: "low level language"
    }
  ];

  return (
    <>
      <Accordion items = {items}/>
    </>
  )
}

export default App;
