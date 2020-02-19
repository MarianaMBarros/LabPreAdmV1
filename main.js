const userName= prompt ("Bem Vindo(a) a Nossa Prova Online \nPor Favor Digite seu nome:");
    const user = document.getElementById ("user");
    user.innerHTML = " Olá, " + userName.toUpperCase(); 

const  startProof= prompt("Deseja dar Inicio a Prova?\nDigite SIM ou NÃO").toUpperCase()
if (startProof == 'SIM'){
  let questions1= prompt ("1)responda a multiplicação 25 X 5 \n a-50\n b-100\n c-125")
        if (questions1 == "c") {
            const corretas1 = document.getElementById ("corretas1");
            corretas1.innerHTML = " Resposta 1"; 
         }else if (questions1 == "a" || questions1 == "b"){
            const incorretas1 = document.getElementById ("incorretas1");
            incorretas1.innerHTML = " Resposta 1"; 

         }      

  let questions2= prompt ("2)Responda a divisão: 60 / 3 \n a-10\n b-20\n c-30")
        if (questions2 == "b") {
            const corretas2 = document.getElementById ("corretas2");
            corretas2.innerHTML = " Resposta 2"; 
            console.log(corretas2);
            
         }else if (questions2 == "a" || questions2 == "c"){
            const incorretas2 = document.getElementById ("incorretas2");
            incorretas2.innerHTML = " Resposta 2"; 
         }

    let questions3= prompt ("3)responda a Subtração: 100 - 25  \n a-75\n b-10\n c-0")
         if (questions3 == "a") {
             const corretas3 = document.getElementById ("corretas3");
             corretas3.innerHTML = " Resposta 3"; 
          }else if (questions3 == "b" || questions3 == "c"){
            const incorretas3 = document.getElementById ("incorretas3");
             incorretas3.innerHTML = " Resposta 3"; 
          }           

} else if  (startProof == "NÃO"){
    confirm ("Obrigada Por Participar!")
}
