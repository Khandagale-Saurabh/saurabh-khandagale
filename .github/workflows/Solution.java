import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
            Scanner sc=new Scanner(System.in);
            System.out.println("================================");
            for(int i=0;i<3;i++){
                String s1=sc.next();
                int x=sc.nextInt();
                //Complete this line
              if(x<=9)
              {
				  System.out.println(s1+"\t"+"00");
				  }
				  else if(x>=10 && x<=99)
				  {
					  System.out.println(s1+"\t"+"0"+x);

				  }
				  else
				  {

				  System.out.println(s1+"\t"+""+x);

					  }
            }
            System.out.println("================================");

    }
}



