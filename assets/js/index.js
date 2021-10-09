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
    alert('please enter those things which is asked don\'t make sentences except in message to people field otherwise your webpage is gonna ugly')
    let age = prompt('what is your age')
    let like = prompt('what do you like to do / what is your hobbies')
    let unlike = prompt('what things you won\'t like')
    let expaction = prompt('what is your expection to people / any message to them')
    let Name = prompt('what is your name')
    let container = document.getElementsByClassName('container')[0]
    let h1 = document.getElementsByClassName('head')[0]
    h1.innerHTML = Name
    if(age >= 22){
        let Occupation = prompt('What is your occupation')
        let marriage = prompt('are you married')
        var html = `<div class="ul"><ul>    <li>your age: ${age}</li>    <li>your occupation is: ${Occupation}</li>    <li>you are${marriage}maried</li></ul><ul>    <li>things you like to do is: ${like}</li>    <li>things you won't like is: ${unlike}</li>    <li>your message to people is: ${expaction}</li></ul></div>`
    }else{
        let study = prompt('what are you currently studying')
        let dream = prompt('what you wanna become')
        var html = `<div class="ul"><ul>    <li>your age is: ${age}</li>    <li>you are currently studying ${study}</li>    <li>your dream is to become ${dream}</li></ul><ul>    <li>things you like is: ${like}</li>    <li>things you don't like is: ${unlike}</li>    <li>your message to people is: ${expaction}</li></ul></div>`
    }
    let ele = document.createElement('div')
    ele.innerHTML = html + h1
    container.appendChild(ele)
