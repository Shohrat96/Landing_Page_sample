//getting tabs and tab-titles as an array
let tabs=document.querySelectorAll('.services-content-text-wrapper');
let tabsArray=Array.from(tabs);
let tabTitles=document.querySelectorAll('.services-nav-item');
let tabTitlesArray=Array.from(tabTitles);

//defining toggler function to execute display:on/off for tabs
function tabToggler(item){
    let className=item.id.toLowerCase();
    if (!(item.classList.contains('services-nav-item-active'))){
        if (document.querySelector(`.services-${className}`)){
            document.querySelector(`.services-${className}`).style.display='none';
        }
    }else if (item.classList.contains('services-nav-item-active')){
        if (document.querySelector(`.services-${className}`)){
            document.querySelector(`.services-${className}`).style.display='';
        }
    }
}
//event handler for click on tab-titles
tabTitlesArray.forEach(item=>{
    tabToggler(item);
    item.addEventListener('click', (e)=>{
        let curActive=document.querySelector('.services-nav-item-active');
        curActive.classList.remove('services-nav-item-active');
        tabToggler(curActive);
        item.classList.toggle('services-nav-item-active');
        tabToggler(item);
    })
});

//gallery section
function GalleryItem(imgSrc,category){
    this.class='galleryItem';
    this.width='calc(100% / 4)';
    this.src=imgSrc;
    this.category=category;
    this.rootSrc='./img/';
}
GalleryItem.prototype.createElement=function(){
    let galleryContainer=document.querySelector('.amazing-work-gallery');
    let imgContainer=document.createElement('div');
    imgContainer.classList.add(this.class);
    imgContainer.style.display='inline-block';
    let imgEl=document.createElement('img');
    imgEl.src=this.rootSrc+this.src;
    imgEl.setAttribute('data-categoryname',`${this.category}`);
    let hoverEl=document.querySelector('.item-hover-element');

    imgContainer.append(imgEl);
    galleryContainer.append(imgContainer);
};




//creating 12 galleryItems
let galleryItems=[
    new GalleryItem('graphic design/graphic-design1.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design2.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design3.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design4.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design5.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design6.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design7.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design8.jpg','graphicDesign'),
    new GalleryItem('graphic design/graphic-design9.jpg','graphicDesign'),
    new GalleryItem('wordpress/wordpress1.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress2.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress3.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress4.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress5.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress6.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress7.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress8.jpg','wordpress'),
    new GalleryItem('wordpress/wordpress9.jpg','wordpress'),
    new GalleryItem('web design/web-design1.jpg','webDesign'),
    new GalleryItem('web design/web-design2.jpg','webDesign'),
    new GalleryItem('web design/web-design3.jpg','webDesign'),
    new GalleryItem('web design/web-design4.jpg','webDesign'),
    new GalleryItem('web design/web-design5.jpg','webDesign'),
    new GalleryItem('web design/web-design6.jpg','webDesign'),
    new GalleryItem('web design/web-design7.jpg','webDesign'),
    new GalleryItem('landing page/landing-page1.jpg','landingPage'),
    new GalleryItem('landing page/landing-page2.jpg','landingPage'),
    new GalleryItem('landing page/landing-page3.jpg','landingPage'),
    new GalleryItem('landing page/landing-page4.jpg','landingPage'),
    new GalleryItem('landing page/landing-page5.jpg','landingPage'),
    new GalleryItem('landing page/landing-page6.jpg','landingPage'),
    new GalleryItem('landing page/landing-page7.jpg','landingPage'),

];
//end of items



const imagePlace=document.querySelector('.amazing-work-gallery');



//getting amazing work nav items
let navItems = Array.from(document.querySelectorAll('.amazing-work-nav-item'));
let targetEl='';
navItems.forEach(item => {
    item.addEventListener('click', e => {
        targetEl = e.target;

        document.querySelector('.amazing-work-gallery').innerHTML='';
        render(targetEl);
        //on/of active class
        if (document.querySelector('.amazing-work-nav-item-active')){
            let prev=document.querySelector('.amazing-work-nav-item-active');
            prev.classList.remove('amazing-work-nav-item-active');
            item.classList.add('amazing-work-nav-item-active');
        }
        toggler();
    })
});


