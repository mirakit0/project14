import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/models/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  @Input() myWorkerType = MyWorkerType;
  workerForm: FormGroup;

  public mask = ['+', '7', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.workerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.pattern(/^[+,0-9]+$/), Validators.required]),
      type: new FormControl(0, [Validators.required])
    });

  }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onChangeWorker(worker) {
    this.editWorker.emit({
      name: this.workerForm.value.name,
      surname: this.workerForm.value.surname,
      number: this.workerForm.value.number,
      type: this.workerForm.value.type,
      id: worker.id,
    });
  }

}
