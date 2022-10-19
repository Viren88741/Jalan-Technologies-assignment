<script>

function rearrange(arr, n)
{

	let temp = new Array(n);


	let small = 0, large = n - 1;

	let flag = true;


	for (let i = 0; i < n; i++) {
		if (flag)
			temp[i] = arr[large--];
		else
			temp[i] = arr[small++];

		flag = !flag;
	}


	for (let i = 0; i < n; i++)
		arr[i] = temp[i];
}


	var n = prompt('Enter size of array');
	var arr = [];
	for(var a=0; a<n; a++){
	    arr[a] = prompt('Enter Element one by one' + (a+1));
	}

	document.write("Original Array<br>");
	for (let i = 0; i < n; i++)
		document.write(arr[i] + " ");

	rearrange(arr, n);

	document.write("<br>Modified Array<br>");
	for (let i = 0; i < n; i++)
		document.write(arr[i] + " ");

</script>
