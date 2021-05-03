

/*
const form = document.getElementById('form');
const username = document.getElementById('username');

const comment = document.getElementById('comment');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        //ass success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    
    if (commentValue === '') {
        setErrorFor(comment, 'Comment cannot be blank');
    } else {
        setSuccessFor(comment);
    }

    //show a success message
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control mb-5 pb-4 border border-white error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control mb-5 pb-4 border border-white success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
*/

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

    
}


class MessageBox {
    constructor(id, option) {
      this.id = id;
      this.option = option;
    }
    
    show(msg, label = "CLOSE", callback = null) {
      if (this.id === null || typeof this.id === "undefined") {
        // if the ID is not set or if the ID is undefined
        
        throw "Please set the 'ID' of the message box container.";
      }
      
      if (msg === "" || typeof msg === "undefined" || msg === null) {
        // If the 'msg' parameter is not set, throw an error
        
        throw "The 'msg' parameter is empty.";
      }
      
      if (typeof label === "undefined" || label === null) {
        // Of the label is undefined, or if it is null
        
        label = "X";
      }
      
      let option = this.option;
  
      let msgboxArea = document.querySelector(this.id);
      let msgboxBox = document.createElement("DIV");
      let msgboxContent = document.createElement("DIV");
      let msgboxClose = document.createElement("A");
      
      if (msgboxArea === null) {
        // If there is no Message Box container found.
        
        throw "The Message Box container is not found.";
      }
  
      // Content area of the message box
      msgboxContent.classList.add("msgbox-content");
      msgboxContent.innerText = msg;
      
      // Close burtton of the message box
      msgboxClose.classList.add("msgbox-close");
      msgboxClose.setAttribute("href", "#");
      msgboxClose.innerText = label;
      
      // Container of the Message Box element
      msgboxBox.classList.add("msgbox-box");
      msgboxBox.appendChild(msgboxContent);
  
      if (option.hideCloseButton === false
          || typeof option.hideCloseButton === "undefined") {
        // If the hideCloseButton flag is false, or if it is undefined
        
        // Append the close button to the container
        msgboxBox.appendChild(msgboxClose);
      }
  
      msgboxArea.appendChild(msgboxBox);
  
      msgboxClose.addEventListener("click", (evt) => {
        evt.preventDefault();
        
        if (msgboxBox.classList.contains("msgbox-box-hide")) {
          // If the message box already have 'msgbox-box-hide' class
          // This is to avoid the appearance of exception if the close
          // button is clicked multiple times or clicked while hiding.
          
          return;
        }
  
        this.hide(msgboxBox, callback);
      });
  
      if (option.closeTime > 0) {
        this.msgboxTimeout = setTimeout(() => {
          this.hide(msgboxBox, callback);
        }, option.closeTime);
      }
    }
    
    hide(msgboxBox, callback) {
      if (msgboxBox !== null) {
        // If the Message Box is not yet closed
  
        msgboxBox.classList.add("msgbox-box-hide");
      }
      
      msgboxBox.addEventListener("transitionend", () => {
        if (msgboxBox !== null) {
          // If the Message Box is not yet closed
  
          msgboxBox.parentNode.removeChild(msgboxBox);
  
          clearTimeout(this.msgboxTimeout);
          
          if (callback !== null) {
            // If the callback parameter is not null
            callback();
          }
        }
      });
    }
  }
  
  let msgboxShowMessage = document.querySelector("#msgboxShowMessage");
  let msgboxShowEmail = document.querySelector("#msgboxShowEmail");
  
  // Creation of Message Box class, and the sample usage
  let msgboxbox = new MessageBox("#msgbox-area", {
    closeTime: 7000,
    hideCloseButton: false
  });
  let msgboxboxPersistent = new MessageBox("#msgbox-area", {
    closeTime: 0
  });
  let msgboxNoClose = new MessageBox("#msgbox-area", {
    closeTime: 5000,
    hideCloseButton: true
  });
  
  msgboxShowMessage.addEventListener("click", function() {
    msgboxbox.show("090681750432", null);
  });

  msgboxShowEmail.addEventListener("click", function() {
    msgboxbox.show("owlhpm@gmail.com", null);
  });
  
  
  
