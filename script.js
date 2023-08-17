
// this handles the sticky scroll of the sidebar 
window.addEventListener('scroll', (e) => {
  
  const sidebar = document.querySelector('#fields-sidebar')
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')
  const offersWrapper = document.querySelector('#offers-wrapper')
  const offersWrapperRect = offersWrapper.getBoundingClientRect()
  const sidebarRect = sidebar.getBoundingClientRect()
  const headerRect = header.getBoundingClientRect()
  const footerRect = footer.getBoundingClientRect()



  if ((sidebarRect.top <=  (headerRect.top + headerRect.height)) && footerRect.top > window.innerHeight) {
    sidebar.style['position'] = 'fixed'
    sidebar.style['top'] = '12vh'
    sidebar.style['height'] = '90vh'
    sidebar.style['width'] = '16.66%'
    sidebar.style['left'] = '0'
  }

  if ((offersWrapperRect.top > (headerRect.top + headerRect.height)) || footerRect.top <= window.innerHeight) {
    sidebar.style['position'] = 'relative'
    sidebar.style['top'] = '0'
    sidebar.style['height'] = '100%'
    sidebar.style['width'] = 'unset'
  }
})

// this handles the swap action of the signup block
function handleNextBlock() {
  const signupBlocks = document.querySelectorAll('.form-main .block')
  const followButton = document.querySelector('#follow-button')
  const signupButton = document.querySelector('#signup-button')

  if (signupBlocks[0].classList.contains('current')) {
    signupBlocks[0].style['left'] = '-120%'
    signupBlocks[0].classList.remove('current')

    signupBlocks[1].style['left'] = '0'
    signupBlocks[1].classList.add('current')

    followButton.innerHTML = '<< precedent'
    signupButton.style['display'] = 'inline'
    signupButton.style['background-color'] = 'black'
  } else {
    signupBlocks[1].style['left'] = '120%'
    signupBlocks[1].classList.remove('current')

    signupBlocks[0].style['left'] = '0'
    signupBlocks[0].classList.add('current')

    followButton.innerHTML = 'suivant >>'
    signupButton.style['background-color'] = 'rgba(255, 255, 255, 0.211)'
    signupButton.style['display'] = 'none'

  }
}
