const scrollInjection = () => {
  const projectLeft = document.querySelectorAll('.project-left')
  const projectRight = document.querySelectorAll('.project-right')

  $(document).ready(function () {
    window.addEventListener('scroll', () => {
      projectLeft.forEach(project => {
        if (inViewport(project)) {
          project.classList.add('show');
        } else {
        project.classList.remove('show');
        }
      })
    })
  });
};
export {
  scrollInjection
}