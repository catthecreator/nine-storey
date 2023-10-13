
let btns = document.querySelectorAll("[data-modal-btn]");
let closeModalTriggers = document.querySelectorAll(".closemodal");
    
const modalOverlay = document.querySelector('.modal-overlay ');



  btns.forEach((el) => {
   el.addEventListener('click', (e) => {
     let path = e.currentTarget.getAttribute('data-modal-btn');
     const modals = document.querySelectorAll("[data-modal-window]");
    
  
    modals.forEach((el) => {
        el.classList.remove("modal--visible"); 
        modalOverlay.classList.remove("modal-overlay--visible");
    });

    document.querySelector(`[data-modal-window = "${path}"]`).classList.add("modal--visible");
    modalOverlay.classList.add('modal-overlay--visible');
     
     
   


    if(path ==="home"){
     modalOverlay.classList.remove("modal-overlay--visible");
    }

  });

  
     
   

});

  modalOverlay.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-modal-btn');


    if (e.target == modalOverlay  ) {
       modalOverlay.classList.remove('modal-overlay--visible');
       modals.forEach((el) => {
         el.classList.remove('modal--visible');
      });
     }
  });

closeModalTriggers.forEach(el => {
  addEventListener("click", (e) => {
    if (e.target.classList.contains('closemodal')) {
      el.closest(".modal-overlay").classList.remove('modal-overlay--visible');

    }
  })
});
