import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { component, testComponent } from 'ng-unit';

describe('ParentComponent', () => {
  let testBuilder: any;
  beforeEach(() => {
    testBuilder = testComponent(ParentComponent)
            .mock([
                ChildComponent
            ])

  });

  it('should create', () => {
    const subject = testBuilder.begin();
    subject.id = '456'
    expect(component(ChildComponent).parentId).toEqual('456');
  });
});
