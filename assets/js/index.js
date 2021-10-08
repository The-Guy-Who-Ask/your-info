/*<h1>name</h1>
    <div class="ul">
        <ul>
            <li>Age</li>
            <li>occupation</li>
            <li>are you married</li>
        </ul>
        <ul>
            <li>things you like to do</li>
            <li>things you don't like</li>
            <li>your expactation to people</li>
        </ul>
    </div> */
    let age = prompt('what is your age')
    if(age >= 22){
        let occupation = prompt('What is your occupation')
        let marriage = prompt('are you married')
    }else{
        let study = prompt('what are you currently studying')
        let dream = prompt('what you wanna become')
    }
    let like = prompt('what do you like to do / what is your hobbies')
    let unlike = prompt('what things you won\'t like')
    let expaction = prompt('what is your expection to people / any message to them')
    let name = prompt('what is your name')
let container = document.getElementsByClassName('container')
let html = `<h1>${name}</h1> let ele = document.createElement('div')<div class="ul"><ul>    <li>${age}</li>    <li>${occupation}${study}</li>    <li>${marriage}${dream}</li></ul><ul>    <li>${like}</li>    <li>${unlike}</li>    <li>${expaction}</li></ul></div>`
ele.innerHTML = html
container.appendChild(ele)
