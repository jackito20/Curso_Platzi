#include "stdlib.h"     //libreria standard
#include "stdio.h"      //para poder recuperar info del teclado e imprimir en pantalla
#include "string.h"     //para manejar strings

struct client
{
    char Name[50];
    char Id[10];
    float Credit;
    char Address[100];
};

int main(int argc, char const *argv[])
{
    struct client client1 = {0};
    strcpy(client1.Name, "Camilo V");
    strcpy(client1.Id, "000000001");
    client1.Credit = 1000000;
    strcpy(client1.Address, "Calle 1, cr 1, ciudad bolivar");
    
    printf("The client name is: %s \n", client1.Name);     //%s string
    printf("The client id is: %s \n", client1.Id);
    printf("The client credit is: %f \n", client1.Credit);  //%d formato para un numero
    printf("The client address is: %s \n", client1.Address);
    return 0;
}
