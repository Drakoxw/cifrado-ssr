import { ObscureEmailPipe } from './obscure-email.pipe';

describe('ObscureEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new ObscureEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
