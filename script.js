document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        greetingElement.textContent = "Good Morning!";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon!";
    } else {
        greetingElement.textContent = "Good Evening!";
    }
    
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent!");
        this.reset(); 
    });
    
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        toggle.querySelector('i').classList.toggle('bx-sun');
        toggle.querySelector('i').classList.toggle('bx-moon');
    });

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.querySelector('i').classList.add('bx-sun');
        toggle.querySelector('i').classList.remove('bx-moon');
    }

    toggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    document.getElementById('download').addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const link = document.createElement('a');
        link.href = 'portfolio.pdf'; 
        link.download = 'My_Portfolio.pdf'; 
       
        fetch(link.href, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    link.click(); 
                } else {
                    alert('Portfolio file not found!'); 
                }
            })
            .catch(error => {
                alert('An error occurred while trying to download the file.');
                console.error('Download error:', error);
            });
    });
});


function openPopup(projectName) {
    document.getElementById('popup-modal').style.display = 'flex';
    document.getElementById('popup-text').textContent = projectName;
}

function closePopup() {
    document.getElementById('popup-modal').style.display = 'none';
}













    

    

   
