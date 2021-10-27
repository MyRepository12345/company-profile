import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { CompaniesComponent } from './companies.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('CompaniesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CompaniesComponent
      ],
      imports: [BrowserAnimationsModule, MatDialogModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CompaniesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
