import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { MatSidenavHarness, MatDrawerHarness } from '@angular/material/sidenav/testing';
@Component({selector: 'app-header', template: ''})
class HeaderStubComponent { }

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        RouterOutletStubComponent,
        FooterStubComponent,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    component  = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it('should it have a sidenav container component', async () => {
    const sidenavContainer = await loader.getHarness(MatDrawerHarness);
    expect(sidenavContainer.host).toBeDefined();
  });

  it('should it have a sidenav', async () => {
    const sidenav = await loader.getHarness(MatSidenavHarness);
    expect(await sidenav.host()).toBeDefined();
  });

  it('should it have a element app-header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });
  
  it('should it sidenav mode over', async () => {
    const sidenav = await loader.getHarness(MatSidenavHarness);
    expect(await sidenav.getMode()).toEqual('over');
  });

  it('should it to be closed on start', async () => {
    const sidenav = await loader.getHarness(MatSidenavHarness);
    expect(await sidenav.isOpen()).toBeFalse();
  });

  //it('should sidenav open on click button menu', async () => {
  //
  //});

  it('should it have a element main', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('main')).toBeTruthy();
  });

  it('should it have a element main in router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('main router-outlet')).toBeTruthy();
  });

  it('should it have a element app-footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

});
