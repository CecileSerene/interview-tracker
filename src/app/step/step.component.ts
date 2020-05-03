import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() stepId
  public date: Date
  public type: string
  public notes: string
  public db
  public data


  constructor(db: AngularFirestore) {
    this.db = db
    
   }

  ngOnInit(): void {
    console.log("step")
    console.log(this.stepId)
    this.db.collection("step").doc(this.stepId).get().toPromise().then((doc) => {
        this.data = doc.data();
          this.date = this.data.date;
          this.notes = this.data.notes;
          this.type = this.data.type;
    });
    
  }

}
