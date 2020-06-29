import request from 'supertest';
import {app} from "../../app";

it('fails when email not exist', async () => {
    return request(app).post('/api/users/signin')
    .send({email: "test@test.com" , password: "password" })
    .expect(400)
})
it('fails when incorrect password is supplied', async () => {
    await request(app).post('/api/users/signup')
    .send({email: "test@test.com" , password: "password" })
    .expect(201);

    return request(app).post('/api/users/signin')
    .send({email: "test@test.com" , password: "fsdfdssdas" })
    .expect(400);
})
it('response with a cookie with valid credentials' , async () => {
    await request(app).post('/api/users/signup')
    .send({email: "test@test.com" , password: "password" })
    .expect(201);

    const response = await request(app).post('/api/users/signin')
    .send({email: "test@test.com" , password: "password" })
    .expect(200)
expect(response.get('Set-Cookie')).toBeDefined();
});