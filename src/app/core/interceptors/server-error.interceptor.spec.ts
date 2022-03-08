import { inject, TestBed } from '@angular/core/testing';
import { AppModule } from './../../app.module';
import { ServerErrorInterceptor } from './server-error.interceptor';

describe('Service: ServerError', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [ServerErrorInterceptor],
    });
  });

  it('should ...', inject([ServerErrorInterceptor], (service: ServerErrorInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
