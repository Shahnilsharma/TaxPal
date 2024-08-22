//when clicked on bars
const navptions=document.querySelector('.navOptions')

const menuBar=document.querySelector('#menuBar')

navptions.addEventListener('click',(e)=>{
    navptions.style.display = "none";
    menuBar.innerHTML=`
        <div class="bg-[#dbd7d781] fixed top-0 left-0 w-screen h-screen"></div>
            <div class="bg-white  text-2xl font-sans  p-10 my-10 space-y-5 rounded-md w-80 h-60  absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 id="cutOption" class=" cursor-pointer text-2xl text-right md:hidden ">X</h1>
                <ul class="mx-auto px-6 ">
                    <li class="block w-200 h-100"><a href="#">Features</a></li>
                <li class="block w-200 h-100"><a href="#">Testimonial</a ></li>
                <li class="block w-200 h-100"> <a href="#">Prices</a ></li>
                 <hr class=" ">
                 <li><a href="#"> Sign In</a></li>
                </ul>
            </div>
        </div>`;
   
        const cutOption=document.querySelector('#cutOption');
cutOption.addEventListener('click',()=>{
    menuBar.innerHTML = '';
    navptions.style.display = "block";

})
})


// for the second page 
let options = document.querySelector(".options");
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let option4 = document.querySelector('.option4');
let optionText = document.querySelector('#optionText');
// default value 
option1.className = " option1  bg-white text-blue-700 rounded-full h-10 justify-center w-32 py-2 items-center pt-2"
optionText.textContent=`Keep track of everyone's salaries and whether or not they've been paid. Direct
deposit not supported.`

options.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('option1')) {
        option2.className = "option2"
        option3.className = "option3"
        option4.className = "option4"
        
        option1.className = "bg-white text-blue-700 w-32 py-2 rounded-full h-10 justify-center items-center pt-2";
        
        optionText.textContent=`Keep track of everyone's salaries and whether or not they've been paid. Direct
        deposit not supported.`
    }
    else if (e.target.classList.contains('option2')) {
        option1.className = "option1"
        option3.className = "option3"
        option4.className = "option4"

        option2.className = "bg-white text-blue-700 w-32 py-2 rounded-full h-10 justify-center items-center pt-2";

        optionText.textContent=`All of your receipts organized into one place, as long as you don't mind typing in the
data by hand.`
    }
    else if (e.target.classList.contains('option3')) {
        option1.className = "option1"
        option2.className = "option2"
        option4.className = "option4"

        option3.className = "bg-white text-blue-700  w-32 py-2 rounded-full h-10 justify-center items-center pt-2";

        optionText.textContent=`We only sell our software to companies who don't deal with VAT at all, so technically
we do all the VAT stuff they need.`
    }
    else if (e.target.classList.contains('option4')) {
        option1.className = "option1"
        option2.className = "option2"
        option3.className = "option3"

        option4.className = "bg-white text-blue-700 rounded-full h-10 justify-center w-32 py-2 items-center pt-2";

        optionText.textContent=`Easily export your data into an Excel spreadsheet where you can do whatever the
hell you want with it.`
    }

    // e.target.className = "bg-white text-blue-700 rounded-full h-10 justify-center items-center pt-2";
});