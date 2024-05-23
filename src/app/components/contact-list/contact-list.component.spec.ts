import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Contact } from '../../models/contact.model';
import { selectAllContacts } from '../../store/selectors/contact.selectors';
import { Store } from '@ngrx/store';
import { selectContact } from '../../store/actions/contact.actions';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;
  const mockContacts: Contact[] = [
    { firstName: 'John', lastName: 'Doe', phone: '1234567890', email: 'john.doe@example.com', address: '123 Main St' },
    { firstName: 'Jane', lastName: 'Smith', phone: '0987654321', email: 'jane.smith@example.com', address: '456 Elm St' }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactListComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectAllContacts,
              value: mockContacts
            }
          ]
        }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize contacts$ observable', () => {
    expect(component.contacts$).toBeDefined();
  });

  it('should render contact list', () => {
    store.overrideSelector(selectAllContacts, mockContacts);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tr');

    expect(rows.length).toBe(mockContacts.length);
    expect(rows[0].querySelector('td:nth-of-type(1)')?.textContent).toContain('John');
    expect(rows[0].querySelector('td:nth-of-type(2)')?.textContent).toContain('Doe');
    expect(rows[1].querySelector('td:nth-of-type(1)')?.textContent).toContain('Jane');
    expect(rows[1].querySelector('td:nth-of-type(2)')?.textContent).toContain('Smith');
  });

  it('should dispatch selectContact action on row click', () => {
    store.overrideSelector(selectAllContacts, mockContacts);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const firstRow = compiled.querySelector('tr') as HTMLElement;

    firstRow.click();

    expect(dispatchSpy).toHaveBeenCalledWith(selectContact({ contact: mockContacts[0] }));
  });
});
