

//.................drop down menu.....................

const toggleBtn = document.querySelector(".toggle_btn");
const dropDownMenu = document.querySelector(".dropdown_menu");


toggleBtn.addEventListener('click',()=>{
    // dropDownMenu.style.height = '270px';
    const visibility = dropDownMenu.getAttribute("data-visible");
        // console.log(visibility);
        const expnaded = toggleBtn.getAttribute("aria-expanded");
        console.log(expnaded);


    if (visibility === "false") {
      dropDownMenu.setAttribute('data-visible',true);
      toggleBtn.setAttribute('aria-expanded',true);
      
    }
    else if (visibility === "true"){
      dropDownMenu.setAttribute('data-visible',false);
      toggleBtn.setAttribute('aria-expanded',false);
      
    

    }
});

// class="flex min-[885px]:hidden h-[64px] cursor-pointer" 

//.............scroll-to-top............

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  