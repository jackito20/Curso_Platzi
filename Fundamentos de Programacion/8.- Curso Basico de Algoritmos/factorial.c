#include <stdio.h> 
#include <math.h> 
  
/* Función facorial*/
int factorial(int n) 
{ 
   int f = 1;
   for(int i=1; i<=n; i++){
        f=f*i;        
   } 

   return f;
} 
  
/* Driver program to test factorial */
int main() 
{ 
    int n = 0; 
  
    int f = factorial(n); 
    printf("El factorial de %d es = %d", n, f); 
  
    return 0; 
} 
