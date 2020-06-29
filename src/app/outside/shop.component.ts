import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { StateService } from '../shared/shared.module';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public displayedColumns: string[] = ['select', 'name'];
  public dataSource = new MatTableDataSource<string>(this.stateService.state.items);
  public selection = new SelectionModel<string>(true, []);

  constructor(private stateService: StateService) { }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public countSelected(): number {
    return this.selection.selected.length;
  }
}
