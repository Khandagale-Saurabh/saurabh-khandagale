import java.io.*;
import java.util.*;

public class res_arraylist{

    public static void main(String[] args) throws Exception
    {
      Scanner sc =new Scanner(System.in);
      String sd=sc.nextLine();
      ArrayList<String> aa=getKPC(sd);
     System.out.println(aa);

    }
    static String[] codes={".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"};
    public static ArrayList<String> getKPC(String str)
    {
    //567


        if(str.length()==0)
        {
			ArrayList<String>a1=new ArrayList<>();
			a1.add("");
			return a1;
			}
          char ch=str.charAt(0);//5
          String rof=str.substring(1);//67


          ArrayList<String> retunwali=getKPC(rof);
          ArrayList<String> a1=new ArrayList<>();

         int num=(int)Integer.parseInt(""+ch);//5
          String element=codes[num];//mno
		//	String element=codes[ch-'0'];
          for(int i=0;i<element.length();i++)
          {
              char subelement=element.charAt(i);//m
              for(String res:retunwali)
              {
                  a1.add(subelement+res);
              }

          }
          return a1;
    }

}
