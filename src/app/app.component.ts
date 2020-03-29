import { Component } from '@angular/core';
import { ModalConfig } from './config/modal-config';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DraggableModalComponent } from './modal/draggable-modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  buttonText: string = 'Open Modal';
  
  modalRef: any;
  modalOptions: NgbModalOptions = ModalConfig;

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalRef = this.modalService.open(DraggableModalComponent, this.modalOptions);
    this.modalRef.componentInstance.title = 'Drag Me!';
    this.modalRef.componentInstance.message = 'Try dragging this modal around using the modal header!';
    this.modalRef.componentInstance.onSubmitSubject
      .subscribe((res: boolean) => {
        this.buttonText = 'Open Modal Again!';
      });
  }
}
