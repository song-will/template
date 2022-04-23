import './index.css'
import printMe from './print'
function createEle () {
    const div = document.createElement('div')

    div.innerText = 'hello, webpack,song'

    div.classList.add('wrapper')

    const btn = document.createElement('button')

    btn.innerHTML = 'click'

    btn.onclick = printMe

    document.body.appendChild(btn)

    document.body.appendChild(div)
}

createEle()