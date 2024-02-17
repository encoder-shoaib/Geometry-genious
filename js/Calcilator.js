
let count=0;

// For Triangle button
document.getElementById('Calculation-button').addEventListener('click',function()
{
    count++;
const triangleOfB=inputToString('triangle-b');
const triangleOfH=inputToString('triangle-h');
let  triangleArea;

if (typeof triangleOfB === "number" && !isNaN(triangleOfB) && typeof triangleOfH=== "number" && !isNaN(triangleOfH) ) {
    if(triangleOfB>=0 && triangleOfH>=0)
    {
        triangleArea=  0.5*triangleOfB*triangleOfH;
    }
    else{
        alert('put positive number')
    }
}
else {

    alert('Input Valid Number');
}
const displayContainer = setElementByClick('display-container');
    const showingText = "Triangle";
    const transferText = eventBubble(count, triangleArea, showingText);
    displayContainer.appendChild(transferText );
}

)
// For rectangle button
document.getElementById('Calculation-button-2').addEventListener('click',function()

{
    count++;
const rectangleOfW=inputToString('triangle-w');
const rectangleOfH=inputToString('triangle-i');
let rectangleArea;

if (typeof rectangleOfW === "number" && !isNaN(rectangleOfW) && typeof rectangleOfH=== "number" && !isNaN(rectangleOfH)) {
    if(rectangleOfW>=0 && rectangleOfH>=0)
    {
        rectangleArea= rectangleOfW*rectangleOfH;
    }
    else{
        alert('put positive number')
    }
   
   }
   else {
   
       alert('Input Valid Number');
   }

   const displayContainerForRectangle = setElementByClick('display-container');
    const showingTextForRectangle = "Rectangle";
    const transferTextForRectangle = eventBubble(count, rectangleArea, showingTextForRectangle );
    displayContainerForRectangle.appendChild(transferTextForRectangle );
}

)
// For Parallelogram button
document.getElementById('Calculation-button-3').addEventListener('click',function()

{
    count++;
const ParallelogramB=inputToString('Parallelogram-b');
const ParallelogramH=inputToString('Parallelogram-h');
let ParallelogramArea;
if (typeof ParallelogramB === "number" && !isNaN(ParallelogramB) && typeof ParallelogramH=== "number" && !isNaN(ParallelogramH)) {
    if(ParallelogramB >=0 && ParallelogramH>=0)
    {
        ParallelogramArea= ParallelogramB*ParallelogramH;
    }
    else{
        alert('put positive number')
    }
   
   }
   else {
   
       alert('Input Valid Number');
   }

   const displayContainerForParallelogram = setElementByClick('display-container');
   const showingTextForParallelogram  = "Parallelogram ";
   const transferTextForParallelogram  = eventBubble(count, ParallelogramArea, showingTextForParallelogram  );
   displayContainerForParallelogram .appendChild(transferTextForParallelogram  );
}
)
// For Rhombus button
document.getElementById('Calculation-button-4').addEventListener('click',function()

{
    count++;

const RhombusD1=inputToString('Rhombus-d1');
const RhombusD2=inputToString('Rhombus-d2')
let RhombusArea;
if (typeof RhombusD1 === "number" && !isNaN(RhombusD1) && typeof RhombusD2=== "number" && !isNaN(RhombusD2)) {
    if(RhombusD1 >=0 && RhombusD2>=0)
    {
    RhombusArea= RhombusD1*RhombusD2;
    }
    else{
        alert('put positive number')
    }
   }
   else {
   
       alert('Input Valid Number');
   }

   const displayContainerForRhombus = setElementByClick('display-container');
   const showingTextForRhombus  = "Rhombus ";
   const transferTextForRhombus  = eventBubble(count, RhombusArea, showingTextForRhombus  );
   displayContainerForRhombus .appendChild(transferTextForRhombus  );
}
)
// For Pentagon button
document.getElementById('Calculation-button-5').addEventListener('click',function()

{
    count++;
const PentagonOfP=inputToString('Pentagon-p');
const PentagonOfB=inputToString('Pentagon-b');
let PentagonArea;
if (typeof PentagonOfP === "number" && !isNaN(PentagonOfP) && typeof PentagonOfB=== "number" && !isNaN(PentagonOfB)) {
    if(PentagonOfP >=0 && PentagonOfB>=0)
    {
        PentagonArea= PentagonOfP*PentagonOfB;
    }
    else{
        alert('put positive number')
    }
   }
   else {
   
       alert('Input Valid Number');
   }

   const displayContainerForPentagon = setElementByClick('display-container');
   const showingTextForPentagon  = "Pentagon ";
   const transferTextForPentagon  = eventBubble(count, PentagonArea, showingTextForPentagon  );
   displayContainerForPentagon .appendChild(transferTextForPentagon  );

}

)
// For Ellipse button
document.getElementById('Calculation-button-6').addEventListener('click',function()

{
    count++;

const EllipseOfA=inputToString('Ellipse-a');
const EllipseOfB=inputToString('Ellipse-b');
let EllipseArea;
if (typeof EllipseOfA === "number" && !isNaN(EllipseOfA) && typeof EllipseOfB=== "number" && !isNaN(EllipseOfB)) {
    if(EllipseOfA >=0 && EllipseOfB>=0)
    {
        EllipseArea= EllipseOfA*EllipseOfB;
    }
    else{
        alert('put positive number')
    }
   }
   else {
   
       alert('Input Valid Number');
   }

   const displayContainerForEllipse = setElementByClick('display-container');
   const showingTextForEllipse  = "Ellipse ";
   const transferTextForEllipse  = eventBubble(count, EllipseArea, showingTextForEllipse  );
   displayContainerForEllipse .appendChild(transferTextForEllipse  );
}

)

// Random color function

// Get all the card elements
var cards = document.querySelectorAll('.card');

// Define the function to generate a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Loop through each card element
for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
  }
  card.onmouseout = function() {
    this.style.backgroundColor = "#FFF";
  }
}
