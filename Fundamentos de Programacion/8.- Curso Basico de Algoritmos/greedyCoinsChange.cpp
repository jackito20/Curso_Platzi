/* 
Buscaremos el minimo de monedas posible para obtener el cambio total N, 
tomando monedas del set monedas coinSet[] 
necesitamos un auxiliar "res" stack recursivo 
crear una funcion recursiva para encontrar el valor 
y retornar "monedas necesarias para el cambio"
 */

#include <iostream>
#include <climits>

using namespace std;

int greedyChange(int coinSet[], int n,  int N){
    cout << "greedyChange " << N << "\n";
    if (N==0)
        return 0;
    
    if (N<0)
        return INT_MAX;

    int coins = INT_MAX;
    cout << "   coins " << coins << "\n";
//recorremos todo nuestro set de moneas AKA opciones para dar cambio
    for(int i = 0; i<n; i++)
    {
        int res = greedyChange(coinSet, n, N - coinSet[i]);
        cout << "   res " << res << "\n";
        if(res != INT_MAX)
            coins = min(coins, res+1);
            cout << "   coins min " << coins << "\n";
    }
    
    cout << "   coins " << coins << "\n";
    return coins;
}

int main(int argc, char const *argv[])
{
    int coinSet[]={1,5,10,15,20};
    int n = sizeof(coinSet)/sizeof(coinSet[0]);

    int N = 27;

    cout << "el minimo de monedas para dar cambio es: " 
            << greedyChange(coinSet, n, N);
    return 0;
}


 