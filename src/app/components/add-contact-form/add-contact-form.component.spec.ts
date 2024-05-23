import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AddContactFormComponent } from './add-contact-form.component';
import { FormsModule } from '@angular/forms';
import { addContact } from '../../store/actions/contact.actions';
import { By } from '@angular/platform-browser';

describe('AddContactFormComponent', () => {
  let component: AddContactFormComponent;
  let fixture: ComponentFixture<AddContactFormComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, AddContactFormComponent],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(AddContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize contact object', () => {
    expect(component.contact).toEqual({firstName: '', lastName: '', phone: '', email: '', address: '' });
  });

  it('should update form values', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstNameInput = compiled.querySelector('input[name="firstName"]') as HTMLInputElement;
    const lastNameInput = compiled.querySelector('input[name="lastName"]') as HTMLInputElement;
    const phoneInput = compiled.querySelector('input[name="phone"]') as HTMLInputElement;
    const emailInput = compiled.querySelector('input[name="email"]') as HTMLInputElement;
    const addressInput = compiled.querySelector('input[name="address"]') as HTMLInputElement;

    firstNameInput.value = 'John';
    lastNameInput.value = 'Doe';
    phoneInput.value = '1234567890';
    emailInput.value = 'john.doe@example.com';
    addressInput.value = '123 Main St';

    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.dispatchEvent(new Event('input'));
    phoneInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    addressInput.dispatchEvent(new Event('input'));

    expect(component.contact.firstName).toBe('John');
    expect(component.contact.lastName).toBe('Doe');
    expect(component.contact.phone).toBe('1234567890');
    expect(component.contact.email).toBe('john.doe@example.com');
    expect(component.contact.address).toBe('123 Main St');
  });

  it('should dispatch addContact action on form submit', () => {
    component.contact = {firstName: 'Jane', lastName: 'Doe', phone: '0987654321', email: 'jane.doe@example.com', address: '456 Elm St' };
    component.onSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith(addContact({ contact: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0987654321',
      email: 'jane.doe@example.com',
      address: '456 Elm St'
    } }));
  });
});
