function Greet(){
    function sayHello(name){
        alert('Hello' + name);
    }
    return <button onClick={() => sayHello(' Chaitanya')}>Greet Chaitanya</button>
}
export default Greet;