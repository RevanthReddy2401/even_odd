var p1_score=0;
var p2_score=0;
var count=0;
var p1scores=[];
var p2scores=[];
function findnum()
{
    var py1_s=Math.ceil(Math.random()*100);
    var py2_s=Math.ceil(Math.random()*100);
    console.log(py1_s + py2_s);
    p1scores.push(py1_s);
    p2scores.push(py2_s);
    if(count<5)
    {
        if(py1_s%2==0)
        {
            p1_score++;
            document.getElementById("player1s").textContent=p1_score;
        }
        if(py2_s%2==0)
        {
            p2_score++;
            document.getElementById("player2s").textContent=p2_score;
        }
        updatecircle();
        count++;
    }
    else
    {
        if(p1_score>p2_score)
        {
            document.getElementById("res").textContent="Player 1 Wins!!!";
        }
        else if(p1_score<p2_score)
        {
            document.getElementById("res").textContent="Player 2 Wins!!!";
        }
        else{
            document.getElementById("res").textContent="Match Draw!!!";
        }
    }
}
function updatecircle(){
    var p1circle=document.getElementById("player1").children;
    var p2circle=document.getElementById("player2").children;
    console.log(p1circle);
    for(let i=0;i<p1scores.length;i++)
    {
        if(p1scores[i]%2==0)
            p1circle[i].style.backgroundColor="green";
        else
            p1circle[i].style.backgroundColor="red";
    }
    for(let i=0;i<p2scores.length;i++)
    {
        if(p2scores[i]%2==0)
            p2circle[i].style.backgroundColor="green";
        else
            p2circle[i].style.backgroundColor="red";
    }

}