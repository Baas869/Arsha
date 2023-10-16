const hambuger = document.querySelector('.hambuger-tab');
const mobileNav = document.querySelector('.mobile-nav--bar');
const ulLis = document.querySelector('.drop-lists');
const body = document.querySelector('body')

openHambuger();
navItems();

function openHambuger(){
    hambuger.addEventListener('click', function(){
        mobileNav.style.display = 'block';
        setTimeout(function(){
            mobileNav.style.opacity = '1';
        }, 1000);
    })
    mobileNav.addEventListener('mousedown', function(){
        mobileNav.style.opacity = '0';
        setTimeout(function(){
            mobileNav.style.display = 'none';
        }, 2000);
    })
};


function navItems(){
    ulLis.addEventListener('mouseover', liHover);

    function liHover(e){
        document.querySelector('.drop-lists--items').classList.add('open');
        setTimeout(function(){
            document.querySelector('.drop-lists--items').style.opacity = '1';
        }, 4000)
        
    };

    ulLis.addEventListener('mouseleave', offLiHover);

    function offLiHover(o){
        document.querySelector('.drop-lists--items').style.opacity = '0';
        setTimeout(function(){
        document.querySelector('.drop-lists--items').classList.remove('open');
        }, 500)
    }
};

deepDropList();

function deepDropList(){
    document.querySelector('.deep-drop-lists').addEventListener('mouseover', (deepListOpen) =>{
    document.querySelector('.deep-drop--down__lists').style.display = 'block';
        setTimeout(function(){
                document.querySelector('.deep-drop--down__lists').style.opacity = '1';
            }, 200)
    })

    document.querySelector('.deep-drop-lists').addEventListener('mouseleave', (deepListOpen) =>{
        document.querySelector('.deep-drop--down__lists').style.opacity = '0';
        // document.querySelector('.deep-drop--down__lists').classList.add('slide-out');
        setTimeout(function(){
        document.querySelector('.deep-drop--down__lists').style.display = 'none';
        }, 500)
    })
}



//CONTACT MESSAGE STORAGE
const form = document.querySelector('.email-form');

form.addEventListener('submit', function(s){
document.querySelector('.loading').style.opacity = 1;

    setTimeout(function(){
        sendMessageToLs();
    }, 3000);
    
    s.preventDefault();
});


function sendMessageToLs(s){
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('.form-control').textContent;
    
    document.querySelector('.loading').style.opacity = 0;
    if(name === '' || email === '' || subject === ''){
      let errorMessage =  document.querySelector('.error-message').style.opacity = 1;
    }else{
       let sentMessage = document.querySelector('.sent-message').style.opacity = 1;
    }
    removeMessage();
    storeNameToLs(name, email, subject);
    console.log(name, email, subject, message)

}
function storeNameToLs(name, email, subject){
    let names; 
    if(localStorage.getItem('Names') === null){
        names = [];
    } else{
        names = JSON.parse(localStorage.getItem('Names'))
    }

    names.push(name, email, subject);
    localStorage.setItem('Names', JSON.stringify(names));
}
function removeMessage(){
    setTimeout(function(){
        document.querySelector('.sent-message').style.opacity = 0;
        document.querySelector('.error-message').style.opacity = 0;
    },2000)
}
localStorage.clear();


const subscribeBtn = document.querySelector('.subscribe');

subscribeBtn.addEventListener('submit', bsSubscribe);

function bsSubscribe(b){

    b.preventDefault();
}

// ALL SLIDE UP ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-slide--up')
        }
    });
});

const zoomingElement = document.querySelectorAll('.animi-slide-up');
zoomingElement.forEach((el) => observer.observe(el));



// ALL ZOOM ANIMATION

const zoomIn = document.querySelectorAll('.animi-zoom-in')


const zoomOptions = {
    rootMargin: '-0px -0px -120px -0px'
};
const zoomObserver = new IntersectionObserver(function(entries, zoomObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-zoom-in')
        }
    });
},zoomOptions)

zoomIn.forEach(zoom =>{
    zoomObserver.observe(zoom);
})



// HEADER ANIMATION
const header = document.querySelector('header');
const sectionOne = document.querySelector('.img-observe');

const sectionOneOptions = {
        rootMargin: '-65% 0% 0% -0%'
}
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        console.log(entry.target)
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
           
        }
        else{
            header.classList.remove('nav-scrolled');
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne);


//observe backTo top
const toTopBtn = document.querySelector('.back-to-top');
const toTopObserve = document.querySelector('.img-observe')
const backToTopOptions = {
        rootMargin: '-70% -0% -0% -0%', 
};
const toTopObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            toTopBtn.style.display = 'block';
            setTimeout(function(){
                 toTopBtn.style.opacity = '1';
            },200)
           
        }
        else{
            toTopBtn.style.opacity = '0';
            setTimeout(function(){
                toTopBtn.style.display = 'none';
           },200)
        }
    })
}, backToTopOptions)
toTopObserver.observe(toTopObserve);

// PROFESS BAR ANIMATION
 const progressAnimi = document.querySelectorAll('.progress-animi');

 const progressOptions = {
    rootMargin: '-0px -0px -100px -0px'
 };

 const progressObserver = new IntersectionObserver(function(entries, progressObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-progress-animi');
        }
    });
 }, progressOptions)
progressAnimi.forEach(animis =>{
    progressObserver.observe(animis)
});


const collapses = document.querySelectorAll('.input');

collapses.forEach((collapse) => {
    // console.log(collapse);

    collapse.addEventListener('change', (e)=>{
        const targetInput = e.target.checked;
        console.log(targetInput);
        // if(targetInput){
        //     console.log('open');
        // }
        if(!targetInput){
            console.log('close');
        }
    })
})

// collapse.forEach(function(collape){
//     collape.addEventListener('change', function(e){
//         if(e.target.checked){
//             console.log(e.target)
//             e.target.parentElement.children[0].children[1].children[1].classList.add('icon-open');
//             e.target.parentElement.children[0].children[1].children[0].classList.add('icon-close');
            
//             console.log(e.target.parentElement.parentElement.children);            
           
//         } 
//         else{
//             e.target.parentElement.children[0].children[1].children[1].classList.add('icon-close');
//         }
//     })
// })

// collapse.addEventListener


// const collapse = document.querySelector('.content-items').addEventListener('click', listCollapse);
// function listCollapse(l){
//     if(l.target.parentElement.classList.contains('collapse-items')){
//         l.target.nextElementSibling.classList.toggle ('active');
//         // l.target.nextElementSibling.style.opacity = '1';
//         // l.target.nextElementSibling.classList.toggle('open');
//         // l.target.children[2].classList.toggle('icon-open');
//         // l.target.children[1].classList.toggle('icon-close');
//     }
// };
