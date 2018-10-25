import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
declare var $;
declare var jquery:any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataTable: any;
  dtOption: any;
  name: string;
  constructor() {

  }
  ngOnInit(): void {
    this.dtOption = {
      "lengthMenu": [[10, 20, -1], ["10 dòng", "20 dòng", "Tất cả"]],
      "pagingType": "full_numbers",
      "oLanguage": {
        "sLengthMenu": "Hiển thị _MENU_ ",
        "oPaginate": {
          "sFirst": "<<",
          "sLast": ">>",
          "sNext": ">",
          "sPrevious": "<"
        },
        "sInfo": "(_START_/_END_)",
        "sInfoEmpty": "Không có dữ liệu để hiển thị",
        "sInfoFiltered": "",
        "sZeroRecords": "Không tìm thấy"
      }
    };
    $('#table').DataTable(this.dtOption); 
  }
  onKey() {
    $('#table').DataTable().column(0).search(this.name).draw();
  }
}
