# mccula

test test SayCula la : <!DOCTYPE html>
<html lang="en">
<head>
   
    <style>
       
        label {
            padding: 10px 15px;
            color: white;
            font-family: tahoma;
            font-weight: 100;
            background-color: blue;
        }
        .red {
            background-color: rgb(255, 0, 8) !important;
        }
        #checkboxOne{
            display: none;
        }

    </style>
</head>
<body>
    
    <label for="checkboxOne" id="checkboxlabel">
        <input type="checkbox" id="checkboxOne" accesskey="b">
        MAP 1.15.2 FABRIC
    </label>


    <script>
        const myInput = document.querySelector("#checkboxOne");
        const checkboxlabel = document.querySelector("#checkboxlabel");

        myInput.addEventListener('click', ()=>{   
            checked(myInput.checked,checkboxlabel)
        })
        function checked(input,label){
            input? label.classList.add('red'):
            label.classList.remove('red');

        }
        
    </script>
</body>
</html>
