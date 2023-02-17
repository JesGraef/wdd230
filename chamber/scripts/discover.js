//get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
const ImgOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px 0px 0px'
}

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};

//first check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
      }
      });
    }, ImgOptions);
  // Loop through each img on check status and load if necessary
  imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
  });
} 

// Local Storage

const lastVisit = localStorage.getItem("lastVisitDate");
if (!lastVisit) {
  document.querySelector('#visits').textContent = `This is your first visit!`;
  localStorage.setItem("lastVisitDate", new Date());
} else {
  console.log('lastVisit', lastVisit);
  const daysFromLastVisit = Math.round(((new Date()).getTime() - (new Date(lastVisit)).getTime())/84600000);
  document.querySelector('#visits').textContent = `It's been ${daysFromLastVisit} days since your last visit.`;
}
  
