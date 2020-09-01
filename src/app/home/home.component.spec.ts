import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should it have article tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('article')).toBeTruthy();
  });

  it('should it have one logo inner article', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('article img#logo-project')).toBeTruthy();
  });

  it('should it have one header on article', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('article header')).toBeTruthy();
  });

  it('should it have one title and subtitle on header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('article header h1')).toBeTruthy();
    expect(compiled.querySelector('article header h2')).toBeTruthy();
  });

  it('the text on title should to be', () => {
    const defaultTitle = "Dev Jobs Community is a helper for devs looking for opportunities";
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('article header h1').textContent).toEqual(defaultTitle)
  });
  it('the text on subtitle should to be', () => {
    const defaultSubTitle = "This project is to bring together the github repositories with offers of vacancies available in different areas";
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('article header h2').textContent).toEqual(defaultSubTitle)
  });
});
