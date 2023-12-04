
let onethird = document.getElementById('onethird');


let myJSON = {
	"title":["3","4","5","10","He","Me","You","18"],
	"pic":["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"],
	"color":"lightblue",
	"font":"monospace",
	"content":["It’s only me and my older cousin on the house’s balcony. She brings out a mold plate with frozen juice inside. Freshly taken out from the fridge, the orange-juice ice cubes in the mold are bright yellow, I can’t tell if it’s the juice or if it’s the reflection of the moon above. The cubes taste so sweet it reminds me of the dream I had about swimming on top of an ocean of marshmallows. ","You are surrounded by others your age who you don’t know and don’t care about. You are more curious about the world rather than its people. You love standing on the balcony, watching the stream of cars honking beneath you. You love reading books, though not by their content which is too hard for you to understand, but their colorful illustrations on the covers. You love to lie on the grass under the dam, watching the stars and letting the cold take you, little by little, little by little. You love counting the drops from the infusion pump above your arm, one by one, one by one, one by one… But, you don’t like it when your parents cry outside your door as they can’t gather enough money to pay for your medical bills and they thought they’d lose you. You discovered ever since that you don’t like crying, from you, or others.","There is a game: the adults will present their children with a list of items and see which one the children would grasp first. A toy, a pen, a glass, some cash, and a shiny medal; Each symbolizes the future of the children: a playboy, a writer, a business owner, or an athlete. So that day he reaches his tiny palm, holds it up above all items, points towards the ceiling, upward onto the grand blue sky above. He laughs as the adults frown. I can’t remember when we’ve met, but you and he have been my best friends. The kind that would make one’s life incomplete if separated.","My weekends are very free. I don’t have many things to do so I like to go to his place in the morning after I finish my homework. He looks so busy all the time though. Every time I went there he is either practicing his saxophone or is away in some institution learning robotics, or chess, or dance, or taekwondo, or drawing. I like to wave outside the classroom’s window and he would glance at me, smiling. I would sit on the institution’s hall watching the sun going from above me to the side of me as it tenderly changes its color from scorching white to red-orange. Sometimes I fall asleep and he’d whisper in my ears to wake me. I never seem to play with him but it’s okay, we are best friends.(You, on the same Saturday, lay on your bed until some friends call you to hang out. You flew all the way to the end of the milky way and spotted us in an institution. As the sun goes red-orange on Earth, you return home exhausted, but happy.)","He exceeds in every aspect he is expected to. He has excellent grades, he knows every piece of the knowledge on the textbook just like how he knows every teacher in the office. He plays every sport. He is always surrounded by other people. He hosts and goes to every event. He never lets any opportunity slips away. He is polite, quiet, and obedient.","I start to play video games, I love so much the worlds they create I spend hours and hours into it. Inspired by one game, I even create a band dedicated to play its music. I enjoy what I do, I’m creative, passionate, and humorous.","You worry about your grades so you study till 2 a.m. every night. You had to go to all kinds of activities you don’t even enjoy for your profile. You barely open your heart to anyone. You don’t have the energy or the trust to socialize. You hate him. You say he is favorable, hidden beneath a mask, looking invincible, but fake. Sometimes you get anxious you scratch your head and leave red marks. They are so indistinct beneath your hair no one ever noticed. You are distant, moody, and alone.","I love to go to the mountains. I would jump off the wooden trail that leads to the toy, the pen, the glass, the cash, or the medal. I would walk on the dirt, sit on the stone, lie on the grass. Only here, I don’t have to get anywhere, I don’t have to be someone. Only then the soothing tranquility could make me forget about you and him."]
	
};




function createElementProper(incomingJSON,numbCount){


	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor=incomingJSON['color'];
	newContentElement.style.fontFamily=incomingJSON['font']
	newContentElement.classList.add('contentItem');

	let newContentHeading = document.createElement("H3");
	newContentHeading.classList.add('contentTitle');
	newContentHeading.innerText=incomingJSON['title'][numbCount];
	newContentElement.appendChild(newContentHeading)


	var contentString = incomingJSON['content'][numbCount];
	let message = document.createElement("p");
	message.classList.add('content');
	message.innerText=contentString
	newContentElement.appendChild(message);


	let newImage=document.createElement("IMG");
	newImage.classList.add("footerImage");
	newImage.src=incomingJSON['pic'][numbCount];
	newContentElement.appendChild(newImage);

	onethird.appendChild(newContentElement);

};

for (var i=0; i<myJSON['content'].length; i++){
	createElementProper(myJSON,i)

}


