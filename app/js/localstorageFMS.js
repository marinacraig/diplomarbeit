function localstorageSetFMS(allFMS) {

   let selection = [];

   allFMS.forEach((e,i) => {
       selection[i] = e.checked;
   });

   localStorage.setItem('allFMSSelection', JSON.stringify(selection));

}

function getFMSSelection() {
    let response = JSON.parse(localStorage.getItem('allFMSSelection'));
    if(response === null){
        return []
    }else {
        return response
    }
}