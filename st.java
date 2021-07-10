public static void BalanceB(String ss)
{
 Stack st=new Stack();
    for(int i=0;i<ss.length;i++)
    {
      char ch=ss.charAt(i);
      if(ch=='('|| ch=='{'||ch=='[')
      {
        st.push(ch);
      }
      else  if(ch=='}'||ch==']'||ch==')')
      {
	     if(st.size()==0)
	     {
		  return false;
		  }
         if(ch==')'&&st.peek()!='('ch=='{' && st.peek()!='}' || st.peek()=='[' && st.peek()!=']')
         {
		   return false;
         }
      }

       if(st.size()>0)
       {
		 return false;

		}
		return true;
    }
}
