// Есть ли обработчик? (function) => handler, listener, subscriber
// При вызове формируется объект ({}) => event, ev, e
// Если есть handler => function(e) => callback

const sm = document.getElementById('small')
const md = document.getElementById('medium')

function handler1(e){
  e.stopPropagation()
  alert(e.currentTarget.id)
}

const handler2 = (e) => {

  alert('yo')
}

// sm.onClick = handler
// sm.onClick = null

sm.addEventListener("click", handler1)
sm.addEventListener("click", handler2)
// sm.removeEventListener("click", handler1)
sm.removeEventListener("click", handler2)
md.addEventListener("click", handler2)
// Target => currentTarget (лучше использовать)

const a = document.getElementById("a")
a.addEventListener("click", (e) => {
  e.preventDefault()
  alert("Ссылка не работает.")
})