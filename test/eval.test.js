'use strict';

const jestOpenAPI = require('jest-openapi').default
const request = require('supertest')
const path = require('path')

jestOpenAPI(path.join(__dirname, '../oas.yaml'))
let app = require( '../src/javascript' )

describe('Тести для шляху "/eval"', () => {

    describe('Оцінювання моделі', function() {

        test('Повинен повернути масив оцінок для типів іменованих сутностей, код відповіді - 200', async () => {

            let res = await request(app)
                .post(`/eval`)
                .set("Content-Type","text/plain; charset=utf-8")

            expect(res.status).toEqual(200)
            expect(res).toSatisfyApiSpec()

        });
    });
});