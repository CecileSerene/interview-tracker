import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  public status: string
  public companyName: string
  public role: string
  public notes: string
  public origin: string
  public contact: string
  public url: string
  public data
  public steps
  public loaded: boolean = false

  constructor(db: AngularFirestore) { 
    db.collection("application").get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          this.data = doc.data();
          this.updateData()
      });
    });
  }

  ngOnInit(): void {
    
  }

  updateData(): void {
    this.status = "Propect"
    this.companyName = this.data.companyName
    this.role = "Full-stack developper"
    this.notes = this.data.notes
    this.origin = "Facebook message"
    this.contact = this.data.contact
    this.url = "pricehubble.com"
    this.steps = this.data.steps
    console.log(this.steps)
    this.steps.forEach(step => console.log(step))
    this.loaded = true
  }

}
