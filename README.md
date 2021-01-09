# About Test

This repository has 2 applications, first .Net Web APi as micro-service and second Single page (SPA) frontend app in Angular.

1. __GamaAviationApi__ .Net 5 Web APi
2. __GamaAviationApp__ Angular Frontend App

## GamaAviationApi

There is only one APi Controller in this micro-service name as "__ProductController__". It has one action method "__SaveProductData__" which calls a command "__SaveProductDateIntoTextFileCommand__" using __Mediator__ and writes data into "__File.txt__" text file in the solution and returns the last data written in the file as "__ProductDto__".

## GamaAviationApp

This Angular Single Page App (SPA)  has only one component "__AppComponent__" which has Product data Input Form and post it to __GamaAviationApi__ as required int the test. This form has also client side and server side form validation as required. __Bootstrap__ has been used for form UI.

# Running Apps For Testing

## GamaAviationApi

Run following .Net CLI commands for .Net API.

```text
1. CD [Base-Directory]\gama-aviation-test\microservice\GamaAviationApi
2. dotnet restore
3. dotnet run
```

Then visit this ULR in the browser to view API ```https://localhost:5001/swagger/index.html```

## GamaAviationApp

Run following Angular CLI commands for frontend app.

```text
1. CD [Base-Directory]\gama-aviation-test\frontend-app\GamaAviationApp
2. ng serve --prod --open
```

__NOTE:__  
1. *Frontend project is using Angular 11 please update your angular cli if not same.*  
2. *.Net Web API is using .NET 5 please update your .NET SKD if not same.*