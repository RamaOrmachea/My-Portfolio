document.addEventListener('DOMContentLoaded', function () {
    let languageToggle = document.getElementById('language-toggle');
    let headerListItems = document.querySelectorAll('#headerList li');
    let cvLinks = document.querySelectorAll('.social-button[href="files/Cv - Ramiro Ormachea E.pdf"]');
    function setSpanish() {
      headerListItems.forEach(function (item, index) {
      
        switch (index) {
          case 0:
            item.textContent = 'Inicio';
            break;
          case 1:
            item.textContent = 'Proyectos';
            break;
          case 2:
            item.textContent = 'Herramientas';
            break;
          case 3:
            item.textContent = 'Contacto';
            break;
        }
      });

      document.getElementById('main').querySelector('h2').textContent = 'Desarrollador Backend'
  
      document.getElementById('proyectos').querySelector('h2').textContent = 'Proyectos';
      document.getElementById('proyectos').querySelector('p').textContent = 'Rol: Desarrollador Backend';
      document.getElementById('proyectos').querySelector('p.description').innerHTML = 'Greenpoint es una web en la cual ganas puntos por reciclar y puedes canjearlos por premios. <br><br>Proyecto grupal hecho en NoCountry';
  
      document.getElementById('Herramientas').querySelector('h2').textContent = 'Herramientas';
     
      document.getElementById('contact').querySelector('h2').textContent = 'Contáctame';
      document.getElementById('contact').querySelector('p').textContent = 'Si tienes alguna pregunta o quieres ponerte en contacto, por favor completa el formulario a continuación:';
  
      let contactLabels = document.querySelectorAll('#contactForm label');
      contactLabels[0].textContent = 'Nombre:';
      contactLabels[1].textContent = 'Correo electrónico:';
      contactLabels[2].textContent = 'Mensaje:';
  
      document.getElementById('sendButton').textContent = 'Enviar Correo';
  
      document.getElementById('footer').querySelector('p').textContent = '© 2023 Ramiro Elian Ormachea. Todos los derechos reservados.';

      cvLinks.forEach(function (cvLink) {
        cvLink.innerHTML = '<i class="fas fa-file-pdf"></i> Ver CV';
        cvLink.href = 'files/Cv Ormachea Ramiro.pdf';
      });
    }
  
    function setEnglish() {
      headerListItems.forEach(function (item, index) {
        switch (index) {
          case 0:
            item.textContent = 'Home';
            break;
          case 1:
            item.textContent = 'Projects';
            break;
          case 2:
            item.textContent = 'Tools';
            break;
          case 3:
            item.textContent = 'Contact';
            break;
        }
      });

      document.getElementById('main').querySelector('h2').textContent = 'Backend Developer'
  
      document.getElementById('proyectos').querySelector('h2').textContent = 'Proyects';
      document.getElementById('proyectos').querySelector('p').textContent = 'Role: Backend Developer';
      document.getElementById('proyectos').querySelector('p.description').innerHTML = 'Greenpoint is a website where you earn points for recycling, and you can redeem them for prizes. <br><br>Group project made in NoCountry';

      document.getElementById('Herramientas').querySelector('h2').textContent = 'Skills';
   
      document.getElementById('contact').querySelector('h2').textContent = 'Contact Me';
      document.getElementById('contact').querySelector('p').textContent = 'If you have any questions or want to get in touch, please fill out the form below:';
  
      let contactLabels = document.querySelectorAll('#contactForm label');
      contactLabels[0].textContent = 'Name:';
      contactLabels[1].textContent = 'Email:';
      contactLabels[2].textContent = 'Message:';
  
      document.getElementById('sendButton').textContent = 'Send Email';
  
      document.getElementById('footer').querySelector('p').textContent = '© 2023 Ramiro Elian Ormachea. All rights reserved.';

      cvLinks.forEach(function (cvLink) {
        cvLink.innerHTML = '<i class="fas fa-file-pdf"></i> View CV';
        cvLink.href = 'files/Cv - Ramiro Ormachea E.pdf';
      });
    }
  
    languageToggle.addEventListener('change', function () {
      if (languageToggle.checked) {
        setSpanish();
      } else {
        setEnglish();
      }
    });
  
    headerListItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
        let sectionId;
        switch (index) {
          case 0:
            sectionId = 'inicio-container';
            break;
          case 1:
            sectionId = 'proyectos';
            break;
          case 2:
            sectionId = 'Herramientas';
            break;
          case 3:
            sectionId = 'contact';
            break;
          default:
            sectionId = 'inicio-container';
            break;
        }
  
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });