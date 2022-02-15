var time = document.getElementById("Timer");
var minutes = 20;
var second = 0;

startTimer(minutes,second)
function startTimer(min,seconds)
{
	// TODO: Make if statements more performant/less nested
	var timer = setInterval(function(){
		if(seconds == 0 && min == 0)
		{
			clearInterval(timer);
			showBreakButton()
			time.innerHTML = "00:00"
		}
		else
		{
			var strTime = "";
			if(min < 10)
			{
				strTime = '0' + min + ':'; 
			}
			else
			{
				strTime = min + ':';
			}

			if(seconds < 10)
			{
				strTime = strTime + '0' + seconds;
			}
			else
			{
				strTime = strTime + seconds;
			}

			time.innerHTML = strTime;
		}
		
		if(seconds == 0)
		{
			min = min - 1;
			seconds = 59;
		}
		else
		{
			seconds = seconds - 1;
		}
		
	},1000);
}

function showBreakButton()
{
	var breaker = document.getElementById("breakBut");
	breaker.style.visibility = "visible"
}

function hideBreakButton()
{
	var breaker = document.getElementById("breakBut");
	breaker.style.visibility = "hidden";
	startTimer(0,20);
}