var score=0;
function game()
{
	var dice1 = Math.floor(Math.random() * 6) + 1;
document.getElementById('dice1').style.opacity = '1';
document.getElementById('dice1').src = 'dice' + dice1 + '.jpeg';
score=score+dice1;
document.getElementById('num').textContent="  "+score;
}
function newgame()
{
	document.getElementById('dice1').style.opacity="0";
	alert("YOUR SCORE IS "+score);
   
	score=0;
	document.getElementById('num').textContent="  "+score;

}