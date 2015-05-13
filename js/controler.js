var IMCControler = {
    
    init: function(){
        IMCControler.setForm();
    },
    
    setForm: function(){
        
        var form = document.getElementById('frm-imc');
        form.addEventListener('submit', function(event) {
            
            IMCControler.calculateIMC();
            
            event.preventDefault();
        })
        
    },
    
    calculateIMC: function() {
        
        var heightInput = document.getElementById('height')
        var weightInput = document.getElementById('weight')
        
        var height = parseFloat(heightInput.value);
        var weight = parseFloat(weightInput.value);
        
        var result = 0;
        
        if(height && weight){
            result = IMCService.calculate(height, weight);
            IMCControler.showResult(result);
            
        }
            
    },

    
    showResult: function(result) {
        
        var span = document.getElementById('result');
        span.innerHTML = result.toFixed(2);
        
    }
       
}

//Initialization
IMCControler.init();