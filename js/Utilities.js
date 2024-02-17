// Get input data to float data by this function
function inputToString(inputId)
{
const containerInput=document.getElementById(inputId);
const containerInputValue=containerInput.value;
const containerInputValueString=parseFloat(containerInputValue);
 containerInput.value='';
return containerInputValueString;
}
// Set Element By Click function
function setElementByClick(elementId) {
    const setElement = document.getElementById(elementId);
    return setElement;
}
// eventBubble function
function eventBubble(count, AreaOfAllAngle, changingText){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${count}</td>
      <p class='mx-3'>${changingText}</P>
      <td>${AreaOfAllAngle.toFixed(2)}</td>
      <p>cm<sup>2</sup></p>
      <td>
      <button class='btn btn-primary mx-3'>Covert</button>
      </td>
    
    `;
    return tr;
}

