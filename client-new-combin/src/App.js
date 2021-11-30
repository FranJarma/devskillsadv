import Home from "./components/Home";

function App(){

    const generarToken = () => {
        const token = fetch('http://localhost:8081/auth', {
            method: 'POST',
            body: JSON.stringify({
                username: "sarah",
                password: "connor"
            }),
            headers: {
                Authorization: 'Bearer [token]'
            }
        }).then(value => console.log(value))
        .catch(err => console.log(err));
    }
    return(
    <>
        <Home/>
        <br/>
        <button onClick={generarToken}>Generar token</button>
    </>
    )
}
export default App;