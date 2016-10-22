void half(int key)
{
	while(top<=bot)
	{
		mid=(bot-top)/2+top;
		if (key==a[mid])
		{
			printf("%d\n",mid );
			return;
		}
		else if(key<a[mid])
		{
			bot=mid-1;
		}
		else
		{
			top=mid+1;
		}
	}
	printf("-1\n");
}