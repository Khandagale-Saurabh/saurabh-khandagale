import java.util.*;
class  Test<T>
{
 T a;
 Test(T x)
 {
  a=x;
 }

 T get()
 {
  return a;
 }
}
class alpha
{
 public static void main(String aa[])
 {
  Test<Integer> a1=new Test(10);
  Integer ans= a1.get();
  System.out.println(ans);
  }
 }
