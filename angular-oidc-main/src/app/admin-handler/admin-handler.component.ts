import { Component, OnInit } from '@angular/core';
import { userList } from '../admin-list';

@Component({
  selector: 'app-admin-handler',
  templateUrl: './admin-handler.component.html',
  styleUrls: ['./admin-handler.component.scss']
})
export class AdminHandlerComponent implements OnInit {

  showUserDetails: boolean = false;
  displayStyle = 'none';
  displayStyleAddRoleModal = 'none';

  adminUserList: any[] = userList;
  ntlogin: string;
  role: string = "0";
  fullName: string;
  IsEscalation: string = "Yes";

  selectedDeleteUser: any;
  inputValidationError: boolean = false;
  isAddRoleVisible: boolean = false;
  selectedTower: string;
  modalText: string = 'Add Role';
  isEditClick: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  selectTower(towerSelected: string) {
    this.selectedTower = towerSelected;
    this.isAddRoleVisible = true;
    this.showUserDetails = true;
  }

  openDeleteModal(user: any) {
    this.selectedDeleteUser = user;
    this.displayStyle = "block";
  }

  deleteUser() {
    this.adminUserList = this.adminUserList.filter(x => x.Nt_Id !== this.selectedDeleteUser.Nt_Id);
    this.displayStyle = "none";
  }

  closePopup() {
    this.displayStyle = "none";
    this.displayStyleAddRoleModal = 'none';
    this.inputValidationError = false;
  }

  openAddRoleModal() {
    this.ntlogin = '';
    this.fullName = '';
    this.isEditClick = false;
    this.modalText = 'Add Role';
    this.role = '0';
    this.displayStyleAddRoleModal = 'block';
  }

  saveAdminDetails() {
    if (this.ntlogin && this.fullName && this.role) {
      this.inputValidationError = false;
      this.adminUserList.push({
        Nt_Id: this.ntlogin,
        FullName: this.fullName,
        Role: this.role,
        IsEscalation: this.IsEscalation
      });
      this.displayStyleAddRoleModal = 'none';
    } else {
      this.inputValidationError = true;
      return;
    }
  }


  editUser(editUser: any) {
    this.isEditClick = true;
    this.modalText = 'Edit Role';
    this.displayStyleAddRoleModal = 'block';
    this.ntlogin = editUser.Nt_Id;
    this.fullName = editUser.FullName;
    this.role = editUser.Role;
    this.IsEscalation = editUser.IsEscalation
  }

  updateUserDetails() {
    this.isEditClick = false;
    this.displayStyleAddRoleModal = 'none';
    this.adminUserList.forEach(x => {
      if (x.Nt_Id === this.ntlogin) {
        x.Role = this.role;
        x.IsEscalation = this.IsEscalation;
      }
    });
  }

}
