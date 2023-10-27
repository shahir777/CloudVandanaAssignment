            

            document.getElementById("survey-form").addEventListener("submit", function (event) {
                const phoneInput = document.getElementById("phone");
                const phoneValue = phoneInput.value;
            
                if (phoneValue.length !== 10 || !/^\d{10}$/.test(phoneValue)) {
                alert("Phone number must be 10 digits.");
                event.preventDefault(); 
                }
            });
            
            
            const dateInput = document.getElementById('date');
            
            
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); 
            const yyyy = today.getFullYear();
            const maxDate = yyyy + '-' + mm + '-' + dd;
            
            
            dateInput.setAttribute('max', maxDate);
            
            document.getElementById("survey-form").addEventListener("submit", function (event) {
                var checkboxes = document.querySelectorAll('input[type="checkbox"]');
                var checked = false;
            
                for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    checked = true;
                    break;
                }
                }
            
                if (!checked) {
                alert("Please select gender.");
                event.preventDefault(); 
                }
            });
            
           
            function openPopup() {
                const form = document.getElementById("survey-form");
                const popup = document.getElementById("popup");
                const selectedValues = document.getElementById("selected-values");
            
                
                selectedValues.innerHTML = '';
            
                
                const elements = form.elements;
                for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'date' || element.type === 'number')) {
                    selectedValues.innerHTML += `<p>${element.previousElementSibling.innerText}: ${element.value}</p>`;
                }
                if (element.tagName === 'SELECT') {
                    const selectedOption = element.options[element.selectedIndex];
                    selectedValues.innerHTML += `<p>${element.previousElementSibling.innerText}: ${selectedOption.innerText}</p>`;
                }
                if (element.tagName === 'INPUT' && element.type === 'checkbox' && element.checked) {
                    selectedValues.innerHTML += `<p>Gender: ${element.value}</p>`;
                }
                }
        
                
                popup.style.display = "block";
            }
            
            
            function closePopup() {
                const popup = document.getElementById("popup");
                const form = document.getElementById("survey-form");
            
               
                popup.style.display = "none";
            
                
                const elements = form.elements;
                for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
            
                if (element.type === "text" || element.type === "email" || element.tagName === "SELECT" || element.type === "date" || element.type === "number") {
                    element.value = "";
                }
                if (element.type === "checkbox") {
                    element.checked = false;
                }
                }
            }
            
            
            document.getElementById("survey-form").addEventListener("submit", function (event) {
                event.preventDefault(); 
                openPopup(); 
            });
            