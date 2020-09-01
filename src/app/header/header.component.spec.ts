import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { SharedModule } from '../shared/shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should it have a header tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header')).toBeTruthy();
  });

  it('should it have a mat-tolbar inner header', async () => {
    const headerLoader = await loader.getChildLoader('header');
    const toolbar = await headerLoader.getHarness(MatToolbarHarness);
    expect(toolbar).toBeTruthy();
  });

  it('should it have a h1 tag on toolbar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header mat-toolbar h1')).toBeTruthy();
  });

  it('should it have h1 title as Dev Jobs Community', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('header mat-toolbar h1').textContent).toEqual('Dev Jobs Community');
  });

  it('should it have a nav tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header mat-toolbar nav')).toBeTruthy();
  });

  it('should it have one link for repo inner nav', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelectorAll('nav a').length).toEqual(1);
    expect(compiled.querySelector('nav a').getAttribute('title')).toEqual('project on github');
  });
});
