import { TestBed } from '@angular/core/testing';

import { MyBlogResolverService } from './my-blog-resolver.service';

describe('MyBlogResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyBlogResolverService = TestBed.get(MyBlogResolverService);
    expect(service).toBeTruthy();
  });
});
