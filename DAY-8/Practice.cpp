#include<iostream>
#include<climits>
#include<omp.h>
using namespace std;

void min (int arr[], int iNo)
{
    int iMin = INT_MAX;
    #pragma omp for parallel reduction (min = iMin)
    for(int i=0; i<iNo; i++)
    {
        if(arr[i]<iMin)
        {
            iMin = arr[i];
        
        }
        cout<<"\n Minimum value is: "<<iMin;
    }
}

void max (int arr[], int iNo)
{
    int iMax = INT_MIN;
    #pragma omp for parallel reduction (max = iMax)
    for(int i=0; i<iNo; i++)
    {
        if(arr[i]>iMax)
        {
            iMax = arr[i];
        
        }
        cout<<"\n Maximum value is: "<<iMax;
    }
}

void sum (int arr[], int iNo)
{
    int iSum=0;
    #pragma omp for parallel reduction (+: iSum)
    for(int i =0; i<iNo; i++)
    {
        iSum += arr[i];
    }
    cout<<"\n sum is: "<<iSum;
}

void avg (int arr[], int iNo)
{
    int iSum=0;
    #pragma omp for parallel reduction (+: iSum)
    for(int i =0; i<iNo; i++)
    {
        iSum += arr[i];
    }
    cout<<"\n averagete is: "<<iSum;
}
int main()
{
    int *ptr=NULL;
    int iValue =0;

    cout<<"enter number of elements: ";
    cin>>iValue;
    ptr = new int[iValue];
    cout<<"\nenter elements: ";
    for(int i=0; i<iValue; i++)
    {
        cin>>ptr[i];
    }
    
    min(ptr, iValue);
    max(ptr, iValue);
    sum(ptr, iValue);
    avg(ptr, iValue);
}