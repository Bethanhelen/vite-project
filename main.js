import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    
    <h1>Hello world</h1>
    
  </div>
`

setupCounter(document.querySelector('#counter'))
