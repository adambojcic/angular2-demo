# angular2-demo
Angular2 demo wrb

#priprema za cloud9
https://community.c9.io/t/getting-started-with-angularjs/1729


#Pokretanje
$npm start

Terminal 1
$lite-server

Terminal 2
$tsc -w


Postavke:

tsconfig.json
    - tsc output stavljen u js direktorij
    - tsc map isključen



Korisno:

Bootstrap nav na active
--------------------------------------------------------------------------------
<ul class="nav navbar-nav">
  <li [routerLinkActive]="['active']"> <a [routerLink]="['one']">One</a></li>
  <li [routerLinkActive]="['active']"> <a [routerLink]="['second']">Second</a></li>
</ul>
