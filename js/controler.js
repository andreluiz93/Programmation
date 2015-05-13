var IMCControler = {
    
    init: function(){
        IMCControler.setForm();
    },
    
    setForm: function(){
        
        var form = document.getElementById('frm-imc');
        form.addEventListener('submit', function(event) {
            alert('Sucessful');
            event.preventDefault();
        })
        
    },
    
    calculateIMC: function() {
        
    },
    
    showResult: function() {
        
    }
       
}

//Initialization
IMCControler.init();