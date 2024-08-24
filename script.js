document.getElementById('divProject1').addEventListener('click', function() {
    window.open('https://github.com/FernandoZMaciel/task-tracker'); 
});

function toggleLanguage() {
    // Obtém o idioma atual
    let currentLanguage = localStorage.getItem('language') || 'pt'; // 'pt' por padrão
    toggleVisibility();
    // Alterna entre português e inglês
    let newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    
    // Atualiza o localStorage
    localStorage.setItem('language', newLanguage);
    
    // Atualiza o texto dos elementos
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${newLanguage}`);
    });
    
    // Atualiza o conteúdo dos elementos que têm HTML
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerHTML = element.getAttribute(`data-${newLanguage}`);
    });
    setPlaceholder();
}

// Inicializa o idioma ao carregar a página
document.addEventListener('DOMContentLoaded', () => {    
    let savedLanguage = localStorage.getItem('language') || 'pt';
    const ptElement = document.querySelector('.text-animation-pt');
    const enElement = document.querySelector('.text-animation-en');
    if (savedLanguage == 'pt'){
        enElement.classList.add('hidden');
    } else {
        ptElement.classList.add('hidden');
        var switchElement = document.getElementById('togBtn');
        switchElement.checked = true;
    }

    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${savedLanguage}`);
    });
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerHTML = element.getAttribute(`data-${savedLanguage}`);
    });
    setPlaceholder();
});


function toggleVisibility() {
    // Seleciona os dois elementos h3
    const ptElement = document.querySelector('.text-animation-pt');
    const enElement = document.querySelector('.text-animation-en');
  
    // Verifica a visibilidade atual e alterna
    if (ptElement.classList.contains('hidden')) {
      ptElement.classList.remove('hidden');
      enElement.classList.add('hidden');
    } else {
      ptElement.classList.add('hidden');
      enElement.classList.remove('hidden');
    }
  }

  function setPlaceholder() {
    // Obtém o texto do elemento h1
    const h1_full_name = document.getElementById('h1_full_name').innerText;
    const h1_contact_number = document.getElementById('h1_contact_number').innerText;
    const h1_subject = document.getElementById('h1_subject').innerText;
    const h1_message = document.getElementById('h1_message').innerText;
  
    // Define o texto como o placeholder do input
    const inputField1 = document.getElementById('user_name');
    inputField1.placeholder = h1_full_name;
    const inputField2 = document.getElementById('contact_number');
    inputField2.placeholder = h1_contact_number;
    const inputField3 = document.getElementById('subject');
    inputField3.placeholder = h1_subject;
    const inputField4 = document.getElementById('message');
    inputField4.placeholder = h1_message;



  }