function open(url)
{
  //browser.tabs.getCurrent().then(onget);?
  browser.tabs.create({url:url});
}

document.addEventListener("click",(e)=>{
if(e.target.id==="a"){
	open("http://www.facebook.com");
} else if(e.target.id==="b"){
open("http://www.linkedin.com");
} else if(e.target.id==="c"){
	open("https://www.github.com");
} else if(e.target.id==="d"){
	open("http://www.internshala.com");
}
else if(e.target.id==="g"){
	open("https://web.whatsapp.com/");
}
else if(e.target.id==="f"){
	open("http://www.gmail.com");
}

});
