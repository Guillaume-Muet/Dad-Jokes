document.addEventListener('DOMContentLoaded', () => {

    let joke_content = document.querySelector('#joke_content'); 
    let new_joke = document.querySelector('#new_joke');

    new_joke.addEventListener('click', () => {
        getJoke();
    });

    function getJoke() {
        let joke = null;

        const config = {
            headers: {
                'Accept': 'application/json'
            }
        };

        fetch('https://icanhazdadjoke.com', config)
            .then(res => res.json())
            .then(data => {
                joke = data.joke
            })

        setTimeout(() => {
            joke_content.textContent = joke;
        }, 900);
        
    }

    getJoke();

});