import './style.css'
import 'virtual:windi.css'

import togglePopup from './popup'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="hidden popup relative p-4 rounded-xl border-1 border-green-500">
<span class="absolute p-2 right-4 top-2 cursor-pointer">X</span>
<p class="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo.</p>
</div>
<div><button class="p-4 rounded-xl border-1 border-green-500 btn">Show Popup</button></div>
`


togglePopup(document.querySelector<HTMLButtonElement>('.btn')!)
