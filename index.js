let hideSections = function () {
    let section = document.getElementsByTagName('section');
    for (let i = 0; i < section.length; i++) {
      section[i].style.display = 'none';
    }
  }

  hideSections();

  let url = new URL(document.URL);
  let page = url.searchParams.get("p");

  let showSection = function (page) {
    switch (page) {
      case 'contact':
        document.title = 'Matthew Richardson TEST Photography | Contact';
        document.getElementById('contact').style.display = 'block';
        break;
      case 'about':
        document.title = 'Matthew Richardson TEST Photography | About';
        document.getElementById('about').style.display = 'block';
        break;
      case 'gallery':
        document.title = 'Matthew Richardson TEST Photography | Gallery';
        document.getElementById('gallery').style.display = 'block';
        break;
      default:
        document.title = 'Matthew Richardson TEST Photography | Home';
        document.getElementById('home').style.display = 'block';
        break;
    }
  }

  showSection(page);

  let changePage = function (e) {
    let navurl = new URL(e.href);
    let newpage = navurl.searchParams.get("p");
    showSection(newpage);
    history.pushState(null, '', '?p='+newpage);
  }

  var navlink = document.getElementsByClassName('nav-link');
  Array.from(navlink).forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      hideSections();
      changePage(this);
    });
  });