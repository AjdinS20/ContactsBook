import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailComponent } from './contact-detail.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Contact } from '../../models/contact.model';
import { selectCurrentContact } from '../../store/selectors/contact.selectors';
import { Store } from '@ngrx/store';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;
  let store: MockStore;
  const mockContact: Contact = {
    firstName: 'John',
    lastName: 'Doe',
    phone: '060 000 000',
    email: 'test@example.com',
    address: 'sample adress',
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetailComponent],
      providers: [provideMockStore({
        selectors: [
          {
            selector: selectCurrentContact,
            value: mockContact
          }
        ]
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize contact$ observable', () => {
    expect(component.contact$).toBeDefined();
  });

  it('should render contact details', () => {
    store.overrideSelector(selectCurrentContact, mockContact);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p:nth-of-type(1)')?.textContent).toContain('First Name: John');
    expect(compiled.querySelector('p:nth-of-type(2)')?.textContent).toContain('Last Name: Doe');
    expect(compiled.querySelector('p:nth-of-type(3)')?.textContent).toContain('Phone: 060 000 000');
    expect(compiled.querySelector('p:nth-of-type(4)')?.textContent).toContain('Email: test@example.com');
    expect(compiled.querySelector('p:nth-of-type(5)')?.textContent).toContain('sample adress');
  });
});
