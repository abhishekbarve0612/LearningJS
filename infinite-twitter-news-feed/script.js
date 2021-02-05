var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis aut ipsum enim ullam nostrum repellendus neque? Doloribus, possimus nobis? Nisi perspiciatis minima totam eius at id adipisci laborum saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis aut ipsum enim ullam nostrum repellendus neque? Doloribus, possimus nobis? Nisi perspiciatis minima totam eius at id adipisci laborum saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis aut ipsum enim ullam nostrum repellendus neque? Doloribus, possimus nobis? Nisi perspiciatis minima totam eius at id adipisci laborum saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. "

const container = document.querySelector("body");

window.addEventListener('scroll',()=>{
  console.log(window.innerHeight + container.offsetHeight, container.scrollHeight);
  windowHeight = window.innerHeight;
  offset = container.offsetHeight;
  console.log(windowHeight, offset, container.scrollHeight);
	if(window.innerHeight + container.offsetHeight > container.scrollHeight - 5){
		console.log("Reached Bottom");
	}
});

function addData() {
    // var imgset = document.createElement("div");
    // imgset.className = "imgset";
    // for (let index = 0; index < 5; index++) {
    //   var id = Math.floor(Math.random() * (200 - 10) + 10);
    //   var node = document.createElement("img");
    //   node.src = "https://picsum.photos/id/" + id +"/50";
    //   imgset.appendChild(node);
    // }
    container.innerText += str;
    //container.appendChild(imgset);
    
}

