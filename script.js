
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
// Tete
ctx.beginPath();
ctx.fillStyle="#9c7000";
ctx.globalCompositeOperation="destination-over";
ctx.arc(200, 75, 50, 0, Math.PI * 2);
ctx.fill();
// yeux
ctx.beginPath();
ctx.fillStyle="white";
ctx.globalCompositeOperation="source-over";
ctx.arc(180, 60, 5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="white";
ctx.globalCompositeOperation="source-over";
ctx.arc(220, 60, 5, 0, Math.PI * 2);
ctx.fill();
//sourcils
ctx.beginPath();
ctx.moveTo(175, 50)
ctx.strokeStyle="white";
ctx.globalCompositeOperation="source-over";
ctx.quadraticCurveTo(180, 45, 185, 50);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(215, 50)
ctx.strokeStyle="white";
ctx.globalCompositeOperation="source-over";
ctx.quadraticCurveTo(220, 45, 225, 50);
ctx.stroke();
// bouche
ctx.beginPath();
ctx.moveTo(175, 90);
ctx.strokeStyle="red";
ctx.globalCompositeOperation="source-over";
ctx.bezierCurveTo(180, 110, 230, 100, 225, 90);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(175, 90);
ctx.strokeStyle="red";
ctx.globalCompositeOperation="source-over";
ctx.bezierCurveTo(180, 90, 190, 100, 225, 90);
ctx.stroke();
// corps
ctx.beginPath();
ctx.fillStyle="#9c7000";
ctx.fillRect(150, 110, 100, 180);
ctx.fill();
// bouton
ctx.beginPath();
ctx.fillStyle="purple";
ctx.arc(200, 150, 10, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="purple";
ctx.arc(200, 200, 10, 0, Math.PI * 2);
ctx.fill();
//bras
ctx.beginPath();
ctx.fillStyle="#9c7000";
ctx.fillRect(50, 110, 100, 35);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="#9c7000";
ctx.fillRect(250, 110, 100, 35);
ctx.fill();
//mains
ctx.beginPath();
ctx.moveTo(350, 110);
ctx.strokeStyle="#9c7000";
ctx.quadraticCurveTo(380, 127.5, 350, 145);
ctx.fill();
ctx.beginPath();
ctx.moveTo(50, 110);
ctx.strokeStyle="#9c7000";
ctx.quadraticCurveTo(20, 127.5, 50, 145);
ctx.fill();
//jambes
ctx.beginPath();
ctx.fillStyle="#9c7000";
ctx.fillRect(150, 290, 40, 60);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="#9c7000";
ctx.fillRect(210, 290, 40, 60);
ctx.fill();
// pieds
ctx.beginPath();
ctx.moveTo(150, 350);
ctx.quadraticCurveTo(170, 370, 190, 350);
ctx.fill();
ctx.beginPath();
ctx.moveTo(210, 350);
ctx.quadraticCurveTo(230, 370, 250, 350);
ctx.fill();
//entrejambes
ctx.beginPath();
ctx.fillStyle="white";
ctx.moveTo(190, 290);
ctx.quadraticCurveTo(200, 270, 210, 290);
ctx.fill();
