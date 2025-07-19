var ul = document.getElementById("ul1")
      var input = document.getElementById("in")
      var button = document.getAnimations("btn")
      function del(){
          event.target.parentElement.remove()
      }
      function add(){
        var list = document.createElement("li")
        list.innerHTML = input.value + " " + "<button onclick='del()' id='btn'>delete</button>"
        ul.append(list)
        
      }
      
