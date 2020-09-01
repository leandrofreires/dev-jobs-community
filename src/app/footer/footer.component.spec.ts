import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { FooterComponent } from './footer.component';
import { HarnessLoader } from '@angular/cdk/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import { SharedModule } from '../shared/shared.module';
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let loader: HarnessLoader;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should it have a footer tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('footer')).toBeTruthy();
  });

  it('should it have a nav tag inner footer', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('footer nav')).toBeTruthy();
  });

  it('should it have two buttons on nav inner footer', async () => {
    const footerLoader = await loader.getChildLoader('footer nav');
    const buttons = await footerLoader.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).toEqual(2);
  });
});
