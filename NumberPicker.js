//Imports are already global since we declared them with CDN's in index.html

function getRandomNumberOneThroughTen(){
    //Math.floor(Math.random()* 10) will return random positive integer b/w 0 & 9, need to add 1 to get random num b/w 1 & 10
    return Math.floor(Math.random() * 10) + 1;
}

export class NumberPicker extends React.Component {
    render(){
        const resultOfRandomOneThroughTen = getRandomNumberOneThroughTen();

        return (
            <div>
                <h1>Generate a random number between 1-10</h1>
                <h1>Your number is {resultOfRandomOneThroughTen}</h1> 
                {/* Simple example of conditional rendering, p tag below will render two different strings, dependent on whether the random num selected is 7 or not */}
                <p>{resultOfRandomOneThroughTen === 7 ? 'Oh boy, today\'s my lucky day!' : 'I wish it was 7...'}</p>
                {/* logic below will render a GIF if the first condition is true. Instead of if-else logic, we can use && operator to render objects as well. */}
                {
                    resultOfRandomOneThroughTen === 7 &&
                    <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                }
            </div>
        
        )
    }
}