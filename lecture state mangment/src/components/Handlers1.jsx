function Greet(){
    function sayHello(name){
        alert('Hello' + name);
    }
    return <button onClick={() => sayHello(' Shashank')}>Greet Shashank</button>
}
export default Greet;