//initial state

for (let i=0;i<12;i++){
    galleryItems[i].createElement();
}
//after click- state
let btnClickCount=0;
function render(el) {
    let category=el.dataset.categoryname.toLowerCase();
    if (category!=='all'){
        galleryItems.filter(item=>{
            let itemCategory=item.category.toLowerCase();
            if (itemCategory===category){
                item.createElement()
            }
        })
    }
    else {
        if (btnClickCount===0){
            for (let i=0;i<12;i++){
                galleryItems[i].createElement();
            }

        }else if (btnClickCount===1){
            for (let i=0;i<24;i++){
                galleryItems[i].createElement();
            }
        }else if (btnClickCount===2){
            for (let i=0;i<32;i++){
                galleryItems[i].createElement();
                
            }
        }

    }
}
//load more button
let btnMore=document.querySelector('.load-more');
//let btnClickCount=0;
btnMore.addEventListener('click',e=>{
    document.querySelector('.container-loader').style.display='flex';
    setTimeout(()=>{
        document.querySelector('.container-loader').style.display='none';
        if (btnClickCount===0){
            for (let i=12;i<24;i++){
                galleryItems[i].createElement();
            }
            toggler();
        }else if (btnClickCount===1){
            for (let i=24;i<32;i++){
                galleryItems[i].createElement();
            }
            btnMore.parentElement.removeChild(btnMore);
            toggler();
        }

        btnClickCount++;
    },3000);

});

let currentGalleryItems=Array.from(document.querySelectorAll('.galleryItem'));
/*currentGalleryItems.forEach(item=>{
    let itemContent=item.innerHTML;
    item.addEventListener('mouseover',e=>{
        item.style.border='1px solid red';
        console.log(itemContent);
                item.innerHTML=`<div class="item-hover-element">
                        <div class="item-hover-element-icons">
                            <div class="item-hover-left-icon">
                                <img src="./img/galleryItem-after.png" alt="hover-element">
                            </div>
                            <div class="item-hover-right-icon">
                                <img src="./img/hover-element-magnifier.png" alt="hover-element-magnifier">
                            </div>
                        </div>
                        <h3 class="item-hover-title">
                            CREATIVE DESIGN
                        </h3>
                        <p class="item-category">Web Design</p>
                    </div>`
    });
    item.addEventListener('mouseout',e=>{
        item.style.border='none';
        item.innerHTML=itemContent;
        console.log(itemContent);
    })
});*/

function toggler () {

    let galleryItemsShown = Array.from(document.querySelectorAll('.galleryItem'));
    let el = '';
    galleryItemsShown.forEach(item => {
        let originContent = item.innerHTML;
        //console.log(originContent);

        item.addEventListener('mouseenter', function (e) {
            //console.log('after mouseenter',e.target);
            el = e.target;
            let hoverEl = document.createElement('div');
            hoverEl.classList.add('item-hover-element');
            hoverEl.innerHTML = `<div class="item-hover-element-icons">
                            <div class="item-hover-left-icon">
                                <img src="./img/galleryItem-after.png" alt="hover-element">
                            </div>
                            <div class="item-hover-right-icon">
                                <img src="./img/hover-element-magnifier.png" alt="hover-element-magnifier">
                            </div>
                        </div>
                        <h3 class="item-hover-title">
                            CREATIVE DESIGN
                        </h3>
                        <p class="item-category">Web Design</p>
                    `;
            hoverEl.style.display = 'flex';
            this.appendChild(hoverEl);
            //console.log('after appendchild of hover: ',this);
        });
        //item.removeAttribute("onmouseenter");
        item.addEventListener('mouseleave', function (e) {
            if (e.target.classList.contains('galleryItem')) {
                console.log('classList contains work');
                item.innerHTML = originContent;
            }
        })
    });
}
toggler();



