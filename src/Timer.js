var time = document.getElementById("Timer");
var min = 2;
var seconds = 0;

// TODO: Make if statements more performant/less nested
var timer = setInterval(function(){
	if(seconds == 0 && min == 0)
	{
		clearInterval(timer);
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
		seconds = 59
	}
	else
	{
		seconds = seconds - 1;
	}
	
},1000);