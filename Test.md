#折半查找法
###方法1：二分查找（递归实现）：
```
void srearch mid(int key)
{
	int mid;
	if(top>bot)
	{
		mid=(top+end)
		if(key==a[mid])
		{
			cout<<mid; 
			return 0;
		}
        else if(key<a[mid])     //x小于中间值取前半段
        {
            search(bot,mid-1);
        }
        else
        {
            search(mid+1,top);
        }
	}
    else
    {
        printf("-1\n");
        return;
    }
}
```
###方法1：二分查找（非递归实现）：
```
    





```