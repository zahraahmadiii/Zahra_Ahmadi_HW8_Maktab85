
    function SetterGenerator(pro){

       this.proUser=pro;

        return function(Name){
            
               user[this.proUser]=Name;
               return user;
            };

        }
const user={};
const nameSetter=SetterGenerator("name");
nameSetter("jack");
console.log(user);


