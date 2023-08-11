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
    sidebar.style['top'] = '10vh'
    sidebar.style['height'] = '90vh'
    sidebar.style['width'] = '16.66%'
    sidebar.style['left'] = '0'
  }

  if ((offersWrapperRect.top > (headerRect.top + headerRect.height)) || footerRect.top <= window.innerHeight) {
    sidebar.style['position'] = 'relative'
    sidebar.style['top'] = '0'
    sidebar.style['height'] = 'unset'
    sidebar.style['width'] = 'unset'
  }
})