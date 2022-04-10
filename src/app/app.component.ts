import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';

  public itemData: string[] = [];
  onSubmit(myForm: any){
    console.log(myForm.form.value.task); 
    this.itemData.push(myForm.form.value.task);


  }
}
