import '@fortawesome/fontawesome-free/css/all.min.css'لهف 
const menuIcon = document.getElementById('menu-icon')
const mobileMenu = document.getElementById('mobile-menu')
const cancleMenu = document.getElementById('cancle-menu')

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden')
})

cancleMenu.addEventListener('click', closeMenuFn)

function closeMenuFn() {
  mobileMenu.classList.add('hidden')
}

document.addEventListener('click', (e) => {
  if (!mobileMenu.classList.contains('hidden') && e.target !== menuIcon) {
    closeMenuFn()
  }
})


