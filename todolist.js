 //selecteurs
 var addToDoButton = document.getElementById('addToDo');
 var toDoContainer= document.getElementById('toDoContainer');
 var inputField = document.getElementById('inputField');

 addToDoButton.onclick   = function() {  
    //vérifier si l'input n'est pas vide 
    if (inputField.value!= ""){
        //si l'input n'est pas vide, créer un paragraph
        var paragraph = document.createElement('p')
    }
    //valorisé le paragraph.innerText avec le contenu de l'input
    paragraph.innerText = inputField.value;

    //stylisé le paragraph 
    paragraph.classList.add('paragraph_style');

    //insérer le paragraph dans l'élémént toDoContainer
    toDoContainer.appendChild(paragraph);

    //vidé l'input quand le paragraph est ajouté
    inputField.value = "";

    //barré le paragraphe quand on clique dessus
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click');
    })

    //supprimer la tâche quand pn double click sur la tâche
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

 }
