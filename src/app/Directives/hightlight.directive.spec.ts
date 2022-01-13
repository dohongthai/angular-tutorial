import { HightlightDirective } from './hightlight.directive';

describe('HightlightDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new HightlightDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
