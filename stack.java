import java.util.*;
class stack
{
  public static void main(String aaa[])
  {
  Scanner sc=new Scanner(System.in);
   Stack<String> s1=new Stack();
    String input="";
     while(input!="stop")
     {
		  input=sc.nextLine();
         if(input.equals("+")||input.equals("-"))
         {
             while((s1.size()!=0)||(s1.peek().equals("+"))||(s1.peek().equals("-")))
              {
				  System.out.println("pop"+s1.pop());
			  }


         }
         else
         {
           System.out.println("push"+s1.push(input));

         }
        System.out.println(s1);
     }
  }
}
