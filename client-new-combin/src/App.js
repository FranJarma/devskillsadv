import Home from "./components/Home";
import './styles/styles.css';

function App(){

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsIm5hbWUiOiJzYXJhaCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjM4Mjk3MDAwfQ.48e5VGDsmSmLFThSOSYr2ix7CVXcEroRBoAPtJPn2zc');

    return(
    <>
    <Home/>
    </>
    )
}
export default App;