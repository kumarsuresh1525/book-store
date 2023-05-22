import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/module/app.module';

describe('Books Controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(GET) /books', async () => {
    const data = await request(app.getHttpServer()).get('/books').expect(200);
    expect(data.body).toBeDefined();
    expect(Array.isArray(data.body)).toBe(true);
  });

  it('(GET) /books?search=the', async () => {
    const data = await request(app.getHttpServer())
      .get('/books?search=the')
      .expect(200);
    expect(data.body).toBeDefined();
    expect(Array.isArray(data.body)).toBe(true);
  });

  it('(GET) /books?search=the&rating=2', async () => {
    const data = await request(app.getHttpServer())
      .get('/books?search=the&rating=2')
      .expect(200);
    expect(data.body).toBeDefined();
    expect(Array.isArray(data.body)).toBe(true);
  });

  it('(GET) /books?search=the&rating=2&minPrice=0&maxPrice=250', async () => {
    const data = await request(app.getHttpServer())
      .get('/books?search=the&rating=2&minPrice=0&maxPrice=250')
      .expect(200);
    expect(data.body).toBeDefined();
    expect(Array.isArray(data.body)).toBe(true);
  });
});
