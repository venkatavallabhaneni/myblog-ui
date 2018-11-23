import { TestBed } from '@angular/core/testing';

import { MyBlogRestService } from './myblog.service';

describe('MyBlogRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyBlogRestService = TestBed.get(MyBlogRestService);
    expect(service).toBeTruthy();
  });
});
