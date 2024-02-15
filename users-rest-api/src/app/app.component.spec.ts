import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title to "users-rest-api"', () => {
    expect(component.title).toEqual('users-rest-api');
  });

  it('should call apiService.getUsersRestApiNodeJS on init', () => {
    const apiServiceSpy = jasmine.createSpyObj('APIUserService', ['getUsersRestApiNodeJS']);
    component.apiService = apiServiceSpy;
    component.ngOnInit();
    expect(apiServiceSpy.getUsersRestApiNodeJS).toHaveBeenCalled();
  });

  it('should map user data and set to users property', () => {
    const sampleData = [{id: 1}, {id: 2}];
    component.apiService.getUsersRestApiNodeJS = () => of(sampleData);
    component.ngOnInit();
    expect(component.users.length).toBe(2);
    expect(component.users[0].picture).toContain('1.png');
  });

  it('trackById should return user id', () => {
    const user = {id: 1};
    expect(component.trackById(0, user)).toBe(1);
  });

});
