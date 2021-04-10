const changeActiveTabs = () => {

  const sideInfoTab = document.querySelector('.side-info-tab');
  const sidePortfolioTab = document.querySelector('.side-portfolio-tab');
  const topInfoTab = document.querySelector('.info-top-tab');
  const topPortfolioTab = document.querySelector('.portfolio-top-tab');

  // content pages
  const infoPage = document.querySelector('.content-holder')
  const profilePage = document.querySelector('.content-holder-one')

  //exit buttons
  const infoExit = document.querySelector('.info-exit-icon')
  const portfolioExit = document.querySelector('.portfolio-exit-icon')

  // scrolling
  const projects = document.querySelectorAll('.projects')

  // $('.side-info-tab').click(function() {
  //     $(this).addClass('active-tab');
  //     $('.side-portfolio-tab').removeClass('active-tab');
  //     $(".info-top-tab").addClass('active-top-tab')
  //     $(".portfolio-top-tab").removeClass('active-top-tab')
  //     $('.content-holder').show();
  //     $('.content-holder-one').hide();


  // })
  sideInfoTab.addEventListener('click', () => {
    //scrolling 
    if (sideInfoTab.classList.contains('active-tab') === false) {
      document.documentElement.scrollTop = 0
    }

    sideInfoTab.classList.add('active-tab')
    sidePortfolioTab.classList.remove('active-tab')
    topInfoTab.classList.add('active-top-tab')
    topPortfolioTab.classList.remove('active-top-tab')
    infoPage.classList.remove('no-display')
    profilePage.classList.add('no-display')
    topInfoTab.classList.remove('no-display')

    //reset scroll
    projects.forEach(project => {
      project.classList.remove('show')
    })


  });




  topInfoTab.addEventListener('click', () => {
    //scrolling 
    if (topInfoTab.classList.contains('active-top-tab') === false) {
      document.documentElement.scrollTop = 0
    }

    sideInfoTab.classList.add('active-tab')
    sidePortfolioTab.classList.remove('active-tab')
    topInfoTab.classList.add('active-top-tab')
    topPortfolioTab.classList.remove('active-top-tab')
    infoPage.classList.remove('no-display')
    profilePage.classList.add('no-display')

    //reset scroll
    projects.forEach(project => {
      project.classList.remove('show')
    })
  });




  sidePortfolioTab.addEventListener('click', () => {
    //scrolling 
    if (sidePortfolioTab.classList.contains('active-tab') === false) {
      document.documentElement.scrollTop = 0
    }

    sideInfoTab.classList.remove('active-tab')
    sidePortfolioTab.classList.add('active-tab')
    topInfoTab.classList.remove('active-top-tab')
    topPortfolioTab.classList.add('active-top-tab')
    infoPage.classList.add('no-display')
    profilePage.classList.remove('no-display')
    topPortfolioTab.classList.remove('no-display')
  });


  topPortfolioTab.addEventListener('click', () => {
    //scrolling 
    if (topPortfolioTab.classList.contains('active-top-tab') === false) {
      document.documentElement.scrollTop = 0
    }

    sideInfoTab.classList.remove('active-tab')
    sidePortfolioTab.classList.add('active-tab')
    topInfoTab.classList.remove('active-top-tab')
    topPortfolioTab.classList.add('active-top-tab')
    infoPage.classList.add('no-display')
    profilePage.classList.remove('no-display')






  });


  infoExit.addEventListener('click', (e) => {
    if (topInfoTab.classList.contains('active-top-tab') && topPortfolioTab.classList.contains('no-display') === false) {
      $(document).ready(function () {
        $(".portfolio-top-tab").trigger('click');
      });


      topInfoTab.classList.add('no-display')
    } else if (topPortfolioTab.classList.contains('active-top-tab') && topPortfolioTab.classList.contains('no-display') === false) {
      topInfoTab.classList.add('no-display')
      e.stopPropagation();
    }
  })

  portfolioExit.addEventListener('click', (e) => {
    if (topPortfolioTab.classList.contains('active-top-tab') && topInfoTab.classList.contains('no-display') === false) {
      $(document).ready(function () {
        $(".info-top-tab").trigger('click');
      });
      topPortfolioTab.classList.add('no-display')
    } else if (topInfoTab.classList.contains('active-top-tab') && topInfoTab.classList.contains('no-display') === false) {
      topPortfolioTab.classList.add('no-display')
      e.stopPropagation();
    }
  })

  $('.src-holder').click(function () {
    $('.side-text').slideToggle(400);
    $('.open-folder').toggle();
    $('.closed-folder').toggle();
    $("#caret").toggleClass("caret-closed")
  });


  const triggerBottom = (window.innerHeight / 5.8 * 4)
  $(document).ready(function () {
    window.addEventListener('scroll', () => {
      if (infoPage.classList.contains('no-display')) {
        projects.forEach(project => {
          const boxTop = project.getBoundingClientRect().top

          if (boxTop < triggerBottom) {
            project.classList.add('show')
          } else {
            project.classList.remove('show')
          }
        })
      }
    });
  });






}

export {
  changeActiveTabs
}