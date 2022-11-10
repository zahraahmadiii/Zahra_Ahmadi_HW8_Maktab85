const callback = function(elem) {
    elem.style.backgroundColor = "red";
    }

    function elemCreator(element,callback){
       const el= document.createElement(element)
       console.log(element);
       el.innerHTML = 'JavaScript';
       document.body.appendChild(el);
       callback(el);
    }
    elemCreator("span", callback);