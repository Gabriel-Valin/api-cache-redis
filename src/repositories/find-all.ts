import { faker } from '@faker-js/faker';

export const getAllUsers = () => {
    const USERS = []

    for (let i = 0; i <= 10000; i++) {
        USERS.push({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        })
    }

    return USERS
}
