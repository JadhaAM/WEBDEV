#include<stdio.h>
#include<string.h>

struct student
{
    int age;
    char name[20];
    int prn;
};

int main()
{
    struct student s1;
    int  a; 
    printf(" ......\tstudent login.....\n"); 

    printf("entre your name :\n");
     gets(s1.name);
     printf("enter your age :");
     scanf("");


    return 0;
}
