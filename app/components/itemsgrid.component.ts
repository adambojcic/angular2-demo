import { Component } from '@angular/core';


@Component({
  selector: 'items-grid',
  template: `
<div class="list-group">
  
    <a href="#" class="list-group-item" *ngFor="let item of items">
      <div
        [hidden]="item.isEdit"
        (dblclick)="EditItem(item, focusable)"
        (mouseenter)="FocusFunction(item)"
        (mouseleave)="FocusOutFunction(item)"
      >
        <span>{{item.name}}</span>
        <span [hidden]="!item.isFocus">
          <input type="checkbox" [(ngModel)]="item.isChecked" />
          <span class="glyphicon glyphicon-edit"    aria-hidden="true" (click)="EditItem(item, focusable)"></span>
          <span class="glyphicon glyphicon-remove"  aria-hidden="true" (click)="DeleteItem(item)"></span>
        </span>
      </div>
      
      <div [hidden]="!item.isEdit">
        <input class="form-control" #focusable type="text" [(ngModel)]="item.name" placeholder="name" (blur)="DoneEditItem(item)"/>
      </div>
      
    </a>
  
    <a href="#" class="list-group-item">
        <input class="form-control" #newItem type="text" (keyup.enter)="AddNewItem(newItem.value)" placeholder="new item">
    </a>
  </div>`,
      styles: ['.itemRow { height: 50px; }']
})

export class ItemsGridComponent {
  demo:any = "demo";
  items = [
    {name:'item1-xxxxxxxxxxxxxxxxxxxx', isEdit: false, isFocus: false, isChecked:false, isSelected:false, isDirty:function(){return isEmpty(this.name);}},
    {name:'item2', isEdit: false, isFocus: false, isChecked:false, isSelected:false, isDirty:function(){return isEmpty(this.name);}},
    {name:'item3-xxxxx', isEdit: false, isFocus: false, isChecked:false, isSelected:false, isDirty:function(){return isEmpty(this.name);}},
    {name:'item4-xxxxxxxxxxxxxxxx', isEdit: false, isFocus: false, isChecked:false, isSelected:false, isDirty:function(){return isEmpty(this.name);}}
  ];
  
  
  EditItem = function(obj:any, inputbox:any){
    obj.isEdit = true;
    setTimeout(() => { inputbox.focus(); }, 1);
    inputbox.focus();
  };
  
  DoneEditItem = function(obj:any){
    if(!obj.isDirty())
      obj.isEdit = false;
    else
      obj.focus();
  };
  
  DeleteItem = function(obj:any){
    var index = this.items.indexOf(obj);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  };
  
  AddNewItem = function(name:any){
    if(!isEmpty(name))
      this.items.push({name:name, isEdit:false, isFocus:false, isChecked:false});
  };
  
  FocusFunction = function(obj:any){
    obj.isFocus = true;
  };
  
  FocusOutFunction = function(obj:any){
    obj.isFocus = false;
  };
}



// TODO - prebaciti u neki core lib
function isEmpty(str:any) {
  return (!str || 0 === str.length);
}